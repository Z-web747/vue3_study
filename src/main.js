import { createApp } from 'vue'
import App from './App.vue'
import HTTP from './api'
import mitt from 'mitt'
import 'animate.css';
import flag from './plugins/index'
const app = createApp(App)
app.config.globalProperties.$Http = HTTP
app.config.globalProperties.$Bus = mitt
app.directive('animate', {
  mounted(el){
    console.dir(el);
    let targetOffsetTop = el.offsetTop
      window.addEventListener('scroll', function(){
        if(targetOffsetTop + 10 < window.innerHeight+document.documentElement.scrollTop){
          el.className = 'animate__animated animate__fadeInUp'
        }else{
          el.className = ''
        }
      })
  }
})
console.log('第一，A次提交')
app.use(flag)
app.provide('flag','flag')
app.mount('#app')

