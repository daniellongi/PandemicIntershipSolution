<template>
  <article @click="goToDetail()" class="flex items-start space-x-6 p-6">
    <img :src="item.avatar" alt="" class=" object-cover h-48 w-28 flex-none rounded-full bg-slate-100" />
    <div class="min-w-0 relative flex-auto">
      <h2 class="font-semibold text-slate-900 truncate pr-20">{{ item.guidename }}</h2>
      <dl class="mt-2 flex flex-wrap text-sm leading-6 font-medium">
        <div class="right-0 flex-column items-center space-x-1">
          <dd class="text-slate-500" >{{ item.country }}</dd>
          <dt class="text-sky-500">
            <span class="sr-only sm:not-sr-only">{{ item.bio }}</span>
            <div class="flex items-center">
                <!-- <svg aria-hidden="true" class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> -->
                <!-- <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{{ item.rating }} out of 10</p> -->
                <!-- <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span> -->
                <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white" v-if="item.review" >{{ item.review }} reviews</a>
                <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white" v-else >0 reviews</a>
                <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Rating</p>
                <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400" v-if="item.rating" >{{item.rating}} out of 10</p>

            </div>
          </dt>
          
        </div>
      </dl>
      
    </div>
  </article>  
</template>
<script> 

export default {
  components: {
  },
  props : ['item'],
  methods: {
  goToDetail() {
    this.$router.push('/TourDetail')
  }
}
}   
</script>     