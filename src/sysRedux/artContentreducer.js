const artContent = (state={data:[]},action)=>{

    switch(action.type){
        case 'GETARTCONTENT':
            return {data:action.data}
        default:
            return state;
        
    }
}

export default artContent;