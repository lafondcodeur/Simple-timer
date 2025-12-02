import { useRef, useState } from "react";

const App = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    if (isRunning) {
      //Clear Intervalle to stop the runner
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      //Start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mt-4 mb-6">
        Timer: {time}
      </h2>

      <button
        onClick={toggleTimer}
        className="m-3 bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="mt-3 bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Reset
      </button>
    </div>
  );
};

export default App;
