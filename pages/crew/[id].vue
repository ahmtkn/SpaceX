<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-10 lg:grid-cols-2 pt-10" v-for="crew in crews.docs">
      <div>
        <img class="object-cover w-full h-full rounded shadow-lg h-full" :src="crew.image" alt="" />
      </div>
      <div class="lg:pl-10">
        <a href="/" aria-label="Go Home" title="Logo" class="inline-block mb-5">
          <div class="flex items-center justify-center w-12 h-12 rounded-full"  :class="{ 'bg-green-500' : crew.status == 'active', 'bg-red-600' : crew.status == 'pasive', }">
            <svg class="w-10 h-10 text-deep-purple-accent-400"  stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
        </a>
        <h5 class="mb-4 text-4xl font-extrabold leading-none text-white">
           Name: {{ crew.name}}
        </h5>
        <h6 class="mb-4 text-4xl leading-none text-white">
          Agency: {{ crew.agency}}
        </h6>
        <hr class="mb-5 border-gray-300" />
        <div class="flex items-center space-x-4">
          <a :href="crew.wikipedia" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
            <svg viewBox="0 0 24 24" fill="currentColor" class="h-6">
              <path
                  d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: "site"
  })
  const { proxy } = getCurrentInstance();
  const config = useRuntimeConfig();

 const { data: crews }  = await useFetch(`${config.public.BASE_URL}/crew/query`, {
    method: "POST",
    body: {
      options: {
        launches: [
          proxy.$route.params.id
        ]
      }
    }
  });

 const status = ref(true);
</script>