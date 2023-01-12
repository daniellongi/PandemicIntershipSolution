<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="#" v-on:click:active=true  isActive>New Release</NavItem>
      <NavItem href="#" @click="topRatingFilter();isActive=true" >Top Rated</NavItem>
      <NavItem href="#" @click="englandFilter()" >England</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading" >Loading tours...</p>
      <p v-if="error">{{ error.message }}</p>
      <TourItem  v-if="tours" v-for="(item, index) in tours" :key="index" :item="item" />
    </ListView>
  </div>
</template>

<script> 
  import { defineComponent,computed } from "vue";
  import { storeToRefs } from 'pinia'
  import { useTourStore } from '@/stores/tour'

  import TourItem from '@/menu/tour/TourItem.vue'
  import ListView from '@/components/ListView.vue'
  import NavView from '@/components/NavView.vue'
  import NavItem from '@/components/NavItem.vue'

  export default defineComponent({
    components: {
      NavView,
      NavItem,
      TourItem,
      ListView
    },
    methods:{
      topRatingFilter(){
        this.tours = this.tours.sort(
          (tour1, tour2) => 
          (tour1.rating < tour2.rating2) ? 1 : (tour1.rating > tour2.rating) ? -1 : 0)
      },
      englandFilter(){
        this.tours = this.tours.filter((tour) => tour.country == "England")
      }
    },
    setup() {
      const { tours, loading, error }  = storeToRefs(useTourStore())
      const { fetchTours } = useTourStore()
      fetchTours()
      return { tours , loading , error }
    },
  watch:{
    tours: function(newVal, oldVal) { 
        }
  }
});

</script>

[
