<template>
    <v-container fluid>
            <v-row>
                <v-col xs="12" sm="4" md="3" v-for="pet in dogs" :key="pet.breed">
                    <Dog :dog="pet"></Dog>
                </v-col>
            </v-row>
    </v-container>
</template>
<script setup>
import { Dogs } from '../data/dogs.js';
import Dog from '../components/Dog.vue';
import {ref} from "vue";

const dogs = ref(Dogs)
</script>