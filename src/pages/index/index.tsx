import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })
//字符串
   let a='第一个变量'
//数组
const arr=['abc','cba','nba']
//对象
const obj ={
  name:"张三",
  age:18
}

let isTrue=true;

let isNull=null;
let isUndefined=undefined;

function fn(){ 
   return '我是函数的返回值'
  }

let classname1='class1'
let classname2='class1'

let mystyle ={
  fontSize:"20px",
  border:"1px solid green"
}


  return (
 <>
  <View>{a}</View>

<View>{arr}</View>

<View>{obj.name}-{obj.age}</View>

<View>{JSON.stringify(obj)}</View>

<View>{new Date().getTime()}</View>

<View>{isTrue}</View>

<View>{isNull}</View>

<View>{isUndefined}</View>

<View>{1+2}</View>

<View>{isTrue ? '我的真的':'我的假的'}</View>

<View>{fn()}</View>


<View style={{
  
}}>

</View>
 </>
  )
}
