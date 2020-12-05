let userinfolist = [];
const userinforeducer = (state=userinfolist,action)=>{

    switch(action.type){
        case 'GETUSERINFOLIST':
            return [...action.data];
        case 'DELUSERINFO':
            let arr = [...state];
            arr.splice(action.index,1);
            return arr;
        default:
            return state;
        
    }
}

export default userinforeducer;