
        <template>
    <div class="container mx-auto">
        <div class=" grid xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2  ">
       <div v-for="be in recipes" :key="be.recipe_id"  >
       
          <div  class="item card  py-5 px-7 my-2 h-custom text-center flex flex-col align-middle justify-between xl:h-[100%] ">
            <div>
            <img :src="be.image_url" alt="seafood image" class=" w-full object-cover aspect-square  card ">
           </div>
           
           <h3 class="font-bold text-center"> {{be.title}}</h3>
           <NuxtLink :to="`/beef/${be.recipe_id}`"><p>View recipe</p></NuxtLink>

          </div>
    </div>
    </div>
    
    </div>
</template>
 

<script setup>
import { useFetch } from '#app';

const { data:products }= await useFetch('https://forkify-api.herokuapp.com/api/search?q=beef')
const recipes = products.value.recipes
</script>

