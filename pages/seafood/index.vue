<template>
    
    <div class="container mx-auto">
       
      <div class="btn flex justify-center">
      <button @click="fetchData" class="rounded bg-red-2 p-3 text-white  ">fetch</button>
    </div>
       <preLoader v-if="loading"  />

      <div v-if="sea && !loading" class=" grid xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2  " >
        <div v-for="s in sea" :key="s.recipe_id">
             
          <div  class="item card  py-5 px-7 my-2 h-custom text-center flex flex-col align-middle justify-between xl:h-[100%] ">
            <div>
            <img :src="s.image_url" alt="pizza image" class="object-cover aspect-square card w-full ">
           </div>
           
           <h3 class="font-bold text-center"> {{s.title}}</h3>
           <NuxtLink :to="`/seafood/${s.recipe_id}`"><p>View recipe</p></NuxtLink>
           
          </div>
        </div>
       

    </div>
    
    
  </div>
</template>

<script setup >
import { ref } from 'vue'

import axios from 'axios'
const sea =ref(null)
const loading = ref(false)



const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get('https://forkify-api.herokuapp.com/api/search?q=seafood');
    console.log(response);
    sea.value=response.data.recipes
  } catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false
  }
}


</script>

<style scoped>

</style>