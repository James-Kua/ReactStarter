import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center text-center p-6">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">
            React Starter
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A simple and modern template to kickstart your React project with
          ease.
        </p>
        <a href="/components">
          <button className="mt-6 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition">
            Get Started
          </button>
        </a>
      </header>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Easy Setup
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            Get started quickly with minimal configuration.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Modern Design
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            Built with Tailwind CSS for a sleek and responsive UI.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Optimized Performance
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            Designed to be lightweight and fast for better user experience.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
