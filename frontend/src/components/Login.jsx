import React, { useEffect, useState } from 'react';
import Features from './Features';
 
export default function Login() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const userEmail = queryParams.get("email");

    if (userEmail) {
      localStorage.setItem("email",email);
      setEmail(email);
    }
  }, []);

  const googleAuth = () => {
    window.open(`${import.meta.env.VITE_API_URL}/auth/google/callback`, "_self");
  };
  
  return (
    <>
    <section id="hero" className="min-h-[70vh] bg-neutral-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-full py-12">
        <div className="md:w-1/2 space-y-8 animate-fadeInLeft">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Master DSA
            </span>
            <br />
            One Day at a Time
          </h1>
          <p className="text-xl text-gray-300">
            3 curated DSA questions daily + AI-powered guidance to enhance your problem-solving skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 animate-pulse"  onClick={googleAuth} >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
              </svg>
              <span>Start Practice with Google</span>
            </button>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Daily Questions</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>AI Assistant</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Track Progress</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 animate-fadeInRight">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-neutral-800 p-6 rounded-lg">
              <pre className="text-gray-300 font-mono text-sm">
                <code>{`function solveDailyChallenge() {
    // Today's Question
    let skills = [];
    for(let day = 1; day <= 365; day++) {
        skills.push('practice');
        improveSkills(skills);
    }
    return 'mastery';
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
    </>
  )
}

