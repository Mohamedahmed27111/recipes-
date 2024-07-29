<template>
    <div class="container mx-auto">
        <div class=" grid grid-cols-4 gap-5">
       <div v-for="pi in recipes" :key="pi.recipe_id"  >
       
          <div  class="item card  py-5 px-7 my-2 h-custom text-center flex flex-col align-middle justify-between xl:h-[100%] ">
            <div>
            <img :src="pi.image_url" alt="pizza image" class="object-cover aspect-square card w-full ">
           </div>
           
           <h3 class="font-bold text-center"> {{pi.title}}</h3>
           <NuxtLink :to="`/pizza/${pi.recipe_id}`"><p>View recipe</p></NuxtLink>
           
          </div>
    </div>
    </div>
    
    </div>
</template>

<script setup >
import { useFetch } from '#app';

const { data:products }= await useFetch('https://forkify-api.herokuapp.com/api/search?q=pizza')
const recipes = products.value.recipes

</script>

<style lang="scss" scoped>

</style>