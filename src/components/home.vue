<template>
  <div class="wraper">
    <div class="menu">
      <span v-for="(item, index) in menuList" :key="item.id" @click="changeMenu(index)">
        {{item.name}}
      </span>
    </div>
    <div class="content">
      <div
        class="container"
        ref="contentRef"
      >
        <div class="item-content" style="background: red;">1</div>
        <div class="item-content" style="background: green;">2</div>
        <div class="item-content" style="background: yellow;">3</div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, ref } from 'vue'

export default {
  name: 'myHome',
  setup(){
    const menuList = [
      {
        name: '学习',
        id: 1
      },
      {
        name: '工作',
        id: 2
      },
      {
        name: '生活',
        id: 3
      }
    ]
    let curIndex = ref(0)
    let computedStyle = reactive({})
    const contentRef = ref()
    const changeMenu = (index) => {
      console.log(index);
      const transformXdis = contentRef.value.children[index].offsetWidth
      contentRef.value.style.transform = `translateX(-${index * transformXdis}px)` 
      curIndex.value = index
    }
   
    onMounted(() => {
      let startX = 0
      let distance = 0
      document.addEventListener('touchstart', function(startEvent){
        startX = startEvent.touches[0].pageX
      })
      document.addEventListener('touchmove', function(moveEvent) {
          const {pageX: endX} = moveEvent.touches[0]
          distance = endX - startX
      })
      document.addEventListener('touchend', function() {
          if(distance>0){
            if(curIndex.value>0){
              // 右滑
              changeMenu(--curIndex.value)
            }
            
          }else{
             if(curIndex.value <2){
                // 左滑
                changeMenu(++curIndex.value)
             }
            
          }
        })
    })
    return {
      menuList,
      computedStyle,
      contentRef,
      changeMenu,
      curIndex
    }

  }
}
</script>
<style scoped>
.wraper{
  height: 100vh;
  width: 100%;
}
  .menu{
    width: 100%;
    display: flex;
  }
  .menu span{
    flex: 1;
    text-align: center;
  }
  .content{
    width: 100%;
    overflow-x: hidden;
    display: flex;
    transition: all .5s ease;
    margin-top: 10px;
  }
  .container{
    display: flex;
    width: 100%;
    transition: all .5s ease;
  }
  .item-content{
    width: 100%;
    flex-shrink: 0;
    opacity: .1;
  }
</style>