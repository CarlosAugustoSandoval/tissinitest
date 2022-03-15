import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify)
const theme = {
    primary: '#F06292'
}

export default new Vuetify({
    theme: {
        themes: {
            dark: theme,
            light: theme
        }
    },
    icons: {
        iconfont: 'mdi',
    },
    lang: {
        locales: { es },
        current: 'es',
    }
})
