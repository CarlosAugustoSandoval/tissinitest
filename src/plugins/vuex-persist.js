import VuexPersistence from 'vuex-persist'

export default new VuexPersistence({
    key: 'TissiniTest',
    storage: window.localStorage,
    modules: [
        'authenticationModule',
        'categoriesModule',
    ],
})