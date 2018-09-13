import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // counter 라는 state 속성을 추가
  state: {
    counter: 0
  },
  //getter : 값을 가져다 쓰기위한 속성
  getters:{
    getCounter:function(state){
      return state.counter;
    }
  },
  //setter의 역할:동기적 로직을 정의한다(디버깅등이 용이)
  mutations:{
    addCounter:function(state,payload){ //state는 상단의 state 속성값 의미
      return state.counter++;           //payload는 전달받은 인자값 의미
    },
    subCounter:function(state,payload){
      return state.counter--;
    },
    Increment:(state,payload)=>{
      return alert(payload);
    }
  },
  actions:{
    addCounter:function(context){
      //commit 대상인 addCounter는 mutations의 메서드를 의미한다
      return context.commit('addCounter');
    },
    asyncIncrement:function(context,payload){
      return setTimeout(function(){
        context.commit('Increment',payload.by);
      },payload.duration);
    }
  }
});
