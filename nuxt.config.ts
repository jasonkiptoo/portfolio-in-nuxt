// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "nuxt-icon"],

  app:{
    head:{
      title:'Jason Kiptoo',
      meta:[
       { name: "Jason Kiptoo-Frontend Developer",content: 'Jason Kiptoo is  frontend developer'}
      
      ]
    }
  }
})