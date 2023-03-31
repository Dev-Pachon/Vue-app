import {defineStore} from "pinia";
import {ref} from "vue";

export const useFavoritesStore = defineStore('favorites', ()=>{
	const favorites = ref([])

	const addFavorite = (dog)=>{
		favorites.value.push(dog)
	}

	const removeFavorite = (dog)=>{
		const index = favorites.value.indexOf(dog)
		if (index>-1){
			favorites.value.splice(index,1)
		}
	}

	return{favorites, addFavorite, removeFavorite}
}, {persist: true})