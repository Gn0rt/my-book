<script setup></script>
<template>
    <main class="grid min-h-full place-items-center bg-[#FF971D] px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="text-base font-semibold text-white">404</p>
            <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Not found :(</h1>
            <p class="mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8">Sorry, we couldn’t find the product you’re looking for.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link to="/" class="rounded-md bg-[#A3D8F4] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 duration-200">Go back home</router-link>
            </div>
        </div>
    </main>
</template>