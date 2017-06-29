





 var TodoReducer=function(state,action){
 	
 	if(typeof state==='undefined'){
 		return []
 	}
 	
 	switch(action.type){
 		case 'ADD-TODO-ITEM':
 		return state.splice(0).concat(action.text)
 		break;
 	}
 }



module.exports=TodoReducer;