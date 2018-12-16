<template>
  <router-link
    :to="'/' + $i18n.locale"
    class="logo-link"
  >
    <div
      :style="{ fontSize: logoSize + 'px'}"
      class="logo-section"
    >
      <div class="your">
        your
      </div>
      <div
        :style="{ marginLeft: margin + 'px' }"
        class="city"
      >
        city
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    logoSize: {
      type: Number,
      default: 24,
    },
    margin: {
      type: Number,
      default: -6,
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-link
{
  margin-top: 0px;
  text-decoration: none;
}
.logo-section
{
  display: inline;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
}
.your
{
  display:inline;
}
.city
{
  display: inline;
  color: blue;
}
</style>
