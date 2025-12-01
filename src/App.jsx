import { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const onSubmit = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.style.color = "white";
    inputRef.current.setAttribute("placeHolder", "Updated...");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        useRef Example
      </h2>

      <div className="mb-6">
        <p className="text-gray-600 mb-2">Your text will appear below:</p>
        <div className="min-h-[60px] p-4 bg-gray-50 border border-gray-200 rounded-lg">
          {/* This is where the text will appear */}
        </div>
      </div>

      <div className="space-y-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type something..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <button
          onClick={onSubmit}
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
