import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import routes from './router.config';
import {Provider} from 'react-redux';
import store from './sysRedux/store';


//循环渲染子路由
export function RouteWithSubRoutes(route) {
	
		return (
			<Route
			  path={route.path}
			  render={(props)=> {
				  return <route.component {...props} routes={route.routes} />
			  }}
			/>
		)
	
}
  

const App = ()=>{
	return <Provider store={store}>
		<Router>
			<Switch>
				{
					routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))
				}
			</Switch>
		</Router>
	</Provider>
}

export default App;