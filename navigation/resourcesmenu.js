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
export default class MyResourcesMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1">资源入库</Menu.Item>
				        <Menu.Item key="2">资源库存查询</Menu.Item>
				        <Menu.Item key="3">资源入库查询</Menu.Item>
				        <Menu.Item key="4">资源销售查询</Menu.Item>
				        <Menu.Item key="5">报废申请单</Menu.Item>
				        <Menu.Item key="6">报废审核</Menu.Item>
				        <Menu.Item key="7">资源报损查询</Menu.Item>
				        <Menu.Item key="8">资源报损</Menu.Item>
				        <Menu.Item key="9">资源预警信息查询</Menu.Item>
				        <Menu.Item key="10">资源仓库管理</Menu.Item>
				        <Menu.Item key="11">已入库卡基本信息查询</Menu.Item>
				        <Menu.Item key="12">设备入库</Menu.Item>
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