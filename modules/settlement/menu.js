import MyIntroduce from '../introduce'
import MyTable from '../table'
import MyForm from '../form'

module.exports = [{
	'path': '/',
	'component': MyIntroduce,
	'exact': true
},{
	'path': '/table',
	'component': MyTable
},{
	'path': '/form',
	'component': MyForm
}]