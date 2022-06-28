<template>
    <div class="my-button">自定义按钮</div>
    <div class="my-button" v-bind="$attrs">自定义按钮2</div>
</template>
<script>
export default{
  setup(props, {attrs}){
    console.log(attrs);
  }
}
</script>