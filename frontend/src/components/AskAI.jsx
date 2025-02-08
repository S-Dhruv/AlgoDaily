import React, { useState } from 'react';

const AskAI = () => {
    const [question, setQuestion] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const formatMessage = (content) => {
        return content
            .replace(/### (.+)/g, '<h3 class="text-lg font-bold">$1</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            });

            if (!response.ok) {
                throw new Error('Failed to get response from AI');
            }

            const data = await response.json();
            const messages = data.answer.map(msg => ({ ...msg, formattedContent: formatMessage(msg.content) }));
            setChatHistory(prevHistory => [...prevHistory, ...messages]);
            setQuestion('');
        } catch (error) {
            setError(error.message || 'Failed to get response from AI');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-neutral-900 p-6 text-left">
            <h1 className="text-2xl text-white font-bold mb-4">Ask LangChain AI</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg flex gap-2 mb-4  ">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question"
                    className="flex-1 p-2 border border-gray-300 rounded-lg shadow-sm text-left text-white"
                />
                <button 
                    type="submit" 
                    disabled={isLoading} 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md disabled:opacity-50">
                    {isLoading ? 'Asking...' : 'Ask'}
                </button>
            </form>
            {error && <div className="text-red-500 mb-4 text-left text-white">{error}</div>}
            <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg text-left">
                {chatHistory.map((message, index) => (
                    <div key={index} className={`p-2 my-2 rounded-lg ${message.role === 'AI' ? 'bg-blue-100 text-left' : 'bg-green-100 text-left'}`}>
                        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: message.formattedContent }}></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AskAI;
