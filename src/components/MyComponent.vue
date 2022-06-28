<template>
  <div>
    <input type="text" :value="modelValue" @input="childInput">
  </div>
</template>
<script>
export default{
  name: 'MyComponent',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit}){
    const childInput = (event) => {
      let value = event.target.value
      if(props.modelModifiers.capitalize){
        value = value.toUpperCase()
      }
      emit('update:modelValue', value)
    }
    return {
      childInput
    }
  }
}
</script>