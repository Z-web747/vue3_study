<template>
  <!-- <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"> -->
  <input type="text" v-model="modelValues">
</template>
<script>
import { computed } from 'vue'
export default {
  name: 'myModel',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['update:title'],
  setup(props,{emit}){
    console.log(props);
    const modelValues = computed({
      get(){
        return props.title
      },
      set(val){
        emit('update:title',val)
      }
    })
    return {
      modelValues
    }
  }
}
</script>