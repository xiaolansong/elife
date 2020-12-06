import React from 'react';
import '../sysStyle/register.css';
import { Button } from 'antd-mobile';
import userSrc from '../image/用户.png';
import pswdSrc from '../image/密码.png';

//注册按钮
const registerBtn = {
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

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwd: '',
            passwdtwo:''
        }
    }
    register() {
        let username = this.state.username;
        let passwd = this.state.passwd;
        let passwdtwo = this.state.passwdtwo;
        if(username===''){
            document.getElementById('userTip').style.opacity=1
        }if(username !== '' && passwd === ''){
            document.getElementById('passwdTip').style.opacity=1
        }if(username !== '' && passwd !== '' && passwdtwo === ''){
            document.getElementById('passwdTwoTip').style.opacity=1
        }else{
            if(passwd !== passwdtwo){
                alert('两次输入的密码不一致！');
                document.getElementsByClassName('rpassword')[0].value = '';
                document.getElementsByClassName('rpasswordtwo')[0].value = '';
                this.setState({ passwd: '' });
                this.setState({ passwdtwo: '' });
            }
            else{
                const postData = {
                    "username": username,
                    "passwd": passwd,
                };
                console.log(postData);
                fetch('http://211.159.166.29:1234/pc/register', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(postData)
                }).then(res => {
                    if (res.ok) {
                        alert('注册成功');
                        return res.json()
                    } else {
                        throw new Error(`status: ${res.status}`)
                    }
                }, err => {

                }).then(d => {
                    if (d === undefined || d === '') {
                        return;
                    }
                    localStorage.setItem('token', d.token);
                    this.props.history.push('/elife/')
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    };
    handleUserNameChange = (event) => {
        this.setState({ username: event.target.value });
    }
    handlePassWordChange(event) {
        this.setState({ passwd: event.target.value });
    }
    handlePassWordTwoChange(event) {
        this.setState({ passwdtwo: event.target.value });
    }
    render(){
        // document.getElementById('userTip').style.display='none';
        // document.getElementById('passwdTip').style.display='none';
        // document.getElementById('passwdTwoTip').style.display='none';
        return (
            <div>
                <div className='registerTop'>注册账号</div>
                <div className='ruserStyle'>
                    <div className='ruserImg'>
                        <img src={userSrc} alt='加载失败' className='icon' />
                    </div>
                    <input
                        type='text'
                        name='username'
                        placeholder=' 请输入用户名(2-6位)'
                        className='rusername'
                        autoComplete="off"
                        autoFocus="autofocus"
                        onFocus={()=>document.getElementById('userTip').style.opacity=0}
                        onChange={this.handleUserNameChange}
                    ></input>
                    <div id='userTip' style={{color:'#f00',opacity:0}}>*请输入2-6位用户名</div>
                </div>
                {/* 密码 */}
                <div className='rpswdStyle'>
                    <div className='ruserImg'>
                        <img src={pswdSrc} alt='加载失败' className='icon' />
                    </div>
                    <input
                        type='password'
                        name='passwd'
                        placeholder=' 请输入密码(6-10位)'
                        className='rpassword'
                        autoComplete="off"
                        onFocus={()=>document.getElementById('passwdTip').style.opacity=0}
                        onChange={this.handlePassWordChange.bind(this)}
                    ></input>
                    <div id='passwdTip' style={{color:'#f00',opacity:0}}>*请输入6-10位密码</div>
                </div>
                {/* 确认密码 */}
                <div className='rpswdTwoStyle'>
                    <div className='ruserImg'>
                        <img src={pswdSrc} alt='加载失败' className='icon' />
                    </div>
                    <input
                        type='password'
                        name='passwdtwo'
                        placeholder=' 请再次输入密码'
                        className='rpasswordtwo'
                        autoComplete="off"
                        onFocus={()=>document.getElementById('passwdTwoTip').style.opacity=0}
                        onChange={this.handlePassWordTwoChange.bind(this)}
                    ></input>
                    <div id='passwdTwoTip' style={{color:'#f00',opacity:0}}>*请确认密码</div>
                </div>
                <Button
                    style={registerBtn}
                    onClick={() => {
                        (this.register());
                    }}
                >注册</Button>
            </div>
        )
    }
}

export default Register;
