<template>
  <div>
      <h2>{{ msg }}</h2>
      <hr/>
      <h3>{{ $store.state.a.count }}-{{ count }}</h3>
      <p>
          <button @click="$store.commit('add',10)">+</button>
          <button @click="reduce">-</button>
      </p>
      <p>actions里面的方法</p>
      <p>
          <button @click="addAction">+</button>
          <button @click="reduceAction">-</button>
      </p>
  </div>
</template>

<style>

</style>

<script>
    import store from '@/vuex/store';
    import { mapState,mapMutations,mapGetters,mapActions } from 'vuex';
    export default {
        data(){
            return{
                msg:'Kobe Bryant-Black Mamaba'
            }
        },
        computed:{
            /* {
            count:state=>state.count
            } */
            ...mapState(['count']),//用数组的方式赋值

            count(){
                return this.$store.getters.count;
            }
            /* ...mapGetters(['count']), */
        },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['addAction','reduceAction'])
        },
        store
    }
    
    /* mapState 方法源码
    export function mapState(states){
        const res = {}
        normalizeMap(states)
        .forEach(
            ({ key , val }) => {
                res[key] = function mappedState(){
                    return typeof val === 'function' ?
                    val.call(this,this,$store.state, this.$store.getters) : 
                    this.$stiore.state[val]
                }
            }
        )
        return res
    }
    
    function normalizeMap(map){
        return Array.isArray(map) ?
        map.map(key => ({ key, val: key })) :
        Object.keys(map).map(key => ({ key, val: map[key] }))
    } */
</script>