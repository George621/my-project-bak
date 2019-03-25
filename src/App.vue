<template>
  <div>
    <product-list-one>
    </product-list-one>
    <product-list-two>
    </product-list-two>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue'
import productListTwo from './components/productListTwo.vue'

export default {
  components: {
    'product-list-one':productListOne,
    'product-list-two':productListTwo
  }
}
</script>

<style>

</style>
