import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Switch, Link, Route } from 'react-router-dom';
import contentList from '../modules/settlement/menu'

const { SubMenuv } = Menu;
const { Header, Content, Sider } = Layout;

// 配置头部导航
export default class MySettlementMenu extends React.Component{
	render(){
		return(
	      	<Layout>
		      	<Sider width={200} style={{ background: '#fff' }}>
		        	<Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
				        <Menu.Item key="1"><Link to={this.props.match.url}>结算查询</Link></Menu.Item>
				        <Menu.Item key="2"><Link to={this.props.match.url +"/table"}>结算规则配置</Link></Menu.Item>
				        <Menu.Item key="3"><Link to={this.props.match.url +"/form"}>资费计划调整分析</Link></Menu.Item>
			        </Menu>
		      	</Sider>
		      	<Layout style={{ padding: '20px' }}>
		        	<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
		        		<Switch>
		        			{
		        				contentList.map((item,index) =>(
		        					<Route key={index} path={`${this.props.match.url}`+item.path} component={item.component} exact={item.exact}/>
		        				))
		        			}
		          		</Switch>
		        	</Content>
		      	</Layout>
		    </Layout>
		);
	}
}
