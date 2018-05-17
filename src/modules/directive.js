
import Vue from 'vue'

let handlers = {
    'scroll-hide':(el,binding,context,e)=>{
        //console.log(binding.expression)//isShow
        //console.log(el)
       //距离
       let distance = el.getAttribute('scroll-hide-distance')
        //console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>distance){
            //更改数据为true
            if(!context[binding.expression]){
                context[binding.expression]=true
            }
            return false;
        }else{
            if(context[binding.expression]){
                context[binding.expression] = false;
            }
            return false;
        }
    },
    'back-top':()=>{
        document.documentElement.scrollTop = 0
    }
}

Vue.directive('scroll-hide',{
    // bind(el,binding,vnode){
    //    // console.log(el,binding,vnode)
    //     console.log(vnode.context)//就是所在的组件

    // }
    bind(el,binding,{context}){
        //这里给window绑定scroll事件监听
        window.addEventListener('scroll',handlers[binding.name].bind(this,el,binding,context))
    },
    unbind(el,binding){
        //当时用指令的元素或者组件被销毁的时候会执行
        window.removeEventListener('scroll',handlers[binding.name])
    }

})

Vue.directive('back-top',{
    //因为使用组件的元素可能会被不断的切换，bind只执行一次，再切换显示组件的时候相当于又创建了新的元素，需要重新绑
    inserted(el,binding){
        let event_type = binding.arg||'click'
        el.addEventListener(event_type,handlers[binding.name])
    },
    unbind(el,binding){
        let event_type = binding.arg||'click'
        el.addEventListener(event_type,handlers[binding.name])
    }
})