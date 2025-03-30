import { useState } from "react";
import Input from "../components/Input";

const ComponentsPage = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<React.JSX.Element | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const components = [{ name: "Input", component: <Input /> }];

  const handleComponentSelect = (component: React.JSX.Element) => {
    setSelectedComponent(component);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`
        fixed md:static
        z-30 md:z-auto
        w-64 h-full
        flex flex-col justify-between 
        border-e border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div className="px-4 overflow-y-auto">
          <ul className="mt-2 space-y-1">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100">
                  <span className="text-sm font-medium">Components</span>
                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>
                <ul className="mt-2 space-y-1 px-4">
                  {components.map(({ name, component }) => (
                    <li key={name}>
                      <button
                        onClick={() => handleComponentSelect(component)}
                        className="block w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
                      >
                        {name}
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800">
            <a
              href="https://github.com/James-Kua/ReactStarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-300">
                  <strong className="block font-medium">ReactStarter</strong>
                  <span className="sr-only">
                    https://github.com/James-Kua/ReactStarter
                  </span>
                </p>
              </div>
            </a>
            <a
              href="/"
              className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="md:hidden flex items-center p-4 border-b border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
          {selectedComponent || (
            <p className="text-gray-500 dark:text-gray-400">
              Select a component from the sidebar
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
