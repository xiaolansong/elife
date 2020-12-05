let articlelist = [];
const articlereducer = (state=articlelist,action)=>{

    switch(action.type){
        case 'GETARTICLELIST':
            return [...action.data].reverse();
        default:
            return state;
        
    }
}

export default articlereducer;