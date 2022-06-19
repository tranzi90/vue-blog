import {createStore} from "vuex"

export default createStore({
    state: {
        likes: 0
    },
    getters: {

    },
    mutations: {
        incrementLikes(state) {
            state.likes++
        },
        decrementLikes(state) {
            state.likes--
        }
    },
    actions: {

    },
    modules: {

    }
})