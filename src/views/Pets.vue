<template>
    <v-container fluid>
            <v-row>
                <v-col xs="12" sm="4" md="3" v-for="pet in dogs" :key="pet.breed">
                    <app-dog :dog="pet"></app-dog>
                </v-col>
            </v-row>
    </v-container>
</template>
<script>
import { Dogs } from '../data/dogs.js';
import Dog from '../components/Dog.vue';

export default {
    name: 'Pets',
    components: {
        appDog: Dog
    },
    data() {
        return {
            dogs: Dogs
        }
    }
}
</script>