import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCartShopping, faStore, faArrowRightToBracket, faArrowRightFromBracket, faSpinner } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faCartShopping, faStore, faArrowRightToBracket, faArrowRightFromBracket, faSpinner)

export default () => {
    /* add font awesome icon component */
    Vue.component('font-awesome-icon', FontAwesomeIcon)
    Vue.component('font-awesome-layers', FontAwesomeLayers)
    Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
};