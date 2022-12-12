import React from "react";

function User() {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-400 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 20 20"
        className="text-gray-300"
      >
        <rect x="0" y="0" width="20" height="20" fill="none" stroke="none" />
        <path
          fill="currentColor"
          d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0a15.94 15.94 0 0 0-13.3 0z"
        />
      </svg>
    </div>
  );
}

export default User;
