<template>
  <div>
    firstName：<input type="text" :value="firstName" @input="$emit('update:firstName', $event.target.value)">
  </div>
  <div>
    firstName：<input type="text" :value="lastName" @input="$emit('update:lastName', $event.target.value)">
  </div>
</template>
<script>
export default {
  name: 'userName',
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
  },
  emits: ['update:firstName', 'update:lastName'],
  setup(){
  }
}
</script>