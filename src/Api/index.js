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


export const fetchTagsCardsApi = async (inputdata) => {
    try {
        const { data } = await axios.get(`https://api.quotable.io/quotes?tags=${inputdata}`)
        return data
    } catch (error) {
        throw error
    }
}
// https://api.quotable.io/quotes?tags=${inputdata}&page=${num}



export const fetchAuthorCollectionApi = async (pageNo) => {
    try {
        const { data } = await axios.get(`https://api.quotable.io/authors?page=${pageNo}`)
        return data

    } catch (error) {
        throw error
    }
}


export const fetchAuthorQuotesApi = async (authorsName, pageno) => {
    try {
        const { data } = await axios.get(`https://api.quotable.io/quotes?author=${authorsName}&page=${pageno}`)
        return data
    } catch (error) {
        throw error
    }
}