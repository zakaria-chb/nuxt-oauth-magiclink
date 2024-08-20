<template>
  <div class="h-screen bg-slate-900 flex justify-center items-center">
    <div v-if="status === 'unauthenticated'">
      <LoginFrom />
    </div>

    <div v-else-if="status === 'authenticated'">
      <p class="text-6xl text-slate-50">👋 {{ data?.user?.name || 'USER' }}</p>
      <NuxtLink to="/protected-page">
        <p class="text-2xl text-slate-500 hover:text-slate-400 hover:underline text-center mt-5">Page protégée</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: false
})
const { status, data } = useAuth()


</script>

<style></style>