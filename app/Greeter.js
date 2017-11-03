//Greeter,js
import React, {Component} from 'react'; 
import config from './config.json';
import styles from './Greeter.scss'
import axios from 'axios';
import $ from 'zeptojs';
class Greeter extends Component{
	componentWillMount(){
		var obj = {pageNo:2,pageSize:15};
	    axios.get('/listmore.json',{params:obj}).then((data)=>{
	        console.log(data)
	    })
		
	}
  render() {
  	console.log(styles)
    return (
      <div className={styles.box}>
        {config.greetText}
       	<span className={styles.span}>6666</span>
      </div>
    );
  }
}

export default Greeter

