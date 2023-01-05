import axios from 'axios'
import { defineStore } from 'pinia'

const guide_endpoint = 'https://tapntour-wk-db.glyfo.workers.dev/api/guides'

export const useGuideStore = defineStore({
  id: 'guide',
  state: () => ({
    guides: [],
    guide: null,
    loading: false,
    error: null
  }),
  /*
  getters: {
    getTourbyCountry: (state) => {
    }
  }, */
  actions: {
    async fetchGuides() {
      this.guides = []
      this.loading = true
      try {
        this.guides =  await fetch(guide_endpoint,{
            method: 'POST'
        })
        .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})

