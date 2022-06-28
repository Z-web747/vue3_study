import {ref, onMounted} from 'vue'
export function usemouse() {
  const x = ref(0)
  const y = ref(0)
  onMounted(() => {
    window.addEventListener('mousemove', function(e){
      const { pageX, pageY } = e
      x.value = pageX
      y.value = pageY
    })
  })
  return {x,y}
}