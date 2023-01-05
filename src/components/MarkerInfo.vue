<template>
    <Marker :options="{ position: coordinates }">
    
        <InfoWindow v-if="tour">
        <div class="flex items-start space-x-6 p-6">
        <img :src="tour.image" alt="" class=" object-cover h-48 w-28 flex-none rounded-md bg-slate-100" />
        <img :src="tour.audio" alt="" class=" object-cover h-48 w-28 flex-none rounded-md bg-slate-100" />
        <div class="min-w-0 relative flex-auto">
        <h2 class="font-semibold text-slate-900 truncate pr-20" v-if="tour" >{{tour.name}}</h2>
        <div id="contet">
          <div id="siteNotice"></div>
          <div id="bodyContent">
            <p>
             <b>Description:</b> {{ tour.resume }}
            </p>
            <p>
              <b>Stop number:</b>: {{ tour.stop }}
            </p>
            <p>
              <b>Audio duration:</b>  {{ tour.duration }}
            </p>
          </div>
        </div>
      </div>
    </div>
      </InfoWindow>
    </Marker>
</template>
 
<script>
import { defineComponent } from "vue";
import { InfoWindow, Marker } from "vue3-google-map";

export default defineComponent({
  components: {InfoWindow, Marker },
  props: ['tour', 'coordinates'],

});
</script>