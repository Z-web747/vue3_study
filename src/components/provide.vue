<template>
  <div>
    注入的值为{{message}}
    全局注入{{flag}}
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'myProvide',
  setup() {
    const message = inject('title')
    const flag = inject('flag')
    return {
      message,
      flag
    }
  }
}
</script>