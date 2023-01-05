import { defineStore } from 'pinia'
import axios from 'axios'

const tour_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours'
const tourbyid_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/tours/detail/'

export const useTourStore = defineStore({
  id: 'tour',
  state: () => ({
    tours: [],
    tour: null,
    loading: false,
    error: null,
    toursInfo: [],
  }),
  getters: {
    getTourbyCountry: (state) => {
    }
  }, 
  actions: {
    async fetchTours() {
      this.tours = []
      this.loading = true
      try {
        this.tours =  await fetch(tour_endpoint, {
          method: 'POST'
      })
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchTourbyId(id) {
      this.tour = null
      this.loading = true
      try {
        this.toursInfo = await fetch(tourbyid_endpoint + id, {
          method: 'POST'
      })
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})