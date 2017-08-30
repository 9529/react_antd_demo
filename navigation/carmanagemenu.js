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
export default class MyCarmanageMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1">车辆信息查询</Menu.Item>
				        <Menu.Item key="2">车主信息录入</Menu.Item>
				        <Menu.Item key="3">特殊车型管理</Menu.Item>
				        <Menu.Item key="4">管理员给车主开通上网</Menu.Item>
				        <Menu.Item key="5">客户手动申请失败查询</Menu.Item>
				        <Menu.Item key="6">车型车系查询</Menu.Item>
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