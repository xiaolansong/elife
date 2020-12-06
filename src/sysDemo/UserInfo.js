import React,{useEffect} from 'react';
import Header from './Header';
import '../sysStyle/userinfo.css';
import { Button } from 'antd-mobile';
import {getUserInfoList} from '../sysRedux/getAppList';
import { connect } from 'react-redux';

const changePoints = (that)=>{
    console.log(that);
    that.target.parentNode.parentNode.parentNode.cells[2].innerHTML=0;
}

const UserInfo = (props) => {
    if(!localStorage.getItem('token')){
        props.history.push('/elife/');
    }
    //获取用户信息列表
    useEffect(() => {
        props.dispatch(getUserInfoList(props.match.path));
    },[]);
    let orderInfo = props.infolist;
    function sortPoints(a, b) {
        return b.integral - a.integral;
    }
    orderInfo.sort(sortPoints);
    //移除按钮样式
    const btnStyle={
        backgroundColor:'#f00',
        cursor:'pointer',
        color:'#fff'
    };
    return (
        <div>
            <Header props={props}/>
            <div className='userTable' >
                <table cellPadding="10px" cellSpacing="0px">
                    <tbody>
                        <tr>
                            <th>用户排名</th>
                            <th>用户昵称</th>
                            <th>用户积分</th>
                            {/* <th>清除积分</th> */}
                        </tr>
                        {
                            orderInfo.map((item,idx)=>
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{item.username}</td>
                                    <td>{item.integral}</td>
                                    {/* <td>
                                        <Button 
                                            style={btnStyle}
                                            onClick={
                                                changePoints.bind(this)
                                            }>清除积分</Button>
                                    </td> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
        infolist:state.userinfo
})
    
export default connect(mapStateToProps)(UserInfo);
            
