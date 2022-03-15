import Vue from 'vue'
import { extend } from 'vee-validate'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { required, email, numeric } from 'vee-validate/dist/rules'

Vue.use({
    install (Vue) {
        Vue.component('ValidationProvider', ValidationProvider)
        Vue.component('ValidationObserver', ValidationObserver)
    }
})

extend('required', {
    ...required,
    message: 'El campo {_field_} es requerido'
})

extend('email', {
    ...email,
    message: 'El correo no es valido'
})

extend('numeric', {
    ...numeric,
    message: 'El campo {_field_} solo acepta caracteres numéricos'
})

extend('phone', {
    validate(value) {
        return String(value).replace(/\s+/g, '').length === 10
    },
    message: 'El {_field_} debe tener 10 números.'
})