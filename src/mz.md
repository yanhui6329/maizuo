##卖座电影项目
1.采用vue-cli脚手架工具，创建项目模板(vue init webpack myapp)解析模板中各个文件作用，重新搭建项目结构

2.配置sass开发环境，下载cnpm node-sass,sass-loader -D

3.开发Header组件，实现导航条的显示与隐藏
Header >NavList(navs,mask)

Header(data:isNavShow,methods:closeNav)-->NavList(v-if,transition)

4. 开发了Home组件以及Banner
    采用了，swiper滑动插件，利用Vue.nextTick来处理swiper的实例化

当我们在使用一些插件的时候，经常需要在dom更新完成后进行必要操作，但是在vue中提供的api只有updated钩子函数，而在这个函数里，任意数据的变化导致的dom更新完成都会触发，所以很可能会造成无关数据的影响，而使用监听的话只能监听到数据的变化，此时dom还没有更新，我们只能强行使用setTimeout来处理

推荐使用nextTick全局方法：
在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。


getBillBoards(){
    axios.get(this.$root.config.host+'mz/v4/api/billboard/home',{
        params:{__t:Date.now()}
    }).then(res => {
        console.log(res.data.data.billboards)
        this.billboards = res.data.data.billboards

        //当数据更新，dom循环完成后，执行回调
        Vue.nextTick(function () {
            new Swiper('.app-home-banner',{
                loop:true
            }) 
        })
    })
}

5.经分析，home的电影有正在热映和即将上映，初步划分四个组件，热映电影盒子、热映item，即将上映电影盒子、上映item，但是我们研究后发现，并不需要4个，一个盒子和一个item就够了，可以采取传入不同参数去实现不同效果的方式来做

在其中，调取卖座接口的时候有跨域问题出现，使用webpack-dev-server的proxy功能处理
下载axios
在入口文件main.js中 vue的原型上挂载
Vue.prototype.$http = axios;(this.$http = axios)
在使用的时候(axios.get = this.$http.get)
    1. 将请求地址改为本地开发服务的域下，并加入暗号(可以将端口前的路径全部删掉)
    2. 在config/index.js->dev->proxyTable中进行暗号的匹配
6. 在使用item的时候。，获取到的上映时间是一个时间戳，但是需要显示的是月日格式，在这里采取了过滤器的方式来实现。
    
7. 搭建了路由跳转，做了重定向和默认路由

8. 解决一个问题：点击navList里的li之后，路由跳转了，但是导航和遮罩没有回去
    一开始是这样想的，点谁给谁绑事件，去执行Header的 closeNav方法，但是有一个问题，不好维护，因为后期我们可能会添加按钮来让他点击之后遮罩导航回去，到时候还得再绑事件，

    所以，我们分析了，其实不是点击的时候导航消失，而是在路由切换的时候导航消失,所以我们准备采用路由钩子来处理，这样的话，以后不管是谁，只要点击后有路由跳转，肯定导航就能消失

    因为，没有固定需要跳转到哪里去，所以只能使用全局路由钩子,于是在router/index.js中给router绑定钩子,这里 写全局钩子的话能监听，但是无法更改Header的数据
    import Home from "xxx"    Home.isNavShow......  Home是一个构造器，页面中的是一个实例，无法更改Header实例的数据

发布订阅是一种设计模式：(非父子组件的通信使用事件总线，在一个地方绑定事件，在另一个地方触发，基于事件总线能绑事件)

    1. 使用event bus，注意的是bus不是非要在组件间通信才能用，模块通信也行，因为本身就是基于事件绑定和事件触发的机制

        在header中给bus绑定事件，触发的时候会让导航回去，在router/index.js中的路由钩子里去触发这个事件
    
    2. 直接在Header组件中引入router，给router绑定全局路由钩子
    
实现非父组件或者模块之间的通信用事件总线(类似发布订阅模式)，
就是一个空实例
import Vue from 'vue'
创建一个 const bus = new Vue()
给空实例绑定事件
bus.$on('事件名称',执行逻辑)
事件触发调用bus.$emit('事件名称')

