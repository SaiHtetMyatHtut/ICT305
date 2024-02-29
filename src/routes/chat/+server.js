import { json } from '@sveltejs/kit';
import { GoogleGenerativeAI } from '@google/generative-ai';

const MODEL_NAME = 'gemini-pro';
let MESSAGE_HISTORY = [];
console.log('Initialising Google Generative AI ...')
const GEMINI_API_KEY = import.meta.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyAv31hw2jnZ180UE803Htb5UlogheWQjJ0");
const model = genAI.getGenerativeModel({ model: MODEL_NAME });
MESSAGE_HISTORY = [
    {
      role: "user",
      parts: "Hello, I have 2 dogs in my house.",
    },
    {
      role: "model",
      parts: "Great to meet you. What would you like to know?",
    },
  ];
const chat = model.startChat(
    {
        history: MESSAGE_HISTORY,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    }
);
console.log('Log : ', await chat.getHistory());


export async function POST({ request, cookies }) {
    const body = await request.json();
    let response = '';
    try {
        
        const result = await chat.sendMessage(body.message);
        response = result.response.text();
        chat.params.history = [
            ...MESSAGE_HISTORY,
            {
                parts: body.message,
                role: 'user'
            }
        ];
       
        console.log('Log : ', await chat.getHistory());
    } catch (e) {
        console.error(e);
    }

    return json({ message: response });
}