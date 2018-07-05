import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {API_URL} from './config'

const ApiService = {
    init () {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_URL;
    },

    setHeader () {
        //Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
    },

    query (resource, params) {
        return Vue.axios
                .get(resource, params)
                .catch((error) => {
                throw new Error(`[UKFX] ApiService ${error}`)
            })
    },

    get (resource, slug = '') {
        return Vue.axios
                .get(`${resource}/${slug}`)
                .catch((error) => {
                throw new Error(`[UKFX] ApiService ${error}`)
            })
    },

    post (resource, params) {
        return Vue.axios.post(`${resource}`, params)
    },

    update (resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params)
    },

    put (resource, params) {
        return Vue.axios
            .put(`${resource}`, params)
    },

    delete (resource) {
        return Vue.axios
                .delete(resource)
                .catch((error) => {
                throw new Error(`[UKFX] ApiService ${error}`)
            })
    }
}

export default ApiService

export const ArticlesService = {
    query (type, params) {
        return ApiService
            .query(
                'articles' + (type === 'feed' ? '/feed' : ''),
                { params: params }
            )
    },
    get (slug) {
        return ApiService.get('articles', slug)
    },
    create (params) {
        return ApiService.post('articles', {article: params})
    },
    update (slug, params) {
        return ApiService.update('articles', slug, {article: params})
    },
    destroy (slug) {
        return ApiService.delete(`articles/${slug}`)
    }
}

export const CommentsService = {
    get (slug) {
        if (typeof slug !== 'string') {
            throw new Error('[RWV] CommentsService.get() article slug required to fetch comments')
        }
        return ApiService.get('articles', `${slug}/comments`)
    },

    post (slug, payload) {
        return ApiService.post(
            `articles/${slug}/comments`, { comment: { body: payload } })
    },

    destroy (slug, commentId) {
        return ApiService
            .delete(`articles/${slug}/comments/${commentId}`)
    }
}

export const CurrencyService = {
    getAllCurrencies () {
        return ApiService.get(`currency`)
    },
    getQuotes (iso) {
        return ApiService.get(`travel-money/${iso}/quotes`)
    },

    getCards () {
        return ApiService.get(`travel-money/cards`)
    },
    getCurrency () {
        return ApiService.get(`travel-money/currency`)
    },
    getRates () {
        return ApiService.get(`rates`)
    },
    getHistoryRatesPeriod (iso, minDate, maxDate) {
        return ApiService.get(`rates/${iso}/history?mindate=${minDate}&maxdate=${maxDate}`)
    },
    getHistoryRatesDay (iso, date) {
        return ApiService.get(`rates/${iso}/history?date=${date}`)
    },
    getLatestPairRates (iso1, iso2) {
        return ApiService.get(`pairs/${iso1}`)
    },
    getPairHistoryRatesPeriod (iso1, iso2, minDate, maxDate) {
        return ApiService.get(`pairs/${iso1}/${iso2}/history?mindate${minDate}&maxdate=${maxDate}`)
    },
    getPairHistoryRatesDay (iso1, iso2, date) {
        return ApiService.get(`pairs/${iso1}/${iso2}/history?date=${date}`)
    }
}
