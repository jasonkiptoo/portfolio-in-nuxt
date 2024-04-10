// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "nuxt-icon", "vuetify-nuxt-module"],

  app:{
    head:{
      title:'Jason Kiptoo',
      meta:[
       { name: "Jason Kiptoo-Frontend Developer",content: 'Jason Kiptoo is  frontend developer'}
      
      ]
    }
  }
})