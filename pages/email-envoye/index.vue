<template>
  <div class="h-screen bg-slate-900 flex flex-col items-center justify-center ">
    <h1 class="text-7xl text-slate-50 font-extrabold">EMAIL ENVOYÉ</h1>
    <p class="mt-7 font-semibold text-base text-white">
      Veuillez verifer votre boite email
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/protected-page',
  },
})
</script>

<style scoped></style>