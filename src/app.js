import Vue from "vue";

const app = new Vue({
  data:{
    hello:"Hai, This is Nobody"
  },
  template: '<div id="app">{{hello}}</div>'
});

export {app};
