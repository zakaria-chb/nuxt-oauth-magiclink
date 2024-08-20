<template>
    <div>
        <h1 class="text-5xl font-extrabold text-slate-50 text-center mb-10">Se connecter</h1>

        <section class="bg-orange-200 rounded-2xl h-[400px] w-[400px] flex flex-col justify-center items-center">
            <button @click="signIn('github', { callbackUrl: '/protected-page' })"
                class="bg-slate-800 hover:bg-slate-700 text-white py-6 px-12 rounded-2xl flex items-center font-bold">
                <Icon name="mdi:github" class="mr-4 text-2xl" />
                Se connecer avec GitHub
            </button>


            <div class="w-[330px] grid grid-cols-12 items-center my-10">
                <div class="col-span-4 bg-slate-400/50 h-[1px] "></div>
                <p class="col-span-4 text-slate-400/50 text-center">ou</p>
                <div class="col-span-4 bg-slate-400/50 h-[1px]"></div>
            </div>

            <Form @submit="signIn('email', { email: userEmail })" class="flex flex-col items-center">
                <Field v-model="userEmail" :rules="fieldSchema" type="email" name="email" placeholder="mon@email.com"
                    required
                    class="w-[330px] py-4 px-5 rounded-lg lg:text-2xl outline outline-slate-300 focus:outline-cyan-500 focus:outline-4" />
                <ErrorMessage class="text-red-500 mt-2" name="email" />
                <button type="submit"
                    class="mt-7 rounded-lg bg-slate-800 hover:bg-slate-700 w-1/2 py-4 font-semibold max-md:text-xs md:text-sm lg:text-sm 2xl:text-base text-white">Connexion</button>
            </Form>
        </section>
    </div>


</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod'

const { signIn } = useAuth()
const userEmail = ref('')

const fieldSchema = toTypedSchema(zod.string().nonempty("L'adresse email est obligatoire.").email("L'adresse email n'est pas valide."));

</script>

<style scoped></style>