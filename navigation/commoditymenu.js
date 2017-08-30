import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';


const {
	SubMenuv
} = Menu;
const {
	Header,
	Content,
	Sider
} = Layout;

// 配置头部导航
export default class MyCommodityMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1">商品查询</Menu.Item>
				        <Menu.Item key="2">商品配置</Menu.Item>
				        <Menu.Item key="3">商品审批</Menu.Item>
				        <Menu.Item key="4">商品发布</Menu.Item>
				        <Menu.Item key="5">商品上架</Menu.Item>
				        <Menu.Item key="6">商品下架</Menu.Item>
				        <Menu.Item key="7">陕西移动基础资费配置</Menu.Item>
				        <Menu.Item key="8">深圳联通基础资费配置</Menu.Item>
				        <Menu.Item key="9">深圳联通资费计划配置</Menu.Item>
			        </Menu>
		      	</Sider>
		      	<Layout style={{ padding: '20px' }}>
		        	<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
		        		22222
		        	</Content>
		      	</Layout>
		    </Layout>
		);
	}
}
