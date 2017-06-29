




var Redux=require('redux');


var TodoReducer=require('./reducer')



var Store=Redux.createStore(TodoReducer)





module.exports=Store;