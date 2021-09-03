import {useState} from 'react';
import './App.css';
import {
  Link
} from "react-router-dom";

const items = Array(16).fill(0)

export function Rooms() {
  return (
    <main className="bg-yellow-50 dark:bg-gray-800 flex-1 overflow-y-auto">
      <div className="flex flex-wrap overflow-hidden items-center">
        { items.map((_,i) => (
        <div className="w-full overflow-hidden px-2 py-3 md:w-1/2 lg:w-1/3 xl:w-1/4" key={i}>
          {/* Card */}
          <Link to={`room/${i}`} class="cursor-zoom-in">
          <div className="rounded overflow-hidden shadow-md bg-white">
            <img className="w-full" src="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Mountain</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          </Link>
        </div>))}
      </div>
    </main>
  );
}
