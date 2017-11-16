import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
    count:5
}
const getters = {
    /* count: state => state.count += 10 */
    count:function(state){
        return state.count;
    }
}
// 默认先在 state的5之后找getters中的count的值，默认值就是15，然后触发add事件之后，会执行 参数中的10加上getters里的10，执行reduce时，会先执行getters里的10然后执行reduce的减一，所以是加9

const mutations={
    add(state,n){
        state.count +=n;
        console.log(state.count)
    },
    reduce(state){
        state.count --;
        console.log(state.count)
    }
}

const actions={
    addAction(context){
        context.commit('add',10); 
        setTimeout(()=>{context.commit('reduce')}, 3000);
        console.log('我比reduce先执行');
    },
    reduceAction({commit}){
        commit('reduce');  
    }
}

const modulesA={
    state,
    mutations,
    getters,
    actions
}

export default new Vuex.Store({
    modules: { a: modulesA }
})