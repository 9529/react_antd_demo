import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { BrowserRouter , Route, NavLink, Switch} from 'react-router-dom'
import leftMenu from './navigation/menu'

const { SubMenuv } = Menu;
const { Header, Content, Sider } = Layout;

ReactDOM.render(
	<BrowserRouter>
  		<Layout>
		    <Header className="header">
		      	<div className="logo">亚信</div>
		      	<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '50px' }}>
			        <Menu.Item key="1"><NavLink to="/">商品管理</NavLink></Menu.Item>
			        <Menu.Item key="2"><NavLink to="/customermenu">客户管理</NavLink></Menu.Item>
			        <Menu.Item key="3"><NavLink to="/settlementmenu">结算管理</NavLink></Menu.Item>
			        <Menu.Item key="4"><NavLink to="/carmanagemenu">车辆管理</NavLink></Menu.Item>
			        <Menu.Item key="5"><NavLink to="/resourcesmenu">资源管理</NavLink></Menu.Item>
			        <Menu.Item key="6"><NavLink to="/systemmenu">系统管理</NavLink></Menu.Item>
			        <Menu.Item key="7"><NavLink to="/reportmenu">报表管理</NavLink></Menu.Item>
			        <Menu.Item key="8">工作台</Menu.Item>
		      	</Menu>
		    </Header>
		    <Layout>
		      	<Switch>
			        {
			        	leftMenu.map((route,index) => (
			          		<Route key={index} path={route.path} component={route.component} exact={route.exact} />
			        	))
			        }
		      	</Switch>
		    </Layout>
		</Layout>
  	</BrowserRouter>, document.getElementById('root'));