<template>
  <div>子组件</div>
  <p>接收到父组件传递的值:{{title}}</p>
  <input type="text" v-model="childTitle" @input="$emit('child-input', childTitle)">
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from "vue"

export default defineComponent({
  name: 'myChild',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['child-input'],
  setup() {
    const msg = ref('子组件')
    const state = reactive({
      childTitle: ''
    })
    const getMsg = () => {
      console.log(msg.value)
    }
    return {
      msg,
      getMsg,
      ...toRefs(state)
    }
  },
})
</script>
