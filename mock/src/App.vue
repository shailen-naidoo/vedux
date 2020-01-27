<template>
  <div>
    <div v-for="(x) in 1" :key="x" style="display: flex; justify-content: space-between;">
      <Viewer v-for="(i) in 50" :key="i" />
    </div>
    <input :value="text" @input="updateText($event.target.value)" />
  </div>
</template>

<script>
import Viewer from './components/Viewer'
import { AppViewModel as ViewModel } from './model'

export default {
  components: {
    Viewer
  },
  data() {
    return {

    }
  },
  ViewModel, 
  // computed: {
  //   text: {
  //     get() {
  //       return this.$store.getState('text')
  //     },
  //     set(e) {
  //       this.$store.commit(() => ({ text: e }))
  //     }
  //   }
  // }
}
</script>