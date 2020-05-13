export default {
    state:{
        num:1
    },
    getters: {
        getNum(state, getters, rootState){
            return state.num
        }
    },
    mutations: {
        addNum(state,{num}){
            state.num += num
        },
        deleteNum(state,{num}){
            state.num -= num
        },
    },
    actions: {
        asyncAddNum({state,commit},num){
            setTimeout(() => {
                console.log(state)
                commit('addNum',{num})
            }, 1000);
        }
    }
}