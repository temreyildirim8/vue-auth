<template>
  <div class="tabs">
    <div class="tabs-header">
      <div :class="{ 'login-active': activeTab === 'login' }" @click="activeTab = 'login'">Giriş Yap
      </div>
      <div :class="{ 'register-active': activeTab === 'register' }" @click="activeTab = 'register'">Üye Ol</div>
    </div>
    <div class="tabs-content">
      <div v-if="activeTab === 'login'">
        <InputComp placeholder="E-posta Adresiniz" textColor="#1c1f28" />
        <InputComp placeholder="Parolaniz" textColor="#1c1f28" />
        <ButtonComp bgColor="#8ba631"> Giriş Yap </ButtonComp>
      </div>
      <div v-if="activeTab === 'register'">
        <InputComp placeholder="Adiniz Soyadiniz" textColor="#1c1f28" />
        <InputComp placeholder="E-posta Adresiniz" textColor="#1c1f28" />
        <InputComp placeholder="Parolaniz" textColor="#1c1f28" />
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
  padding: 30px;
  width: 100%;

  .tabs-header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    >div {
      width: 50%;
      padding-bottom: 10px;
      font-weight: bold;
      cursor: pointer;
      text-align: center;

      &.login-active {
        color: #8ba631;
        border-bottom: #8ba631 1px solid;
      }

      &.register-active {
        color: #e84363;
        border-bottom: #e84363 1px solid;
      }
    }
  }

  .tabs-content {
    margin-top: 20px;
  }
}
</style>
