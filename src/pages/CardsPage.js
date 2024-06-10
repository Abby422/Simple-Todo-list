import React from "react";

const CardsPage = () => {
  const cardData = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "done",
    },
    {
      id: 2,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "done",
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "pending",
    },
    {
      id: 4,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      status: "pending",
    },
    {
      id: 5,
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "done",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "done",
    },
    {
      id: 7,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      status: "pending",
    },
    {
      id: 8,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      status: "pending",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white py-12 px-4 md:px-12">
      <h1 className="text-4xl mb-8">
        TODO <span className="text-blue-500">LIST</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="p-6 bg-white text-gray-900 rounded shadow-md flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <span
                className={`block w-6 h-6 rounded-full mr-4 ${
                  card.status === "done" ? "bg-green-500" : "bg-black"
                }`}
              ></span>
              <h2 className="font-bold text-lg">TODO TITLE</h2>
            </div>
            <p className="text-gray-500 mb-4">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
