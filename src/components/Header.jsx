import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-between px-5 py-3 bg-primary text-white fixed w-full z-10">
      <div>
        <h1 className="text-3xl font-bold text-blue-700">Ajor</h1>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-5 text-xl">
          <li className=" hover:transition-all hover:text-blue-700 hover:shadow-md">
          <a href="/#about">About</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="/#projects">Projects</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="/#cp">CP</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="/#contact">Contact</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden">
        <ul className="flex flex-col gap-5 text-xl">
          <li className=" hover:transition-all hover:text-blue-700 hover:shadow-md">
            <a href="/#about">About</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="/#projects">Projects</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="/#cp">CP</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="/#contact">Contact</a>
          </li>
          <li className=" hover:transition-all hover:text-blue-700">
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav>
      )}
    </div>
  );
}

export default Header;
