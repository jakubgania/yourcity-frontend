<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs10
      offset-xs1
      lg11
      offset-lg1
    >
      <div
        class="title-section"
        data-aos="fade-right"
        data-aos-delay="240"
        data-aos-once="true"
      >
        {{ $t('home.categories.title_section') }}
      </div>
    </v-flex>
    <v-flex
      v-for="(category, index) in category_tiles"
      :key="category.id"
      xs6
      lg3
    >
      <div
        :data-aos-delay="index * 100"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <router-link
          :to="$i18n.path(`search?category=${category.id}`)"
          class="link-section"
        >
          <div class="category-tiles">
            <v-icon class="category-icon">{{ category.icon }}</v-icon>
            {{ category.name }}
          </div>
        </router-link>
      </div>
    </v-flex>
    <v-flex
      xs10
      offset-xs1
      sm8
      offset-sm2
      lg4
      offset-lg4
    >
      <router-link
        :to="$i18n.path('search')"
        class="link-section"
      >
        <v-btn
          block
          large
          depressed
          class="button"
          data-aos="fade-right"
          data-aos-delay="240"
          data-aos-once="true"
        >
          {{ $t('home.categories.search_button') }}
          <v-icon
            right
            dark
          >
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      category_tiles: [
        {
          id: 'club',
          icon: 'music_note',
          name: this.$t('home.categories.clubs'),
        },
        {
          id: 'barAndPub',
          icon: 'local_bar',
          name: this.$t('home.categories.bar_and_pub'),
        },
        {
          id: 'cafeteria',
          icon: 'local_cafe',
          name: this.$t('home.categories.coffeehouses'),
        },
        {
          id: 'food',
          icon: 'restaurant',
          name: this.$t('home.categories.food'),
        },
        {
          id: 'entertainment',
          icon: 'star',
          name: this.$t('home.categories.entertainment'),
        },
        {
          id: 'event',
          icon: 'date_range',
          name: this.$t('home.categories.event'),
        },
        {
          id: 'shop',
          icon: 'shopping_cart',
          name: this.$t('home.categories.shop'),
        },
        {
          id: 'service',
          icon: 'settings',
          name: this.$t('home.categories.service'),
        },
        {
          id: 'tourism',
          icon: 'directions_walk',
          name: this.$t('home.categories.tourism'),
        },
        {
          id: 'sport',
          icon: 'pool',
          name: this.$t('home.categories.sport'),
        },
        {
          id: 'other',
          icon: 'clear_all',
          name: this.$t('home.categories.other'),
        },
        {
          id: 'information',
          icon: 'info_outline',
          name: this.$t('home.categories.information'),
        },
        {
          id: 'education',
          icon: 'school',
          name: this.$t('home.categories.education'),
        },
        {
          id: 'health',
          icon: 'local_hospital',
          name: this.$t('home.categories.health'),
        },
        {
          id: 'hotel',
          icon: 'local_hotel',
          name: this.$t('home.categories.hotel'),
        },
        {
          id: 'travel',
          icon: 'directions',
          name: this.$t('home.categories.travel'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/home/categories/lg.scss';
@import '../../assets/scss/home/categories/xs.scss';
</style>
