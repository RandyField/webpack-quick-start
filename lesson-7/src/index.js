/**
 * es6
 * 写法
 *  
 * */
import { hello } from './hello_module';
// import img1 from '../static/img/bd_logo1.png'
import img2 from './bd_logo1.png';
import './test.scss';

hello.sayHello()

async function sayHello() {
    const result=await fetch('https://www.baidu.com')
    console.log(result)

    // const test=await fetch(SERVICE_URL);
    console.log(SERVICE_URL)
}

sayHello()

/**
 * node.js
 * 写法
 */
// let hello=require('./hello_module')
// hello.sayHello();