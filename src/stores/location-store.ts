import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'
import { Place, SapienzaPlace } from 'src/models/place'

export const useLocationStore = defineStore('location-store', () => {
  const sapienzaLocations = ref<SapienzaPlace[]>([{
    Label: 'Città Universitaria',
    Address: 'Piazzale Aldo Moro, 1',
    Avatar: 'https://metronews.it/wp-content/uploads/2021/05/universita_sapienza.jpg'
  }, {
    Label: 'Facoltà d\'Economia',
    Address: 'Via del Castro Laurenziano, 9',
    Avatar: 'https://web.uniroma1.it/cersites/sites/default/files/facolta_economia_latina.jpg'
  }, {
    Label: 'Facoltà d\'Ingegneria',
    Address: 'Via Eudossiana, 18',
    Avatar: 'https://www.ilgiornaledeltermoidraulico.it/files/2016/07/IT_PR_160523_Conferenza-acqua-sanitaria-Roma_01.jpg'
  }, {
    Label: 'Facoltà d\'Architettura',
    Address: 'Piazza Borghese, 9',
    Avatar: 'https://www.radiocolonna.it/public/images/2020/10/D940D26C-8E6B-49AF-B50C-C1B65A2E83D5-1280x720.jpeg'
  }, {
    Label: 'Centro Universitario Sportivo',
    Address: 'Via Fornaci di Tor di Quinto, 34',
    Avatar: 'https://web.uniroma1.it/sapienzasport/sites/default/files/styles/photonew/public/IMG_20200601_161308.jpg?itok=RdXs2U6g'
  }])

  const otherLocations = ref<Place[]>([{
    Label: 'Home',
    Address: 'Via Archimede, 110'
  }, {
    Label: 'Home',
    Address: 'Viale Africa, 25'
  }, {
    Label: 'Home',
    Address: 'Viale degli Estensi, 3'
  }])

  const getDefaultSapienzaLocation = (): Place => sapienzaLocations.value[0]

  const getDefaultHomeLocation = (): Place => (otherLocations.value[0])

  // Checks if a location is among Sapienza's facilities
  const isSapLocation = (location: Place): boolean => sapienzaLocations.value.some(l => l.Address === location.Address)

  return {
    sapienzaLocations: readonly(sapienzaLocations),
    otherLocations: readonly(otherLocations),
    getDefaultSapienzaLocation,
    getDefaultHomeLocation,
    isSapLocation
  }
})
