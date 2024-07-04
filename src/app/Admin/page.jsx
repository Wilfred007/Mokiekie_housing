import React from "react";
import Header from "../../components/Header";
import { House } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className="flex justify-between p-6 px-10 shadow-sm fixed top-0 w-full z-10 bg-white">
        <div className="flex gap-1">
          <h1 className="font-bold text-2xl text-slate-800">Lekan</h1>
          <House className="w-5 h-5" />
          <h1>Homes</h1>
        </div>
        <ul className="flex gap-5">
          <Link href={"/"}>
            <li className="text-sm text-gray-700">For Sell</li>
          </Link>
          <li className="text-sm text-gray-700">For Rent</li>
          <li className="text-sm text-gray-700">About Us</li>
        </ul>
      </div>
      <div>
        <h1>Welcome to the Admin Page</h1>
      </div>
    </div>
  );
}

export default page;
