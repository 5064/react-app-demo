import { useState } from 'react'
import logo from './assets/logo.svg';
import { Switch } from '@headlessui/react'

export function Header() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  return (
    <div className={`${darkModeEnabled ? "dark" : ""}`}>
    <header className="flex items-center justify-between bg-yellow-50 dark:bg-black p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <img src={logo}></img>
        <span className="font-semibold text-xl tracking-tight text-black dark:text-white">RoomPalette</span>
      </div>
      <div className="w-full block flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0">
            Blog
          </a> */}
        </div>
        <div className="flex px-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={`${darkModeEnabled ? "grey" : "orange"}`}>
            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
          </svg>
          <Switch
            checked={darkModeEnabled}
            onChange={setDarkModeEnabled}
            className={`${
              darkModeEnabled ? 'bg-yellow-400' : 'bg-gray-600'
            }  relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span
              className={`${
                darkModeEnabled ? 'translate-x-6' : 'translate-x-1'
              } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
            />
          </Switch>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={`${darkModeEnabled ? "yellow" : "lightgray"}`}>
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black dark:text-white dark:border-white mt-0">Sign in</a>
        </div>
      </div>
    </header>
</div>
  );
}

