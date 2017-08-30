import Commoditymenu from './commoditymenu'
import Customermenu from './customermenu'
import Settlementmenu from './settlementmenu'
import Carmanagemenu from './carmanagemenu'
import Resourcesmenu from './resourcesmenu'
import Systemmenu from './systemmenu'
import Reportmenu from './reportmenu'

module.exports = [{
	'path': '/',
	'component': Commoditymenu,
	'exact': true
},{
	'path': '/customermenu',
	'component': Customermenu
},{
	'path': '/settlementmenu',
	'component': Settlementmenu
},{
	'path': '/carmanagemenu',
	'component': Carmanagemenu
},{
	'path': '/resourcesmenu',
	'component': Resourcesmenu
},{
	'path': '/systemmenu',
	'component': Systemmenu
},{
	'path': '/reportmenu',
	'component': Reportmenu
}]