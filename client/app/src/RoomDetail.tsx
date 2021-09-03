import {useState} from 'react';
import img from "./assets/room3.jpg"
import './App.css';
import {
  Link
} from "react-router-dom";

export function RoomDetail() {
  return (
    <main className="bg-yellow-50 dark:bg-gray-800 flex-1 overflow-y-auto items-center">
      <div className="grid grid-cols-5 gap-2 sm:gap-0">
        <Link to="/" class="col-auto cursor-zoom-out sm:grid grid-flow-row place-items-center hidden">
          <div className="text-gray-400 hover:text-black dark:hover:text-white cursor-pointer">
            <span className="">一覧に戻る</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
          </div>
        </Link>
        {/* Card */}
        <div className="sm:col-span-3 col-span-full rounded-lg overflow-hidden bg-white shadow-lg sm:max-h-4/5 mt-5">
          <div className="grid sm:grid-cols-2 sm:max-h-4/5">
            <div>
              <img className="h-full object-contain" src={img} />
            </div>
              <div className="grid grid-rows-6 sm:max-h-4/5">
              <div className="row-span-1 p-1 overflow-y-auto w-full">
                <div className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#photography</div>
                <div className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#photography</div>
                <div className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-700 mr-2 mb-2">#photography</div>
              </div>
                {/* upper right */}
                <div className="px-4 py-2">
                  <span className="flex mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Alice</span>
                  </span>
                  <p className="text-gray-700 text-sm">
                    HAHAHAHAHAHAHAHAHA
                  </p>
                </div>
                {/* lower right */}
                <div className="p-2 overflow-y">
                  HAHAHAHAHAHAHAHAHA
                  HAHAHAHAHAHAHAHAHA
                  HAHAHAHAHAHAHAHAHA
                  HAHAHAHAHAHAHAHAHA
                  HAHAHAHAHAHAHAHAHA
                  </div>
              </div>
            </div>
            </div>
        </div>
        <Link to="/" class="col-auto cursor-zoom-out">
        </Link>
    </main>
  );
}
