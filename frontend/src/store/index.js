import {createStore} from "vuex";
import * as mutations from "./mutations";
import * as actions from "./actions";


const store = createStore({
    state: {
        user : {
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        }
    },
    getters: {},
    actions: actions,
    mutations: mutations,
});

export default store;
