module.exports = {
    /*
    ** Global CSS
    */
    ssr: false,
    target: "server",
    css: [
        '~/assets/scss/app.scss',
        'element-ui/lib/theme-chalk/reset.css',
        'element-ui/lib/theme-chalk/index.css'
    ],
  
    /*
    ** Add element-ui in our app, see plugins/element-ui.js file
    */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/bootstrap-vue'
    ],
    components: true,
    modules:[
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios'
      
    ],
    buildModules: [
        '@nuxtjs/style-resources',
    ],
    styleResources: {
        scss: [
          '~/assets/scss/abstracts/_variables.scss',
        ],
    },
   
    bootstrapVue: {
        icons: true
    }
}