import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {},
            dark: {
             primary: '#1A1D1A',
             secondary: '#26413C',
             accent: '#3E505B',
             error: '#eb4034',
             anchor: '#fff'
            },
        },
    }
});
