<template>
  <my-parent/>
</template>

<script>
import myParent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    myParent
  }
}
</script>

<style>
*{
  padding:0;
  margin: 0;
}
</style>
