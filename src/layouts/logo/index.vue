<template>
  <div class="logo">
    <img src="~@/assets/logo.png" alt="">
    <h2 v-show="!collapsed" class="title">One Piece</h2>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    height: 25px;
    margin-right: 8px;
  }

  .title {
    color: white;
    margin-bottom: 0;
  }
}
</style>
