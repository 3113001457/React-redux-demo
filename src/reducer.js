export default function(state={num:0},action){
	switch(action.type){
		case "ADD":
		return Object.assign({},state,{num:state.num+1});
		default:
		return state
	}
}