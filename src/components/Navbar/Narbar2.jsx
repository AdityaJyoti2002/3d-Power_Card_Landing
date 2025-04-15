import React from 'react'

const Narbar2 = () => {
  return (
<nav class="fixed top-0 left-0 w-full bg-transparent border-gray-200 dark:bg-transparent z-50 backdrop-blur-md">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/form" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/Images/1.jpeg" class="h-10 bg-transparent" alt="lastmints logo" />
      {/* <span class="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">Flowbite</span> */}
    </a>
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <a href="/form" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pre Order</a>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-transparent rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-transparent">
        <li>
          <a href="/" class="block py-2 px-3 md:p-0 text-blue-700 dark:text-blue-500 font-semibold" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/Aboutus" class="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">About</a>
        </li>
        <li>
          <a href="/" class="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">Services</a>
        </li>
        <li>
          <a href="/" class="block py-2 px-3 md:p-0 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Narbar2
