<template>
  <div>
    <Header/>
    <v-container class="pb-14">
      <router-view/>
      <v-bottom-navigation
          :value="value"
          color="primary"
          grow
          app
      >
        <v-btn :to="{name: 'Categories'}">
          <span>Categorías</span>
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>

        <v-btn :to="{name: 'Catalogs'}">
          <span>Catálogo</span>

          <v-icon>mdi-badge-account-outline</v-icon>
        </v-btn>

        <v-btn :to="{name: 'Cart'}">
          <span>Carrito</span>

          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-container>
  </div>
</template>

<script>
import Header from './header/Header'
export default {
  name: 'Default',
  components: {
    Header
  },
  data: () => ({
    value: 1
  })
}
</script>