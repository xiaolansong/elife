import React,{useEffect} from 'react';
import '../sysStyle/home.css';
import Header from '../sysDemo/Header';
import {Button} from 'antd-mobile';
import {getArticleList} from '../sysRedux/getAppList';
import {connect} from 'react-redux';
import {upArticle} from '../sysRedux/upLoadFile';

//上传样式
const uploadForm = {
    backgroundColor:'#00c4b3',
    width:'14%',
    height:'240px',
    marginTop:'100px',
    marginLeft:'1%',
    display:'block',
    float:'left',
    color:'#fff',
    borderRadius:'6px'
}
//按钮样式
const btnStyle={
    width:'100%',
    cursor:'pointer'
}
const Home = (props) => {
    if(!localStorage.getItem('token')){
        props.history.push('/elife/');
    }
     //获取App列表
     useEffect(() => {
        props.dispatch(getArticleList(props.match.path));
    },[]);
    return (
        <div>
		    <Header props={props}/>
            <div>
                <form id='form' onSubmit="return false;" style={uploadForm}>
                    <h2 style={{marginBottom:'2%'}}>上传步骤</h2>
                    题目<input type='text' name='title' autoComplete="off" style={{marginBottom:'2%'}}/><br/>
                    图片<input type='file' name='image' autoComplete="off" style={{marginBottom:'2%'}}/><br/>
                    文章<input type='file' name='content' autoComplete="off" style={{marginBottom:'2%'}}/><br/>
                    音频<input type='file' name='voice' autoComplete="off" style={{marginBottom:'2.5%'}}/><br/>
                    <Button 
                        style={btnStyle}
                        onClick ={()=>{
                            upArticle();
                            setInterval(()=>{
                                window.history.go(0);
                            },500)
                        }}
                    >增加一篇小贴士</Button>
                </form>
                <div>
                    <ul className='praList'>
                        {
                            props.article.map((item,idx)=>(
                                <li 
                                    key={idx}
                                    onClick={() => { 
                                        props.history.push({pathname:'/elife/article',state:item}) ;                                                      
                                    }}
                                >
                                    <img src={item.image} alt='加载失败'/>
                                    <span>题目：{item.title}</span><br/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    article:state.article,
})

export default connect(mapStateToProps)(Home);
