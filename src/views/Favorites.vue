<template>
    <div>
        <v-list>
            <v-list-subheader v-if="favorites.length === 0">
                Your favorites list is empty
            </v-list-subheader>
            <div v-else class="text-xs-center">
                <v-list-subheader>
                    Your favorites
                </v-list-subheader>
                <v-list-item v-for="pet in favorites" :key="pet.breed" :title="pet.name" :subtitle="pet.breed">
                    <template v-slot:append>
                        <v-btn icon>
                            <v-icon @click="store.removeFavorite(pet)">mdi-delete</v-icon>
                        </v-btn>
                    </template>
                </v-list-item>
            </div>
        </v-list>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useFavoritesStore} from "../stores/store.js";

const store = useFavoritesStore()

const favorites = ref(store.favorites)
</script>

<style scoped>

</style>