<template>
  <div class="wraper">
    <!-- <div @click="handleClick(22, $event)" style="height:100px;width: 100px"></div>
    <input type="text" v-model="text">
    {{text}}
    <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
    {{textarea}}
    <div>checks Name{{checkNames}}</div>
    <input type="checkbox" value="tim" id="checkbox1" v-model="checkNames">
    <label for="checkbox">{{checkbox1}}</label>
    <input type="checkbox" value="jerry" id="checkbox2" v-model="checkNames">
    <label for="checkbox">{{checkbox2}}</label>
    <input type="checkbox" value="toms" id="checkbox3" v-model="checkNames">
    <label for="checkbox">{{checkbox3}}</label>
    <hr>
    <div>Picked: {{ radioCheck }}</div>
    <input type="radio" value="A" id="A" v-model="radioCheck">
    <label for="A">A</label>
    <input type="radio" value="B" id="B" v-model="radioCheck">
    <label for="B">B</label>
    <hr>
    <div>select: {{select}}</div>
    <select name="" id="" v-model="select" multiple>
      <option value="" disabled>please select</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </select>
    <hr>
    <input type="checkbox" v-model="checkBox" true-value="yes" false-value="No">
    <hr>
    <input type="text" v-model="inputValue">
    <input type="text" v-model.lazy="inputValue2">
    <input v-model.number="inputValue3">
    <hr>
    <input type="text" v-model="question">
    <p ref="quest" v-if="question">{{question}}</p>
    <button @click="person.hobby.push(person.hobby.length + '新增')">给hobby新增数据</button>
    <p v-for="item in person.hobby" :key="item">{{item}}</p> -->
    <!-- <hr>
    ref：<input type="text" ref="input">
    <p v-for="item in list" :key="item" ref="itemRefs">{{item}}</p>
    
    <HelloVue></HelloVue>
    <input type="text" v-model="title" >
    <p>接收到子组件的值为{{chilTitle}}</p>
    <Child ref="childRef" :title="title" @child-input="childInput"/>
    <hr>
    在组件上使用v-model
    <Model v-model:title="modalVALUE" @update:modelValue="onModel"/>
    <hr>
    <p>在组件上使用多个v-model</p>
    <user-name v-model:firstName="firstName" v-model:lastName="lastName"/>
    <hr>
    <p>v-model修饰符</p>
    <MyComponent v-model.capitalize="MyComponentValue"/>
    <hr>
    <p>attribute继承</p>
    <my-button class="large" style="color:red" @click="buttonClick"></my-button>
    <hr>
    <p>依赖注入</p>
    <input type="text" v-model="message">
    <provide-com/>
    <hr>
    <p>组合式函数</p> -->
    <!-- 当前鼠标位置{{x}},{{y}} -->
    <hr>
    <!-- <p>自定义指令</p> -->

    <!-- <div class="directive" v-myDirective:[list].foo.bar="'hello'">我是自定义指令</div> -->
    <hr>
    <p>响应式</p>
    <p>普通对象{{numberObj.count}}</p>
    <p>proxy:{{proxy}}</p>
    <p>obj: {{obj.count}}</p>
    <button @click="increment">{{count}}</button>
  </div>
</template>
<script>
import {  defineComponent, onMounted, reactive, ref, toRefs, watch, provide} from "vue";
// import {usemouse} from './mouse'
// import Child from "./Child.vue"
// import Model from './Model.vue'
// import userName from './userName.vue'
// import MyComponent from './MyComponent.vue'
// import myButton from './myButton.vue'
// import provideCom from './provide.vue'
export default defineComponent({
  name: 'myParent',
  components: {
    // Child,
    // Model,
    // userName,
    // MyComponent,
    // myButton,
    // provideCom
},
directives: {
  myDirective(...arg){
    console.log(arg);
  }
},
  setup(){
    const quest = ref(null)
    const itemRefs = ref([])
    const childRef = ref(null)
    const state = reactive({
      user: 'vue3',
      location: {
        lon: 120,
        lat: 60
      },
      text:'text',
      textarea: 'textarea',
      checkbox2: 'jerry',
      checkbox3:'toms',
      checkbox1: 'tim',
      checkNames: [],
      radioCheck: '',
      select: [],
      checkBox: 'No',
      inputValue: '',
      inputValue2: '',
      inputValue3: 0,
      question: '',
      obj: {
        name: 'obj',
        value: [1,2,3]
      },
      list: [1,2,3,4,5],
      title: '',
      chilTitle: '',
      modalVALUE: '',
      firstName: '',
      lastName: '',
      MyComponentValue: '',
      count: 0
    })
    const numberObj = {
      count: 0
    }
    let proxy = reactive(0)
    
    // const { x,y } = usemouse()
    watch(()=>state.question,()=>{
      console.dir(quest.value)
    },{flush: 'post'})
    watch(() => state.obj,(n,o)=>{
      console.log(n,o);
    },{deep: true})
    const person= reactive({
        name: 'VUE3',
        age: 19,
        hobby: ['唱','跳', 'rap']
      })
      
      let obj = reactive({
        count: 0
      })
      obj = reactive({count:100})
      const increment = () => {
      state.count++
      numberObj.count++
      obj.count++
      proxy++
    }
      // watch([()=>x.value, y],([n_x,o_x], [n_y,o_y])=>{
      //   console.log([n_x,o_x],[n_y,o_y]);
      // })
    // 侦听器的第一个参数:
    // 一个函数，返回一个值
    // 一个 ref
    // 一个响应式对象
    // ...或是由以上类型的值组成的数组
    watch(()=>state,(n,o) => {
      console.log(n, o)
    })
    watch(person, (n,o) => {
      console.log('监听对象', n,o);
    })
    const input = ref(null)
    const message = ref('')
    provide('title',message)
    onMounted(() => {
      // input.value.focus()
      console.log('引用', itemRefs.value);
      // console.log('子组件rfe', childRef.value.msg);
    })
    const handleClick = (q,e) => {
      console.log(q,e)
    }
    const childInput = title => {
      console.log(title);
      state.chilTitle = title
    }
    const onModel = val => {
      console.log(val);
    }
    const buttonClick = (e) => {
      console.log(e.target.innerText)
    }
    

    return {
      ...toRefs(state),
      obj,
      proxy,
      childRef,
      itemRefs,
      quest,
      person,
      input,
      handleClick,
      childInput,
      buttonClick,
      onModel,
      message,
      increment,
      numberObj
    }
  }
})
</script>
<style scoped>
.hidden{
  color: #fff;
}
.large{
  font-size: 20px!important;;
  color: red !important;;
}
</style>