import React, { useState } from "react";

interface Props {}

const Settings: React.FC<Props> = () => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="settings relative py-2 pl-8">
      <div className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="options hidden absolute top-9 bg-gray-900 rounded shadow-lg px-8 py-4 right-0 tracking-wider z-10  flex-col space-y-4">
        <div>
          <div>Themes</div>
          <ul className="flex space-x-4 my-2 text-sm text-gray-400">
            <li className="px-4 py-2 bg-gray-800 rounded transition-all cursor-pointer text-white">
              Dark
            </li>

            <li className="px-4 py-2 hover:bg-gray-800 rounded transition-all cursor-pointer  hover:text-white">
              Light
            </li>
          </ul>
        </div>
        <div>
          <div>Tracking</div>
          <ul className="flex space-x-4 my-2 text-sm text-gray-400">
            <li className="px-4 py-2 hover:bg-gray-800 rounded transition-all cursor-pointer  hover:text-white">
              Wide
            </li>

            <li className="px-4 py-2 bg-gray-800 rounded transition-all cursor-pointer  text-white">
              Wider
            </li>
            <li className="px-4 py-2 hover:bg-gray-800 rounded transition-all cursor-pointer  hover:text-white">
              Widest
            </li>
          </ul>
        </div>
        <div>
          <div>Font Size</div>
          <div className="px-4 py-2 flex justify-center items-center space-x-4">
            <div>{fontSize}&nbsp;px</div>
            <input
              type="range"
              name="fontSize"
              min="14"
              max="32"
              defaultValue={16}
              className="w-full appearance-none bg-gray-800 rounded h-2 cursor-pointer "
              onChange={(e) => setFontSize(+e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
