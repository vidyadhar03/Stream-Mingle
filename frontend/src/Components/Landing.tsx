import { useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [name, setName] = useState("");

  console.log(name);

  return (
    <div className="p-16 flex justify-between">
      <div className="px-16 py-8 border-2 border-black rounded-lg shadow-xl">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="p-2 border-2"
        />
        <Link
          to={`/room/?name=${name}`}
          className="bg-blue-200 hover:bg-blue-600 rounded-xl shadow-xl"
        >
          Join
        </Link>
      </div>
    </div>
  );
};
