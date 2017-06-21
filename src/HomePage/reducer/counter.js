function counter(state={num:0},action){
    switch(action.type){
        case 'ADD':
            return {...state,num:++state.num};
        case 'SUB':
            return {...state,num:--state.num};
        default :return state;

    }

}
export default counter