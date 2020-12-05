import React,{useEffect} from 'react';
import '../../sysStyle/stepList.css';
import {getStepList} from '../../sysRedux/getAppList';
import { connect } from 'react-redux';
import {addStep} from '../../sysRedux/upLoadFile';

const FunStepList = (props) => {
    //获取步骤列表
    useEffect(() => {
        props.dispatch(getStepList(props.match.url));
    },[]);
    console.log(props);
    return (
        <div>
            <ul className='stepList'>
                {
                    props.stepdata.map((item,idx)=>
                    <li key={idx} className='stepLi'>
                        <img src={item.image} alt='加载失败' className='stepImg'/>
                        <span>第{idx+1}步描述：{item.text}</span>
                    </li>
                    )
                }
                <li>
                    <form id='form' onSubmit="return false;">
                        <h2>上传步骤</h2>
                        文件<input type='file' name='file' autocomplete="off"></input><br></br>
                        文字描述<input type='text' name='text' autocomplete="off"></input><br></br>
                        定位点1<input type='text' name='dote1' autocomplete="off" ></input><br></br>
                        定位点2<input type='text' name='dote2' autocomplete="off" ></input><br></br>
                        定位点3<input type='text' name='dote3' autocomplete="off" ></input><br></br>
                        定位点4<input type='text' name='dote4' autocomplete="off" ></input><br></br>
                        <button 
                            id={props.match.path} 
                            type='button' 
                            onClick={(t)=>{
                                addStep(t);
                                setInterval(()=>{
                                    window.history.go(0);
                                },500);
                            }} 
                            style={{marginTop:'4%',width:'160px'}}
                        >上传</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    stepdata:state.funSteplist.data
})

export default connect(mapStateToProps)(FunStepList);
   