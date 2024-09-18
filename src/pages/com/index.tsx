import { View, Text, Button ,Navigator} from '@tarojs/components'
import Taro, { useLoad} from '@tarojs/taro'
import './index.scss'


export default function Com () {
  useLoad(() => {
    console.log('Page loaded.')
  })

function handleNavigator1(){
  Taro.navigateTo({
    url:"/pages/route/index?id=1&name=张三&sex=男"
  })
}

function handleNavigator2(){
  Taro.redirectTo({
    url:"/pages/route/index"
  })
}

function handleNavigator3(){
  Taro.switchTab({
    url:"/pages/index/index"
  })
}

  return (
//     <View className='com'>
//       <Text>Hello world!</Text>

// </View>
      

    //Navigator跳转
<>
         <Navigator url='/pages/route/index?id=100' openType='navigate'>
          <Text>跳转到route页面</Text>
         </Navigator>

     <Navigator url='/pages/route/index?id=200&name=hang' openType='redirect'>
     <Text>跳转到route页面</Text>
    </Navigator>

        <Navigator url='/pages/index/index' openType='switchTab'>
       <Text>跳转到index页面</Text>
        </Navigator>

        <Button onClick={handleNavigator1}type='primary'>跳转到route页面</Button>
        <Button onClick={handleNavigator2}type='warn'>跳转到route页面</Button>
        <Button onClick={handleNavigator3}type='default'>跳转到index页面</Button>
    </>
  )
}
