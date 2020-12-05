let feedbacklist = [];
const feedbackreducer = (state=feedbacklist,action)=>{

    switch(action.type){
        case 'GETFEEDBACKLIST':
            return [...action.data];
        default:
            return state;
        
    }
}

export default feedbackreducer;