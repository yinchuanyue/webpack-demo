import _ from 'lodash';
import   './style.css';
import Icon from './项目搭建完成后应该出来的界面.png'
import Data from './data.xml';
function component() {
	var element = document.createElement('div');
  
	// Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
	//Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	//3将图片添加到我们现有的div
	var myIcon = new Image();
	myIcon.src = Icon
	element.appendChild(myIcon);
	console.log(Data);
	return element;
  }
  
  document.body.appendChild(component());