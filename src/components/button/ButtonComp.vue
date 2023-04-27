<template>
  <div class="button">
    <button :style="{ backgroundColor: bgColor, color: textColor }">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#8ba631'
    },
    textColor: {
      type: String,
      default: '#FFFFFF'
    }
  }
}
</script>

<style lang="scss">
.button {
  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 25px 0 0;
    background-color: #8ba631;
    border: none;
    font-size: 14px;
    font-weight: normal;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
  }
}
</style>
