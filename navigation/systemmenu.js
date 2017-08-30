import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';

const {
	SubMenuv
} = Menu;
const {
	Header,
	Content,
	Sider
} = Layout;

// 配置头部导航
export default class MySystemMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1">部门管理</Menu.Item>
				        <Menu.Item key="2">员工管理</Menu.Item>
				        <Menu.Item key="3">菜单管理</Menu.Item>
				        <Menu.Item key="4">角色管理</Menu.Item>
				        <Menu.Item key="5">工号管理</Menu.Item>
				        <Menu.Item key="6">权限管理</Menu.Item>
				        <Menu.Item key="7">重置员工密码</Menu.Item>
				        <Menu.Item key="8">密码修改</Menu.Item>
				        <Menu.Item key="9">异常日志</Menu.Item>
				        <Menu.Item key="10">任务查询菜单</Menu.Item>
				        <Menu.Item key="11">任务日志查询菜单</Menu.Item>
				        <Menu.Item key="12">操作日志查询</Menu.Item>
				        <Menu.Item key="13">日志统计</Menu.Item>
			        </Menu>
		      	</Sider>
		      	<Layout style={{ padding: '20px' }}>
		        	<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
		          		{this.props.children}
		        	</Content>
		      	</Layout>
		    </Layout>
		);
	}
}
