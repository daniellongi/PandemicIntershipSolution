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