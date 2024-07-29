<template>
    <div>
<div class="container m-auto">
    <div class="card grid grid-cols-2 p-6 py-20">
        <div class="item-img p-5 object-contain">
          <img :src="sea.image_url" alt="seafood" class="card aspect-[1/1]  w-full">
        </div>
        <div class="item-body">
            <h1 class="text-red-2 font-bold  text-3xl">{{ sea.title }}</h1>
          <a :href="sea.source_url" target="_blank"><h1 class="text-red-1 text-xl font-bold my-6 hover:text-red-2 "> publisher source:- {{ sea.publisher }}</h1></a>  
              <ul v-for="i in sea.ingredients" :key="i" class="text-G">
                <li class="my-2">{{ i }}</li>
              </ul>

        </div>
        
    </div>
</div>
    </div>
</template>

<script setup>
import { useFetch } from '#app';

const {id} = useRoute().params ;
const uri = 'https://forkify-api.herokuapp.com/api/get?rId=' + id ;

const { data:seafood }= await useFetch(uri)
const  sea =seafood.value.recipe

</script>

