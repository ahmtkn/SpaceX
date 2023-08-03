<template>
  <div :key="item.id"  class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
    <NuxtLink :to="`crew/${item.id}`" aria-label="View Item">
      <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img class="object-contain w-full h-56 md:h-64 xl:h-80" :src="item.links.patch.small" alt="" />
        <div class="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p class="mb-4 text-lg font-bold text-gray-100">{{ item.name }}</p>
          <p class="text-sm tracking-wide text-gray-300">
            {{ item.details }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup>
defineProps(['item'])
</script>