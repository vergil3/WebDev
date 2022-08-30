//see if it works
var app = new Vue({
    el: "#app",
    data: {
      message: "Hello world!",
    },
  });

  //use binding vairables like v-bind
  var app2 = new Vue({
    el: '#app-2',
    data: {
        message : 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  //conditionals and loops
  //i you type app3.seen=false in the console, the statement will disappear
  var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
  })

  //another example of loops e.g. with a list
  var app4 = new Vue({
    el: '#app-4',
    data: {
        todos:[
            {text: 'Learn JavaScript'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
  })

  //handling user input
  var app5 = new Vue({
    el: '#app-5',
    data:{
        message: 'Hello Vue.js!'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
  })

  //another user input example
  var app6 = new Vue({
    el: '#app-6',
    data:{
        message: 'Hello Vue!'
    }
  })