# app.py
from flask import Flask, request, jsonify
from langchain_mistralai import ChatMistralAI
from langchain.schema import AIMessage, HumanMessage, SystemMessage
from flask_cors import CORS
import os
from dotenv import load_dotenv
import traceback

load_dotenv()

app = Flask(__name__)
CORS(app)


api_key = os.getenv('MISTRAL_API_KEY')
if not api_key:
    print("WARNING: MISTRAL_API_KEY not found in environment variables")

chat_history = []
system_message = SystemMessage(content="You are a helpful AI assistant.")
chat_history.append(system_message)

try:
    model = ChatMistralAI(
        api_key=api_key,
        model="mistral-large-latest"
    )
except Exception as e:
    print(f"Error initializing Mistral AI: {str(e)}")
    traceback.print_exc()

@app.route('/ask', methods=['POST'])
def ask():
    try:
        data = request.get_json()
        print(f"Received data: {data}")  
        
        question = data.get('question')
        if not question:
            return jsonify({'error': 'No question provided'}), 400
        
        print(f"Processing question: {question}")  
        
        chat_history.append(HumanMessage(content=question))
        result = model.invoke(chat_history)
        response = result.content
        chat_history.append(AIMessage(content=response))
        
        chat_history_dict = [{'type': type(msg).__name__, 'content': msg.content} for msg in chat_history]
        return jsonify({'answer': chat_history_dict})
    
    except Exception as e:
        print(f"Error in /ask endpoint: {str(e)}")
        traceback.print_exc()  
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)  