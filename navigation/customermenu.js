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
export default class MyCustomerMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1">客户资料查询</Menu.Item>
				        <Menu.Item key="2">信控方案修改</Menu.Item>
				        <Menu.Item key="3">客户服务开停管理</Menu.Item>
				        <Menu.Item key="4">批量物联网卡销户</Menu.Item>
				        <Menu.Item key="5">流量池购买记录查询</Menu.Item>
				        <Menu.Item key="6">卡超测试预警</Menu.Item>
				        <Menu.Item key="7">异常汇总查询</Menu.Item>
				        <Menu.Item key="8">实名认真</Menu.Item>
				        <Menu.Item key="9">设备绑卡</Menu.Item>
				        <Menu.Item key="10">设备绑卡更换</Menu.Item>
				        <Menu.Item key="11">客户录入</Menu.Item>
				        <Menu.Item key="12">客户投诉服务</Menu.Item>
				        <Menu.Item key="13">自动告警</Menu.Item>
				        <Menu.Item key="14">被动告警</Menu.Item>
				        <Menu.Item key="15">集团客户</Menu.Item>
				        <Menu.Item key="16">意见反馈</Menu.Item>
				        <Menu.Item key="17">答疑</Menu.Item>
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
