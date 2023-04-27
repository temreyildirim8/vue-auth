<template>
  <div class="input">
    <input :type="type" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.input {
  input {
    display: block;
    width: 100%;
    padding: 15px 0;
    margin-top: 10px;
    background-color: #1c1f28;
    border: none;
    border-bottom: 1px #ffffff solid;
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
    font-family: inherit;
    outline: none;

    &::placeholder {
      color: #ffffff;
      font-weight: light;
    }
  }
}
</style>
