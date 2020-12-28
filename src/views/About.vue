<template>
  <!-- <div class="about"> -->
  <!-- <h1>This is an about page</h1> -->
  <div class="bg-purple-400">
    <button class="bg-red-500 hover:bg-red-700 border-transparent">
      Hover me
    </button>
  </div>
  <div class="flex space-x-5">
    <span class="flex-1 bg-green-400">1</span>
    <span class="flex-1 bg-green-400">2</span>
    <span class="flex-1 bg-green-400">3</span>
    <span class="flex-1 bg-green-400">3</span>
    <span class="flex-1 bg-green-400">3</span>
    <span class="flex-1 bg-green-400">3</span>
  </div>

  <div class=" dark:bg-pink-400">
    <h1 class=" dark:text-white">Dark mode is here!</h1>
    <p class=" dark:text-gray-300">Lorem ipsum...</p>
  </div>

  <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src="@/assets/store.jpg" alt="Man looking at item at a store">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
  </div>
  
   <div class="bg-gray-200">
    <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
    <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
    <div class="inline-block text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
  </div>

  <div class="flex bg-green-100 ">
    <div class="flex-1 text-center bg-green-500 px-4 mx-2">1</div>
    <div class="flex-1 text-center bg-green-500 px-4 mx-2">2</div>
    <div class="flex-1 text-center bg-green-500 px-4 mx-2">3</div>
  </div>

  <h2 class=" text-indigo-500 font-semibold">grid</h2>

  <div class="table w-full">
    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">A cell with more content</div>
        <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 2</div>
        <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">Cell 3</div>
      </div>
      <div class="table-row">
        <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 4</div>
        <div class="table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm">A cell with more content</div>
        <div class="table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm">Cell 6</div>
      </div>
    </div>
  </div>

  <div class="flex flex-col ...">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  </div>

  <div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <!-- ... -->
  <div>9</div>
  </div>
</template>
