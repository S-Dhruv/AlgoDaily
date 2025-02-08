export default function HowItWorks() {
    const steps = [
      {
        number: "01",
        title: "Sign in with Google",
        description: "Quick and secure authentication to start your daily practice journey.",
      },
      {
        number: "02",
        title: "Receive Daily Questions",
        description: "Get 3 carefully selected DSA problems of varying difficulty levels every day.",
      },
      {
        number: "03",
        title: "Practice with AI Support",
        description: "Get stuck? Our AI assistant provides hints, explanations, and guidance to help you solve problems.",
      },
      {
        number: "04",
        title: "Track Your Progress",
        description: "Monitor your improvement with detailed analytics and celebrate your achievements.",
      },
    ];
  
    return (
      <section id="howItWorks" className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">Your daily journey to DSA mastery</p>
          </div>
  
          <div className="relative">
            <div className="absolute hidden md:block w-1 bg-indigo-500/30 h-full left-1/2 transform -translate-x-1/2"></div>
  
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-center animate-[${
                    index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'
                  }_1s_ease-out]`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16'} mb-8 md:mb-0`}>
                    <div className="bg-neutral-800 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-indigo-500 mb-4">{step.number}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-1 md:pr-16'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }