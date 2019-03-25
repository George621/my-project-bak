<template>
  <div class="product-two">
    <h2>product List Two</h2>
    <ul>
      <li v-for="( product, index ) in saleProducts" :key ='index'>
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    computed: {
      products(){
        return this.$store.state.products
      },
      saleProducts(){
        return this.$store.getters.saleProducts;
      }
    }
  }
</script>

<style >
  .product-two{
    background-color: #6fc5e7;
  }
</style>
