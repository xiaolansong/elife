import React,{useEffect} from 'react';
import { NavLink,Route,Switch} from 'react-router-dom';
import {getFunList} from '../../sysRedux/getAppList';
import {connect} from 'react-redux';
import FunStepList from '../app_functions/Fun_stepList';
import '../../sysStyle/appFunLIst.css';
import {addFun} from '../../sysRedux/upLoadFile';

const AppfunList = (props) => {
    //获取App功能列表
    useEffect(() => {
        props.dispatch(getFunList(props.match.url));
    },[]);
    const routes=props.fundata.map((item)=>{
        let obj={
            path:'/elife'+props.match.path+'/'+item.ename.split('_')[1],
            component:FunStepList
        };
        return obj;
    });
    let len = routes.length+1;
    let funName = 'fun'+len;
    return (
        <div>
            <Switch>
                {
                    routes.map((item,idx)=>(
                        <Route key={idx} path={item.path} component={item.component}/>
                    ))
                }
            </Switch>
            <ul className='funlist'>
                {
                    props.fundata.map((item,idx)=>(
                        <li key={idx}>
                            <NavLink activeClassName='active' to={routes[idx].path}>{item.name}</NavLink>
                        </li>
                    ))
                }
                <li>
                    <form encType ="multipart/form-data">
                        <input 
                            type="button" 
                            id={props.match.path} 
                            value='添加功能' 
                            onClick={(t)=>{
                                addFun(t,funName);
                                setInterval(()=>{
                                    window.history.go(0);
                                },500)
                            }}
                        ></input>
                    </form>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    fundata:state.appFunList.data,
    stepdata:state.funSteplist.data
})


export default connect(mapStateToProps)(AppfunList);
   