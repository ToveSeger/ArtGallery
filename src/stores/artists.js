import { defineStore } from 'pinia'

export const getArtistData = defineStore("artists",{
  state: () => ({
    artists:[],
  }),
   getters: {
      getArtists(state){
          return state.artists
        }
    },
  actions: {
      async fetchArtists() {
          try {
              const data = await fetch('../../public/artists.json')
              this.artists = data.data
          }
          catch (error){
            alert(error)
            console.log("fel:" + error)
          }
    }
  }
})
