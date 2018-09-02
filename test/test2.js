Vue.component('child-component',{
  props:['propsdata'],
  template:'<p>{{propsdata}}</p>'
});

Vue.component('sibling-component',{
  props:['propsdata2'],
  template:'<p>{{propsdata2}}</p>'
});

var app = new Vue({
  el: "#app",
  data: {
    message: 'hello Vue! passed from Parent component',
    anotherMessage: 'this is a anotherMessage!'
  }
});
