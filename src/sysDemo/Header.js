import React from 'react';
import {Button} from 'antd-mobile';
import { NavLink} from 'react-router-dom';
import logoSrc from '../image/乐易.png';
import '../sysStyle/header.css'

//退出按钮
const exitBtn={
    width: '60px',
    height: '40px',
    backgroundColor: '#f00',
    border:'none',
    float:'right',
    marginRight:'8%',
    marginTop:'4px',
    cursor: 'pointer',
}

//退出登录
const Header =(props)=>{
    return(
        <div className='topStyle'>
            <header className='headStyle'>
                <img src={logoSrc} alt='加载失败' className='logoStyle'/>
                <span>&nbsp;乐易后台管理系统</span>
                <Button 
                    style={exitBtn}
                    onClick={()=>{
                        let exit = window.confirm("确认退出登录？");
                        if(exit === true){
                            props.props.history.push('/elife/');
                            localStorage.removeItem('token');
                        }
                    }}    
                >
                    <span className='exitBtn'>退出</span>
                </Button>
           </header>
            <nav>
                <NavLink activeClassName='active' exact to='/elife/home'>生活小贴士</NavLink>
                <NavLink activeClassName='active' to='/elife/useapp'>易用App</NavLink>
                <NavLink activeClassName='active' to='/elife/userinfo'>用户信息</NavLink>
                <NavLink activeClassName='active' to='/elife/feedback'>意见反馈</NavLink>
            </nav>
        </div>
    )
}

export default Header;

