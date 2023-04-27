<template>
  <div class="auth">
    <CardComp>
      <AuthTabs />
    </CardComp>
  </div>
</template>

<script>
import CardComp from '../card/CardComp.vue'
import AuthTabs from './AuthTabs.vue'

export default {
  components: {
    AuthTabs,
    CardComp
  }
}
</script>

<style>
.auth {
}
</style>
