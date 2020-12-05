const appFunreducer = (state={data:[]},action)=>{

    switch(action.type){
        case 'GETAPPFUNLIST':
            return {data:action.data}
        default:
            return state;
        
    }
}

export default appFunreducer;