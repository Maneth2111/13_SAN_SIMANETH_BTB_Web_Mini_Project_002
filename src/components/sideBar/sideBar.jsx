"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import addIcon from "../../../asset/add-square.png";
import moreIcon from"../../../asset/more.png";
import star from "../../../asset/star.png";

const workspaces = [
  { id: "hrd", name: "HRD Design", color: "text-red-500" },
  { id: "web", name: "Website Design", color: "text-blue-500" },
  { id: "mobile", name: "Mobile Design", color: "text-green-500" },
  { id: "spring", name: "Spring Boot", color: "text-purple-500" },
];

export default function WorkspaceSidebar() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(savedFavorites);
    }
  }, []);

  const toggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id) // Remove from favorites
      : [...favorites, id]; // Add to favorites

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
    <div className="h-screen  bg-white p-4 flex flex-col">
      {/* Workspace List */}
      <nav className="flex-1">
        <div className="flex justify-between items-center mb-4 mt-10">
          <h2 className="text-xl font-semibold text-gray-500">Workspace</h2>
          <Image src={addIcon} alt="Add workspace" className="w-5 h-5 cursor-pointer" />
        </div>

        <ul>
          {workspaces.map(({ id, name, color }) => (
            <li key={id} className="mb-2 flex justify-between items-center hover:bg-gray-100">
              <Link href="#">
                <span className={`flex items-center space-x-2 p-2 rounded-lg  cursor-pointer ${color}`}>
                  <span className="h-2 w-2 rounded-full bg-current"></span>
                  <span className="text-black">{name}</span>
                </span>
              </Link>
              <button onClick={() => toggleFavorite(id)}>
                <Image
                  src={moreIcon}
                  alt="Favorite"
                  className={`w-5 h-5 ${favorites.includes(id) ? "opacity-100" : "opacity-30"}`}
                />
              </button>
            </li>
          ))}
        </ul>
        {favorites.length > 0 && (
          <>
            <div className="flex justify-between items-center mt-6 mb-2">
              <h2 className="text-xl font-semibold text-gray-500">Favorites</h2>
              <Image src={star} alt="star" className="w-[24px] h-[24px]" />
            </div>
            <ul>
              {workspaces
                .filter(({ id }) => favorites.includes(id))
                .map(({ id, name, color }) => (
                  <li key={id} className="mb-2 flex justify-between items-center">
                    <Link href="#">
                      <span className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 cursor-pointer ${color}`}>
                        <span className="h-2 w-2 rounded-full bg-current"></span>
                        <span className="text-black">{name}</span>
                      </span>
                    </Link>
                    <button onClick={() => toggleFavorite(id)}>
                      <Image src={moreIcon} alt="Remove Favorite" className="w-5 h-5 opacity-100" />
                    </button>
                  </li>
                ))}
            </ul>
          </>
        )}
      </nav>
    </div>
    </>
  );
}
