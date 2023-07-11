import { useState } from "react";
const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleClick = (e) => {
    const textAreaValue = e.target.previousSibling.value;
    setDisplayText(textAreaValue);
  };
  return (
    <div className="flex flex-col items-center">
      <textarea
        className="px-4 py-2 mt-4 border border-gray-300 rounded"
        rows="4"
        cols="50"
      ></textarea>
      <button
        className="px-4 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Display Text
      </button>
      <div className="mt-4 text-lg text-center text-gray-800">
        Text: <span className="text-green-600">{displayText}</span>
      </div>
    </div>
  );
};

export default Content;
