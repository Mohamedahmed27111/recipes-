<template>
    <div>


        <nav class="bg-prim border-gray-200 dark:bg-gray-900 py-3 sticky	">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="text-3xl font-bold  text-G">3enba recipes</span>
    </NuxtLink>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-bold text-lg flex flex-col p-4 md:p-0 mt-4 border  bg-prim md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-prim dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <NuxtLink to="/" class="block py-2 px-3 text-red-1  rounded md:bg-transparent md:hover:text-red-2 md:p-0 " aria-current="page">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pizza" class="block py-2 px-3 text-red-1 rounded  md:hover:bg-transparent md:border-0 md:hover:text-red-2 md:p-0">pizza</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/seafood" class="block py-2 px-3 text-red-1 rounded  md:hover:bg-transparent md:border-0 md:hover:text-red-2 md:p-0">seafood</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/beef" class="block py-2 px-3 text-red-1 rounded  md:hover:bg-transparent md:border-0 md:hover:text-red-2 md:p-0">beef</NuxtLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>