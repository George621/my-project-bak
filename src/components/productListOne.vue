<template>
  <div class="product-one">
    <h2>product List One</h2>
    <ul>
      <li v-for="( product, index ) in saleProducts" :key ='index'>
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">降价</button>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: {
      products(){
        return this.$store.state.products
      },
      // saleProducts(){
      //   return this.$store.getters.saleProducts;
      // }
      ...mapGetters([
      'saleProducts',
      ])
    },
    methods:{
      // reducePrice:function (amount) {
      //   // this.$store.commit('reducePrice')
      //    this.$store.dispatch('reducePrice', amount)
      // }
      ...mapActions([
        'reducePrice'
      ])
    }
  }
</script>

<style >
  .product-one{
    background-color: #fff8b1;
  }
</style>
