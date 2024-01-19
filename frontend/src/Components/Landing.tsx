import { useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [name, setName] = useState("");

  console.log(name);

  return (
    <div className=" flex justify-between">
      <div className="px-10 flex flex-col py-4 border-2 rounded-lg shadow-xl">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="p-2 border-2 rounded-xl"
        />
        <Link
          to={`/room/?name=${name}`}
          className="bg-blue-200 hover:bg-blue-600 rounded-xl shadow-xl mt-2 p-2"
        >
          Join
        </Link>
      </div>
    </div>
  );
};
