import Login from './sysDemo/Login';
import Home from './sysDemo/Home';
import UseApp from './sysDemo/UseApp';
import UserInfo from './sysDemo/UserInfo';
import PraDetails from './sysDemo/PraDetails';
import Feedback from './sysDemo/Feedback';
import Register from './sysDemo/Register';


const routes = [
    {
        path:'/',
        exact:true,
        component:Login
    },
    {
        path:'/home',
        exact:true,
        component:Home,      
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/article',
        component:PraDetails
    },
    {
        path:'/useapp',
        component:UseApp
    },
    {
        path:'/userinfo',
        component:UserInfo,
    },
    {
        path:'/feedback',
        component:Feedback
    }
]


export default routes;