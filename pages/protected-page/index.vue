<template>
    <div class="h-screen bg-slate-900 flex flex-col items-center justify-center ">
        <h1 class="text-7xl text-slate-50 font-extrabold">PAGE PROTÉGÉE</h1>
        <button @click="signOut({ callbackUrl: '/' })"
            class="mt-7 rounded-lg bg-red-600 hover:bg-red-500 py-4 px-8 font-semibold text-base text-white">
            Déconnexion
        </button>
    </div>
</template>

<script setup lang="ts">
const { signOut } = useAuth()


</script>

<style scoped></style>