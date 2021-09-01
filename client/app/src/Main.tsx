import {useState} from 'react';
import './App.css';

const items = Array(12).fill(0)

export function Main() {
  return (
    <div className="dark:bg-gray-800">
      <div className="flex flex-wrap overflow-hidden items-center ">
        {items.map(()=>(<div className="w-full overflow-hidden px-1 my-1 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <p>AIUEOAIUEOAIUEOAIUEOAIUEOAIUEOAIUEOAIUE</p>
        </div>))}
      </div>
    </div>
  );
}
