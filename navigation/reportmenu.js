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
export default class MyReportMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1">日-月报管理</Menu.Item>
				        <Menu.Item key="2">流量使用量分析</Menu.Item>
				        <Menu.Item key="3">资源销售分析</Menu.Item>
				        <Menu.Item key="4">财务报表</Menu.Item>
				        <Menu.Item key="5">客户用户分析</Menu.Item>
				        <Menu.Item key="6">车辆分析</Menu.Item>
				        <Menu.Item key="7">运营分析</Menu.Item>
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