<template>
  <div class="tabs">
    <div class="tabs-header">
      <div :class="{ 'login-active': activeTab === 'login' }" @click="activeTab = 'login'">Giriş Yap
      </div>
      <div :class="{ 'register-active': activeTab === 'register' }" @click="activeTab = 'register'">Üye Ol</div>
    </div>
    <div class="tabs-content">
      <div v-if="activeTab === 'login'">
        <InputComp type="email" placeholder="E-posta Adresiniz" textColor="#1c1f28" />
        <InputComp type="password" placeholder="Parolaniz" textColor="#1c1f28" />
        <ButtonComp bgColor="#8ba631"> Giriş Yap </ButtonComp>
      </div>
      <div v-if="activeTab === 'register'">
        <InputComp type="text" placeholder="Adiniz Soyadiniz" textColor="#1c1f28" />
        <InputComp type="email" placeholder="E-posta Adresiniz" textColor="#1c1f28" />
        <InputComp type="password" placeholder="Parolaniz" textColor="#1c1f28" />
        <ButtonComp bgColor="#e84363"> Üye Ol </ButtonComp>
      </div>
    </div>
  </div>
</template>
<script>
import InputComp from './InputComp.vue'
import ButtonComp from './ButtonComp.vue'

export default {
  components: {
    InputComp,
    ButtonComp
  },
  data() {
    return {
      activeTab: 'login'
    }
  }
}
</script>
  
<style lang="scss">
.tabs {
  background-color: #1c1f28;
  padding: 20px;
  width: 100%;

  .tabs-header {
    display: flex;

    >div {
      width: 50%;
      padding-bottom: 10px;
      font-weight: normal;
      font-size: 16px;
      cursor: pointer;
      text-align: center;
      color: #4c4f56;
      border-bottom: #4c4f56 1px solid;

      &.login-active {
        color: #8ba631;
        border-bottom: #8ba631 3px solid;
      }

      &.register-active {
        color: #e84363;
        border-bottom: #e84363 3px solid;
      }
    }
  }

  .tabs-content {}
}
</style>
