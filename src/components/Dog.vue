<template>
    <v-card color="grey lighten-2">
        <v-card-title>
            <h3> {{ dog.name }}</h3>
            <p>{{ dog.breed }}</p>
        </v-card-title>
        <v-img cover aspect-ratio="9/16" :src="img" height="200px"></v-img>
    </v-card>
</template>

<script>
import axios from '../config/axios.js'

export default {
    name: 'Dog',
    props: {
        'dog': {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
           img: ''
        }
    },
    methods: {
        getData: function() {
            axios.get('/breed/'+ this.dog.breed +'/images/random')
            .then(response => {
                this.img = response.data.message
            })
        }
    },
    created: function() {
        this.getData()
    }

}

</script>