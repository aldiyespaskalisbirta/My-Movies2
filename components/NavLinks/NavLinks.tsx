import Link from "next/link";
import React from "react";

function NavLinks() {
  return (
    <nav className="text-gray-100 font-poppins flex space-x-4">
      <Link href={`/movie`}>Popular</Link>
      <Link href={`/movie/now-playing`}>Now Playing</Link>
      <Link href={`/movie/upcoming`}>Upcomming</Link>
      <Link href={`/movie/top-rated`}>Top Rated</Link>
    </nav>
  );
}

export default NavLinks;
