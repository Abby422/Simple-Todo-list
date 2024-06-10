import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900">
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-full md:w-1/4 bg-white border-r-2 border-gray-100 z-20`}
      >
        <div className="p-4">
          <h2 className="text-2xl mb-4">Dashboard</h2>
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/dashboard/home" className="text-black font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/cards" className="text-black font-medium">
                Cards
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-4 md:ml-0 ml-64">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-blue-500 text-white p-2 rounded-full fixed top-4 right-4 z-30"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <div>
            <h1 className="text-4xl mb-8 text-white">
                Dashboard <span className="text-blue-500">Page</span>
            </h1>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
