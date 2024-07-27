import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const userRequestsStore = defineStore('requests', () => {

    const uri = "http://localhost:8080"

    const requests = ref([])
    const isLoading = ref(false)

    
    async function get () {

        try {
            isLoading.value = false
            const response = await fetch(uri + '/requests')
            const data = await response.json()

            if (response.status == 200) {
                requests.value = data
                isLoading.value = true
            }
        } catch (error) {
                requests.value = []
        }
    }

    return { requests, isLoading, get }
})