<template>
<div>
  <div v-on:click="goHello">login</div>
  <p @click="asyncAddNum(1)">增加</p>
  <p>{{getNum}}</p>
</div>
    
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sad: true
    }
  },
  methods:{
    goHello(){
      this.$router.push('/hello')
    },
    ...mapActions([
      'asyncAddNum'
    ])
  },
  computed: {
    ...mapGetters([
      'getNum'
    ])
  },
  created(){
    console.log(this,...mapGetters([]))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
