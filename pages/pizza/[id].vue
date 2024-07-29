<template>
    <div>
<div class="container m-auto">
    <div class="card grid grid-cols-2 p-6 py-20">
        <div class="item-img p-5 object-contain">
          <img :src="pi.image_url" alt="pizza" class="card aspect-[1/1] w-full">
        </div>
        <div class="item-body">
            <h1 class="text-red-2 font-bold  text-3xl">{{ pi.title }}</h1>
          <a :href="pi.source_url" target="_blank"><h1 class="text-red-1 text-xl my-6 font-bold hover:text-red-2 "> publisher source:- {{ pi.publisher }}</h1></a>  
              <ul v-for="i in pi.ingredients" :key="i" class="text-G">
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

const { data:pizza }= await useFetch(uri)
const  pi =pizza.value.recipe

</script>

