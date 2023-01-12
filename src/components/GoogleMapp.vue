<template>
    <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center"  :zoom="15">
      <MarkerInfo v-if="allCoordinates" v-for="(item, index) in allCoordinates" :options="{ position: item }" :tour="tourInfo[index]"></MarkerInfo>
    </GoogleMap>
</template>
  <script>
  import { defineComponent } from "vue";
  import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
  import MarkerInfo from "./MarkerInfo.vue"
  export default defineComponent({
    components: { 
      GoogleMap, 
      Marker, 
      InfoWindow,
      MarkerInfo,
   },
    props: ['tourInfo'],
    setup() {
      const bigBenCoordinates = { lat: 51.510357, lng: -0.116773 };
      const londonEyeCoordinates = {lat: 51.503399, lng:  -0.119519}
      const buckinghamPalace = {lat: 51.501476, lng: -0.140634}
      const allCoordinates = [bigBenCoordinates, londonEyeCoordinates, buckinghamPalace]
      const apiKey = process.env.GOOGLE_API
      const center = {lat: 51.509865, lng: -0.118092}
      return { allCoordinates, center, apiKey };
    },
  });
  </script>