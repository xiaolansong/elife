import React,{useEffect} from 'react';
import {Button} from 'antd-mobile';
import '../sysStyle/praDetails.css';
import { NavLink } from 'react-router-dom';
import {getArticleContent} from '../sysRedux/getAppList';
import {connect} from 'react-redux';

const PraDetails = (props) => {
    const praInfo = props.location.state;
    useEffect(() => {
        props.dispatch(getArticleContent(praInfo.content));
    },[]);
    console.log(praInfo);
    const goBack={
        backgroundColor:'#00c4b3',
    }
    return (
        <div>
            <NavLink to='/home'><Button style={goBack}>返回首页</Button></NavLink>
            <div>
                <div className='imgStyle'>
                    <span className='spanStyle'>贴士图片</span>
                    <img src={praInfo.image} alt='加载失败'/>
                </div>
                <div className='contentStyle'>
                    <span className='spanStyle'>贴士内容</span>
                    <p className='title'><b>{praInfo.title}</b></p><br/>
                    <p className='content'>{props.article}</p>
                </div>
                <div>
                    <span className='spanStyle'>点赞用户</span>
                    <p></p>
                </div>
                <div>
                    <span className='spanStyle'>收藏用户</span>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    article:state.articlecontent.data,
})

export default connect(mapStateToProps)(PraDetails);