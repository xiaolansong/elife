import Login from './sysDemo/Login';
import Home from './sysDemo/Home';
import UseApp from './sysDemo/UseApp';
import UserInfo from './sysDemo/UserInfo';
import PraDetails from './sysDemo/PraDetails';
import Feedback from './sysDemo/Feedback';
import Register from './sysDemo/Register';


const routes = [
    {
        path:'/elife/',
        exact:true,
        component:Login
    },
    {
        path:'/elife/home',
        exact:true,
        component:Home,      
    },
    {
        path:'/elife/register',
        component:Register
    },
    {
        path:'/elife/article',
        component:PraDetails
    },
    {
        path:'/elife/useapp',
        component:UseApp
    },
    {
        path:'/elife/userinfo',
        component:UserInfo,
    },
    {
        path:'/elife/feedback',
        component:Feedback
    }
]


export default routes;