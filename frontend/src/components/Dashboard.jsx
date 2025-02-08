import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const nav = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState(localStorage.getItem("email") || null);
    const [questions, setQuestions] = useState([]);
    const [firstLogin, setFirstLogin] = useState(false);
    const handle = async () => {
        if (email !== null) {
            const response1 = await fetch(`http://localhost:3001/auth/firstLogin/${email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response1.status === 201 && !firstLogin) {
                setFirstLogin(true);

                // Fetch the dashboard questions from backend
                const response = await fetch(`http://localhost:3001/auth/dashboard/${email}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                console.log("Received questions:", data.questions);

                localStorage.setItem("questions", JSON.stringify(data.questions));

                setQuestions(data.questions);
            }
        }
    };
    
    useEffect(() => {
        const queryEmail = new URLSearchParams(location.search).get("email");
        if (queryEmail) {
            setEmail(queryEmail);
        }
        const storedQuestions = localStorage.getItem("questions");
        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions)); 
        }
    }, [location.search]);

    const navToAi = () => {
        nav("/AskAI")
    }

    return (
        <div className="min-h-screen bg-neutral-900 text-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                        Daily DSA Challenge
                    </h1>
                    <button 
                        onClick={handle}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <span>Ready For Today's Challenge?</span>
                    </button>
                </div>

                <div className="bg-neutral-800 rounded-xl p-8 mb-8 shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-indigo-400">Today's Challenge:</h3>
                    {questions.length > 0 ? (
                        <div className="space-y-6">
                            {questions.map((question, index) => (
                                <div 
                                    key={index}
                                    className="bg-neutral-900 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className={`h-10 w-10 bg-${index === 0 ? 'indigo' : index === 1 ? 'purple' : 'pink'}-600/20 rounded-lg flex items-center justify-center`}>
                                                <span className="text-xl font-bold text-${index === 0 ? 'indigo' : index === 1 ? 'purple' : 'pink'}-500">
                                                    {index + 1}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold text-white mb-2">{question.title}</h4>
                                            <a 
                                                href={question.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 inline-flex items-center space-x-2"
                                            >
                                                <span>Solve Challenge</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-gray-400">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"/>
                            </svg>
                            <p className="text-lg">No questions available. Click the button above to get today's challenges!</p>
                        </div>
                    )}
                </div>

                <div className="text-center">
                    <button 
                        onClick={navToAi}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                        <span>Need Help? Ask AI</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;