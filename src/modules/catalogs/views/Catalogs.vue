<template>
  <v-row dense justify="center" align="center">
    <v-col cols="12" md="4" sm="5" lg="4" xl="3" class="mx-auto">
      <v-carousel
          v-if="categories && categories.categories && categories.categories.length"
          hide-delimiters
          height="200"
      >
        <v-carousel-item
            v-for="(subCate, i) in (categories.categories)"
            :key="`sub${subCate.id}${i}`"
            :src="`https://v3.tissini.app/img/categories/multivendor/${subCate.image.split('/categories/')[1]}`"
            :to="{name: 'Catalogs', params: {id: subCate.id}}"
        />
      </v-carousel>
      <img
          v-else-if="categories && categories.image"
          height="200"
          :src="`https://v3.tissini.app/img/categories/multivendor/${categories.image.split('/categories/')[1]}`"
      >
      <v-subheader class="title">
        Productos
      </v-subheader>
      <template
          v-for="(product, indexProduct) in products"
      >
        <v-card
            :key="`product${indexProduct}`"
            class="mx-auto mb-2"
            max-width="480"
        >
          <v-window show-arrows>
            <template v-slot:prev="{ on, attrs }">
              <v-btn
                  dark
                  icon
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn
                  dark
                  icon
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>
            <v-window-item
                v-for="(image, indexImage) in product.images"
                :key="`product${indexProduct}image${indexImage}`"
            >
              <v-img
                  :src="`https://v3.tissini.app/${image.url}`"
                  aspect-ratio="1"
              ></v-img>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn
                color="primary"
                rounded
            >
              <v-icon>mdi-cart-plus</v-icon>
              Agregar
            </v-btn>

            <v-spacer/>
            <span class="px-2 title primary--text">${{product.price}}</span>
          </v-card-actions>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import axios from '@axios'
export default {
  name: 'Catalogs',
  props:{
    id: {
      type: [String, Number],
      default: '1'
    }
  },
  data: () => ({
    categories: null,
    products: []
  }),
  watch: {
    id: {
      handler(val) {
        if(val) this.getCatalog()
      },
      immediate: true
    }
  },
  methods: {
    getCatalog() {
      axios.get(`categories/${this.id}`)
          .then(response => {
            this.categories = response.data.categories
          })
          .catch(() => {
          })

      axios.get(`categories/${this.id}/products/multivendor`)
          .then(response => {
            this.products = response.data.products
          })
          .catch(() => {
          })
    }
  }
}
</script>