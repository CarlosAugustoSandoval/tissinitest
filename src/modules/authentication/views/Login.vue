<template>
  <v-row
      justify="center"
      align="center"
      class="background fill-height ma-0"
  >
    <v-card flat tile color="transparent">
      <v-card-title class="mt-5">
        <div class="text-center mt-5">
          <img
              class="logo mt-5"
              src="../../../assets/img/logo.e38c8b41.png"
          />
          <p
              style="color: white;"
              class="mt-3"
          >
            Ingresa el número de teléfono
            <br/>
            de tu asesora independiente.
          </p>
        </div>
      </v-card-title>
      <v-card-text>
        <ValidationObserver ref="formLogin">
          <v-row justify="center" align="center">
            <v-col cols="12" md="6">
              <ValidationProvider
                  name="teléfono"
                  rules="required|phone"
                  v-slot="{ errors }"
              >
                <v-text-field
                    v-model="mobilephone"
                    label="Teléfono"
                    type="tel"
                    filled
                    color="white"
                    :error-messages="errors"
                    v-mask="'### ### ####'"
                />
              </ValidationProvider>
            </v-col>
          </v-row>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import store from '@/store'
export default {
  name: 'Login',
  data: () => ({
    mobilephone: null,
    loading: false
  }),
  watch:{
    mobilephone: {
      handler(val) {
        if(val) this.login()
      },
      immediate: false
    }
  },
  methods: {
    login() {
      this.$refs.formLogin.validate().then(result => {
        if (result) {
          this.loading = true
          const phone = JSON.parse(JSON.stringify(this.mobilephone))
          store.dispatch('authenticationModule/login', { mobilephone: phone.replace(/\s+/g, '') })
              .then(resolve => {
                if (resolve) this.$router.push({name: 'Categories'}).catch(()=>{})
                this.loading = false
              })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.background{
  background-image: url('../../../assets/img/login-desktop.695c98cc.jpg');
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  background-position: 50%;
  background-repeat: no-repeat;

  @media (min-width: 475px){
    background-position: top;
  }
}

.logo {
  width: 60%;

  @media (min-width: 600px){
    width: 20%;
  }

  @media (min-width: 475px){
    margin-top: 35%;
  }
}

.v-input{
  font-size: 24px;
  .v-input__control{
    .v-input__slot {
      border: 2px solid #fff !important;
      background: rgba(0, 0, 0, 0) !important;
      .v-text-field__slot {
        font-size: 24px;
        .v-label {
          color: white;
        }
        input {
          color: white;
        }
      }
    }
    .v-input__slot:before, :after {
      border-style: none !important;
      content: none !important;
    }
  }
}

</style>