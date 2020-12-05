const appFunStepreducer = (state={data:[]},action)=>{

    switch(action.type){
        case 'GETFUNSTEPLIST':
            return {data:action.data}
        default:
            return state;
        
    }
}

export default appFunStepreducer;