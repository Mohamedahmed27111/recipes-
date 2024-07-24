<template>
    <div class="container mx-auto">
        <div class=" grid grid-cols-4 gap-5">
       <div v-for="sea in recipes" :key="sea.recipe_id"  >
       
          <div  class="item card  py-5 px-7 my-2  ">
            <div>
            <img :src="sea.image_url" alt="seafood image" class="object-cover aspect-vidoe  card">
           </div>
           
           <h3 class="font-bold text-center"> {{sea.title}}</h3>
          </div>
    </div>
    </div>
    
    </div>
</template>

<script setup >
import { ref } from 'vue';
import { useFetch } from '#app';

const { data:products }= await useFetch('https://forkify-api.herokuapp.com/api/search?q=seafood')
const recipes = products.value.recipes
console.log(recipes)

</script>