const Input = () => {
  return (
    <div className="flex flex-col space-y-4 max-w-sm w-full">
      <div className="flex flex-col">
        <label
          htmlFor="input"
          className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Input Label
        </label>
        <input
          type="text"
          id="input"
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm transition focus:border-blue-500 focus:ring focus:ring-blue-200
          dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-400 dark:focus:ring-blue-500"
          placeholder="Enter text here"
        />
      </div>
    </div>
  );
};

export default Input;
