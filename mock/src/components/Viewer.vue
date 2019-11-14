<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  computed: {
    text() {
      return this.$store.getState('text')
    }
  }
}
</script>