<template>
  <v-app-bar
      color="primary"
      dark
      dense
  >
    <v-app-bar-title v-if="emprendedora">
      <v-icon>mdi-store</v-icon>
      {{emprendedora.store_name}}
    </v-app-bar-title>

    <v-spacer/>
    <v-btn
        v-if="emprendedora"
        icon
        :href="`tel:${emprendedora.mobilephone}`"
        class="mx-2"
    >
      <v-icon>mdi-phone</v-icon>
    </v-btn>

    <logout/>
  </v-app-bar>
</template>

<script>
import store from '@/store'
import Logout from './components/Logout'
export default {
  name: 'Header',
  components: {Logout},
  computed: {
    emprendedora() {
      return store.state.authenticationModule.emprendedora
    }
  }
}
</script>