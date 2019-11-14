<template>
  <div>
    <div v-for="(x) in new Array(1)" :key="x" style="display: flex; justify-content: space-between;">
      <Viewer v-for="(i) in new Array(50)" :key="i" />
    </div>
    <input v-model="text" />
  </div>
</template>

<script>
import Viewer from './components/Viewer'

export default {
  components: {
    Viewer
  },
  computed: {
    text: {
      get() {
        return this.$store.state.state.text
      },
      set(e) {
        this.$store.commit(() => ({ text: e }))
      }
    }
  }
}
</script>