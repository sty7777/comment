export default defineAppConfig({
  pages: [
  'pages/index/index', "pages/com/index", "pages/route/index"],

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#001112',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#1296db",
    list: [
    {
      text: "首页",
      //页面路径
      pagePath: "pages/index/index",
      //默认图标
      iconPath: "images/home_no_active.png",
      selectedIconPath: "images/home_active.png"

    },
    {
      text: "组件",
      pagePath: "pages/com/index",
      iconPath: "images/com_no_active.png",
      selectedIconPath: "images/com_active.png"
    }]

  }
});