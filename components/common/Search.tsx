import { SearchIcon } from "#/misc/icons";
import React, { useRef } from "react";
import Fuse from "fuse.js";
import ICard from "#/interface/ICard";

interface Props {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  keys: string[];
}

const Search: React.FC<Props> = ({ data, setData, keys }) => {
  const fuse = useRef(
    new Fuse(data, {
      includeScore: true,
      threshold: 0.5,
      keys,
    })
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.trim()) return setData(data);

    setData(fuse.current.search(e.target.value).map((el) => el.item));
  };

  return (
    <div className="h-[10rem]">
      <div className="flex justify-center h-full items-center">
        <input
          type="text"
          className={`px-6 py-4 bg-gray-900 rounded border-transparent 
          border-2 focus:border-purple-700 outline-none text-gray-200
          w-[80%] 
          `}
          placeholder="Name / Topics / Difficulty"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Search;
