<template>
  <div class="divide-y divide-slate-100 pt-5 cursor-pointer">
    <NavView>
      <NavItem href="" v-on:click:active=true  isActive>New Guide</NavItem>
      <NavItem href="" v-on:click:active=true >Top Guide</NavItem>
    </NavView>
    <ListView>
      <p v-if="loading" >Loading tours...</p>
      <p v-if="error">{{ error.message }}</p>
      <GuideItem  v-if="tourGuideExample" v-for="(item, index) in tourGuideExample" :key="index" :item="item" />
    </ListView>
  </div>
</template>

<script> 
  import { defineComponent,computed } from "vue"
  import NavView       from '@/components/NavView.vue'
  import NavItem       from '@/components/NavItem.vue'
  import ListView      from '@/components/ListView.vue'
  import GuideItem     from '@/menu/guide/GuideItem.vue'
  import { storeToRefs } from 'pinia'
  import { useGuideStore } from '@/stores/guide'


  export default defineComponent({
    components: {
    NavView,
    NavItem,
    ListView,
    GuideItem
},
    setup() {
      const { guides, loading, error }  = storeToRefs(useGuideStore())
      const { fetchGuides }             = useGuideStore()
      fetchGuides()

      const tourGuideExample = [{"id":1,"guidename":"Daniel Huasherr","bio":"Hi, I am Daniel. Originally, from New York, I moved to London as a student a few years down the road.","avatar":"https://imagedelivery.net/y4DRrv32Tll84ztsvd9nJQ/6cefa42b-1b9a-4cc3-e665-70373f5d0400/public","country":"England","rating":10}]

      return { tourGuideExample , loading , error }
  },
  methods: {

  }
})
</script>
