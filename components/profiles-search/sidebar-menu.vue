<template>
  <div class="container-menu">
    <div class="section-menu">
      <ul class="ul-section">
        <li
          v-for="category in categoriesMenuItems"
          :key="category.id"
          class="li-menu"
        >
          <v-icon class="icon">{{ category.icon }}</v-icon>
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import categoriesMenuItems from '../../json/categories-menu-items.json';

export default {
  data() {
    return {
      categoriesMenuItems: categoriesMenuItems.categories,
    };
  },
  computed: {
  //
  },
  created() {
  //
  },
  methods: {
  //
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/profiles-search/sidebar-menu.scss';
</style>
