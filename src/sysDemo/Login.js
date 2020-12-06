import React from 'react';
import '../sysStyle/login.css';
import { Button } from 'antd-mobile';
import logoSrc from '../image/乐易.png';
import userSrc from '../image/用户.png';
import pswdSrc from '../image/密码.png';
import { NavLink } from 'react-router-dom';


//登录按钮
const loginBtn = {
    width: '330px',
    height: '60px',
    marginLeft: '38%',
    marginTop: '2%',
    backgroundColor: '#00c4b3',
    color: '#fff',
    borderStyle: 'none',
    borderRadius: '15px',
    cursor: 'pointer',
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwd: ''
        }
    }
    login() {
        let token = '' || localStorage.getItem('token');
        let username = this.state.username;
        let passwd = this.state.passwd;
        const postData = {
            "username": username,
            "passwd": passwd,
            "token": token
        };
        fetch('http://211.159.166.29:1234/pc/elogin', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'authorization': token
            },
            body: JSON.stringify(postData)
        }).then(res => {
            if (res.ok) {
                alert('登录成功');
                return res.json()
            } else {
                if (res.status === 401) {
                    alert('登录失败:用户名错误');
                    throw new Error(`status: ${res.status}`)
                } else if (res.status === 402) {
                    alert('登录失败:密码错误');
                    throw new Error(`status: ${res.status}`)
                }
            }
        }, err => {

        }).then(d => {
            if (d === undefined || d === '') {
                return;
            }
            localStorage.setItem('token', d.token);
            this.props.history.push('/elife/home')
        })
            .catch(err => {
                console.log(err)
            })
    };
    handleUserNameChange = (event) => {
        this.setState({ username: event.target.value });
    }
    handlePassWordChange(event) {
        this.setState({ passwd: event.target.value });
    }
    render() {
        return (
            <form encType="multipart/form-data">
                <div className='top'>
                    <span>没有账号？</span>
                    <NavLink to='/elife/register'>去注册</NavLink>
                </div>
                <img src={logoSrc} alt='加载失败' className='logo' /><br />
                {/* 用户名 */}
                <div className='userStyle'>
                    <div className='userImg'>
                        <img src={userSrc} alt='加载失败' className='icon' />
                    </div>
                    <input
                        type='text'
                        name='username'
                        placeholder=' 用户名'
                        className='username'
                        autoComplete="off"
                        autoFocus="autofocus"
                        onChange={this.handleUserNameChange}
                    ></input>
                </div>
                {/* 密码 */}
                <div className='pswdStyle'>
                    <div className='userImg'>
                        <img src={pswdSrc} alt='加载失败' className='icon' />
                    </div>
                    <input
                        type='password'
                        name='passwd'
                        placeholder=' 密码'
                        className='password'
                        autoComplete="off"
                        onChange={this.handlePassWordChange.bind(this)}
                    ></input>
                </div>
                {/* 登录 */}
                <Button
                    style={loginBtn}
                    onClick={() => {
                        (this.login());
                    }}
                >登录</Button>
                <div style={{ height: '100px', float: 'bottom' }}></div>
            </form>
        )
    }
}

export default Login
