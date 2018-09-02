Vue.component('todo-footer',{
  template:'<p>this is another global component</p>'
});


var app = new Vue({
  el: '#app1',
  data:{
    message:'this is a parent component'
  },
  components:{
    'todo-list':{
      template:'<p>this is another local child component</p>'
    }
  }
});
