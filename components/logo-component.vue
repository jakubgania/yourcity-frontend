<template>
  <router-link :to="'/' + $i18n.locale" class="logo-link">
    <img
      :style="{ marginTop: margin + 'px' }"
      :width="logoSize"
      src="logo.svg"
      alt="Yourcity logo"
      height="auto"
    >
  </router-link>
</template>

<script>
export default {
  props: {
    logoSize: {
      type: Number,
      default: 160,
    },
    margin: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-link
{
  text-decoration: none;
}
</style>
