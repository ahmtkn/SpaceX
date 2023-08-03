export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    const {data: company} =  useFetch(`${config.public.BASE_URL}/company`);

    return {
        provide: {
            company
        }
    }
})