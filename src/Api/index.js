import axios from "axios"

export const fetchRandomQuotesApi = async () => {
    try {
        const { data } = await axios.get("https://api.quotable.io/quotes/random")
        return data
    } catch (error) {
        throw error
    }
}



export const fetchTagsCollectionApi = async () => {
    try {
        const { data } = await axios.get("https://api.quotable.io/tags")
        return data
    } catch (error) {
        throw error
    }
}