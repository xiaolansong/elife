import React,{useEffect} from 'react'
import Header from './Header';
import '../sysStyle/feedback.css';
import { connect } from 'react-redux';
import {getFeedbackList} from '../sysRedux/getAppList';

const Feedback = (props) => {
    useEffect(() => {
        props.dispatch(getFeedbackList());
    },[]);
    console.log(props);
    return (
        <div>
            <Header props={props}/>
                <div className='feedbackList'>
                    <h1>意见反馈</h1>
                    <table cellPadding="10px" cellSpacing="0px">
                        <tbody>
                            {
                                props.feedback.map((item,idx)=>
                                    <tr key={idx}>
                                        <td>{idx+1}</td>
                                        <td>{item}</td>
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
    feedback:state.feedback
})

export default connect(mapStateToProps)(Feedback);
