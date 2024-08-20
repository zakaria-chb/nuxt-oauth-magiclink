// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
 modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", "@prisma/nuxt", "@nuxt/icon", "@vee-validate/nuxt"],

 runtimeConfig: {
   authSecret: process.env.AUTH_SECRET,
   gitHubId: process.env.GITHUB_CLIENT_ID,
   gitHubSecret: process.env.GITHUB_CLIENT_SECRET,
   emailServerHost: process.env.EMAIL_SERVER_HOST,
   emailServerPort: process.env.EMAIL_SERVER_PORT,
   emailServerUser: process.env.EMAIL_SERVER_USER,
   emailServerPassword: process.env.EMAIL_SERVER_PASSWORD,
   emailFrom: process.env.EMAIL_FROM
 },

 auth: { 
   isEnabled: true,
   globalAppMiddleware:  true,
   disableServerSideAuth: false,
   originEnvKey: 'AUTH_ORIGIN',
   baseURL: 'http://localhost:3000/api/auth',
   provider: { type: 'authjs' },
   sessionRefresh: {
       enablePeriodically: true,
       enableOnWindowFocus: true,
   }
},

 compatibilityDate: "2024-08-20"
})