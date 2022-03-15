<template>
  <v-dialog
      v-model="dialog"
      width="500"
      persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          icon
          class="mx-2"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="primary title white--text">
        ¿Quieres Salir?
      </v-card-title>

      <v-card-text class="pa-5">
        Dándole un toque a este botón sales de la Tienda. Si quieres navegar en la Tienda utiliza las opciones de la parte inferior:
        <br/>
        <br/>
        <v-icon color="primary">mdi-cart</v-icon>Carrito
        <v-icon color="primary">mdi-badge-account</v-icon>Catálogo
        <v-icon color="primary">mdi-home</v-icon>Categorías
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-spacer/>
        <v-btn
            color="primary"
            text
            @click="logout"
        >
          Salir de la tienda
        </v-btn>
        <v-btn
            color="primary"
            text
            @click="dialog = false"
        >
          Volver
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from '@/store'
export default {
  name: 'Logout',
  data: () => ({
    dialog: false
  }),
  methods: {
    logout () {
      store.dispatch('authenticationModule/logout')
          .then(resolve => {
            if (resolve) this.$router.push({name: 'Login'}).catch(()=>{})
          })
    }
  }
}
</script>