import React,{useEffect} from 'react'
import '../sysStyle/useApp.css';
import Header from '../sysDemo/Header';
import { NavLink,Redirect,Route,Switch} from 'react-router-dom';
import {getApplist} from '../sysRedux/getAppList';
import { connect } from 'react-redux';
import AppfunList from '../sysDemo/app_functions/App_funcList';
import {addApp} from '../sysRedux/upLoadFile';

const UseApp = (props) => {
    if(!localStorage.getItem('token')){
        props.history.push('/elife/');
    }
    //获取App列表
    useEffect(() => {
        props.dispatch(getApplist());
    },[]);
    console.log(props);
    const routes=props.appdata.map((item)=>{
        let obj={
            path:'/elife'+props.match.path+'/'+item.appname,
            component:AppfunList
        };
        return obj;
    });
    return (
            <div>
                <Header props={props}/>
                <div>
                    <Switch>
                        {
                            routes.map((item,idx)=>(
                                <Route key={idx} path={item.path} component={item.component}/>
                            ))
                        }
                    </Switch>
                    <ul className='appList'>
                        <li className='addApp'>
                            <form encType ="multipart/form-data" >
                                <input 
                                    type='file' 
                                    name='file'
                                    autoComplete="off" 
                                    onChange={(t)=>{
                                        addApp(t);
                                        setInterval(()=>{
                                            window.history.go(0);
                                        },500)
                                    }}
                                ></input>
                            </form>
                        </li>
                        {
                            props.appdata.map((item,idx)=>
                                <li key={idx}>
                                    <NavLink to={routes[idx].path} activeClassName='active'>
                                    <img src={item.image} alt='加载失败'/>
                                    </NavLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => ({
    appdata:state.applist.data,
    fundata:state.appFunList.data,
});
export default connect(mapStateToProps)(UseApp);