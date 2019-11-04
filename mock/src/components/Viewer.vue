<template>
  <p @click="updateText">{{ $store.state.text }}</p>
</template>

<script>
export default {
  methods: {
    updateText() {
      this.$store.commit(() => ({ text: null }))
    }
  }
}
</script>