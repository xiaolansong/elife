const appListreducer = (state={data:[]},action)=>{

    switch(action.type){
        case 'GETAPPLIST':
            return {data:action.data}
        default:
            return state;
        
    }
}

export default appListreducer;