<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <LaunchePast  v-if="currentEndpoint === 'past'" :items="launches"/>
    <LauncheLatest  v-else-if="currentEndpoint === 'latest'" :item="launches"/>
    <LauncheNext v-else-if="currentEndpoint === 'next'" :item="launches"/>
    <div v-else class="hover:bg-slate-300 hover:bg-opacity-20">
      <p class="bg-white">Data Not Found</p>
    </div>
  </div>
</template>


<script setup>
import headermenu from "~/common/headermenu";

  definePageMeta({
    layout: "site"
  });

  const { proxy } = getCurrentInstance();
  const config = useRuntimeConfig();
  const router = useRouter();

  if (!headermenu.endpoints.includes(proxy.$route.query.endpoint)) {
    router.push({
      path: "/"
    })
  }

  const {data: launches} =  await useFetch(`${config.public.BASE_URL}/launches/${proxy.$route.query.endpoint}`);

  const currentEndpoint = proxy.$route.query.endpoint;

</script>