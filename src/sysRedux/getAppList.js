
export const getArticleContent = (urlPath)=>{
    return (dispatch)=>{
        let url = urlPath;
        fetch(url, {
            method: 'get',
            mode:'cors',
        })
        .then(res => res.text())
        .then(res => {
            dispatch({
                type:'GETARTCONTENT',
                data:res     
            });
        })
    }
}

export const getArticleList = () =>{
    return (dispatch)=>{
        let url = 'http://211.159.166.29:1234/usepassage';
        fetch(url, {
            method: 'get',
            mode:'cors'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch({
                type:'GETARTICLELIST',
                data:res     
            });
        })
    }
}

export const getApplist = () =>{
    return (dispatch)=>{
        let url ='http://211.159.166.29:1234/useapp';
        fetch(url, {
            method: 'GET',
            mode:'cors',
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type:'GETAPPLIST',
                data:res     
            });
        })
    }
}

export const getFunList = (name) =>{
    return (dispatch)=>{
        let url = `http://211.159.166.29:1234${name}`;
        fetch(url, {
            method:'GET',
            mode:'cors',
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type:'GETAPPFUNLIST',
                data:res     
            });
        })
    }
}


export const getStepList = (name) =>{
    return (dispatch)=>{
        let appPath = name.substr(0,name.length-4);
        let funName = name.substr(-4,4);
        let url = `http://211.159.166.29:1234${appPath}?type=${funName}`;
        fetch(url, {
            method: 'GET',
            mode:'cors',
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type:'GETFUNSTEPLIST',
                data:res    
            });
        })
    }
}
let token = '' || localStorage.getItem('token');
export const getUserInfoList = () =>{
    return (dispatch)=>{
        let url = `http://211.159.166.29:1234/admin/getUsers`;
        fetch(url, {
            method: 'GET',
            mode:'cors',
            headers:{
                'authorization':token
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch({
                type:'GETUSERINFOLIST',
                data:res    
            });
        })
    }
}
export const getFeedbackList = () =>{
    return (dispatch)=>{
        let url = `http://211.159.166.29:1234/admin/showSuggestions`;
        fetch(url, {
            method: 'GET',
            mode:'cors',
            headers:{
                'authorization':token
            }
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type:'GETFEEDBACKLIST',
                data:res    
            });
        })
    }
}
