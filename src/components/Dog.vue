<template>
    <v-card color="grey lighten-2">
        <v-card-title>
            <h3> {{ dog.name }}</h3>
            <p>{{ dog.breed }}</p>
        </v-card-title>
        <v-img cover aspect-ratio="9/16" :src="img" height="200px"></v-img>
        <v-card-actions>
            <v-btn @click="addFavorites">Add to favorites</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import axios from '../config/axios.js'
import {onMounted, ref} from "vue";
import {useFavoritesStore} from "../stores/store.js";

const store = useFavoritesStore()

const props = defineProps({
    dog: {
        type: Object,
        required: true
    }
})
const img = ref('')

const getData = ()=>{
    axios.get('/breed/'+ props.dog.breed +'/images/random')
        .then(response => {
            img.value = response.data.message
        })
}

const addFavorites = ()=>{
    store.addFavorite(props.dog)
}

onMounted(getData)
</script>