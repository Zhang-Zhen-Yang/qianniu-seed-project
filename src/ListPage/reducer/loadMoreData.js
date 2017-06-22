import { listData } from '../list.data'

const initState = {
    listData:listData,
    loading:false,
    currentPage:1,
    page:3,
    loadEnd:false
};
function counter(state=initState,action){
    switch(action.type){
        case 'LoadMoreData':
            if(state.currentPage == state.page){
                return {...state,loadEnd:true};
            }else{
               return {...state,listData:state.listData.concat(action.res),currentPage:++state.currentPage}; 
            }     
            
        case 'Loading':
            return {...state,loading:true};

        default :return state;

    }

}
export default counter