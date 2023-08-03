<template>
  <div class="bg-slate-950">
    <div
        class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div
          class="relative flex items-center justify-between lg:justify-center lg:space-x-16"
      >
        <ul class="flex items-center hidden space-x-8 lg:flex">

          <li>
            <NuxtLink :to="{ path: headermenu.menus.past.slug, query: { endpoint: headermenu.menus.past.endpoint} }" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
              {{ headermenu.menus.past.name }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: headermenu.menus.last.slug, query: { endpoint: headermenu.menus.last.endpoint} }" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
              {{ headermenu.menus.last.name }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
        >
          <svg
              class="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              stroke-linejoin="round"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke="currentColor"
              fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span
              class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
          >{{ nuxtApp.$company.value.name}}</span
          >
        </NuxtLink>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink :to="{ path: headermenu.menus.next.slug, query: { endpoint: headermenu.menus.next.endpoint} }" class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
              {{ headermenu.menus.next.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

import headermenu from "~/common/headermenu";
const nuxtApp = useNuxtApp();

</script>