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
        Kategorie
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
        >
          przejdź do wyszukiwania
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
          name: 'kluby',
        },
        {
          id: 'barAndPub',
          icon: 'local_bar',
          name: 'bary i puby',
        },
        {
          id: 'cafeteria',
          icon: 'local_cafe',
          name: 'kawiarnie',
        },
        {
          id: 'food',
          icon: 'restaurant',
          name: 'jedzenie',
        },
        {
          id: 'entertainment',
          icon: 'star',
          name: 'rozrywka',
        },
        {
          id: 'event',
          icon: 'date_range',
          name: 'wydarzenia',
        },
        {
          id: 'shop',
          icon: 'shopping_cart',
          name: 'sklepy',
        },
        {
          id: 'service',
          icon: 'settings',
          name: 'usługi',
        },
        {
          id: 'tourism',
          icon: 'directions_walk',
          name: 'turystyka',
        },
        {
          id: 'sport',
          icon: 'pool',
          name: 'sport',
        },
        {
          id: 'other',
          icon: 'clear_all',
          name: 'inne',
        },
        {
          id: 'information',
          icon: 'info_outline',
          name: 'informacje',
        },
        {
          id: 'education',
          icon: 'school',
          name: 'edukacja',
        },
        {
          id: 'health',
          icon: 'local_hospital',
          name: 'zdrowie',
        },
        {
          id: 'hotel',
          icon: 'local_hotel',
          name: 'hotel',
        },
        {
          id: 'travel',
          icon: 'directions',
          name: 'podróż',
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
