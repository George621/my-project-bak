import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

 export const store = new Vuex.Store({
  // strict:true,
  state:{
    products:[
      {name:'章三',price:'200'},
      {name:'莉丝',price:'100'},
      {name:'王五',price:'90'},
      {name:'马六',price:'600'},
      {name:'三丰',price:'50'},
    ]
  },
  getters:{
    saleProducts:(state) =>{
      let halfProducts = state.products.map((item, index)=>{
        return {
          name:'**'+item.name+ '**',
          price: item.price/2
        }
      })
      return halfProducts;
    }
  },
  mutations:{
    reducePrice:(state,palyload) =>{
      state.products.map((item, index)=>{
        item.price -= palyload;
      })
    }
  },
  actions:{
    reducePrice:(context, palyload) =>{
      setTimeout(function(){
        context.commit('reducePrice',palyload)
      }, 2000);
    }
  }

})
