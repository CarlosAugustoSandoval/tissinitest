import axios from '@axios'

const state = {
    emprendedora: null
}

const actions = {
    async login (context, phone) {
        return await new Promise(resolve => {
            axios.post('login/client', phone)
                .then(response => {
                    context.commit('SET_DATA_LOGIN', response.data)
                    resolve(true)
                })
                .catch(() => resolve(false))
        })
    },
    logout (context) {
        context.commit('SET_LOGOUT')
        return true
    }
}

const mutations = {
    SET_DATA_LOGIN (state, data) {
        state.emprendedora = data.customer
    },
    SET_LOGOUT (state) {
        state.emprendedora = null
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}