import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import articlecontent from '../sysRedux/artContentreducer';
import article from '../sysRedux/articlereducer';
import applist from '../sysRedux/applistreducer';
import appFunList from '../sysRedux/appFunreducer';
import funSteplist from '../sysRedux/funStepreducer';
import userinfo from '../sysRedux/userinforeducer';
import feedback from '../sysRedux/feedBackreducer';

let rootReducer = combineReducers({
    articlecontent,article,applist,appFunList,funSteplist,userinfo,feedback
});

function logger({ getState }) {
    return (next) => (action) => {
        console.log('will dispatch', action)

        // 调用 middleware 链中下一个 middleware 的 dispatch。
        let returnValue = next(action)

        console.log('state after dispatch', getState())

        // 一般会是 action 本身，除非后面的 middleware 修改了它。
        return returnValue
    }
}

const thunk = ({ dispatch, getState }) => (next) => (action) => {
    console.log('thunk');
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }

    return next(action);
};

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger,thunk),
        // applyMiddleware(thunk),
    )
);

export default store;