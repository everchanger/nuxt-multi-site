<template>
  <div class="container">
    <Nuxt />
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('Layout mounted!', this)
    },
    head() {
      return {
        title: `PoC - ${this.$store.state.destination}`,
        link: [
          { rel: 'stylesheet', href: `/config/${this.$store.state.destination}/variables.css`}
        ] 
      }
    }
  }
</script>