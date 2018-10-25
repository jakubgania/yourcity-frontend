<template>
  <router-link
    :to="'/' + $i18n.locale"
    class="logo-link"
  >
    <div
      class="logo-section"
    >
      <div style="display:inline">
        your
      </div>
      <div style="display:inline;margin-left:-6px;color:blue;">
        city
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.logo-link
{
  margin-top:0px;text-decoration:none;
}
.logo-section
{
  display: inline;
  color: #000000;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
}
</style>
