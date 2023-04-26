<template>
  <div class="input">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: {
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
    padding: 10px;
    margin: 20px 0;
    background-color: #1c1f28;
    border: none;
    border-bottom: 1px #ffffff solid;
    color: #ffffff;
    font-size: 16px;
    font-family: inherit;
    outline: none;

    &::placeholder {
      color: #ffffff;
    }
  }
}
</style>
