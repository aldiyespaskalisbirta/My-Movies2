import React from "react";
import NavLinks from "../NavLinks/NavLinks";
import SearchBox from "../SearchBox/SearchBox";
import User from "../User/User";

function Header() {
  return (
    <header className="flex justify-between px-24 py-2 bg-zinc-800 items-center">
      <div>
        <h1 className="logo text-4xl font-bold text-gray-100 font-poppins">
          MY MOVIES
        </h1>
      </div>
      <div>
        <NavLinks />
      </div>
      <div className="flex space-x-4 items-center">
        {/* search */}
        <SearchBox />
        {/* user */}
        <User />
      </div>
    </header>
  );
}

export default Header;
