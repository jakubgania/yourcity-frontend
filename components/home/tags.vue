<template>
  <v-flex lg12>
    <v-layout row wrap>

      <title-section-component :title="$t('home.popular_tags.title_section')"/>

      <v-flex
        v-for="section in proposedTags"
        :key="section.id"
        xs12
        sm12
        md12
        lg12
        xl8
        offset-xl2
      >
        <v-layout row wrap data-aos="fade-down" data-aos-delay="200" data-aos-once="true">
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg8 offset-lg2>
            <div
              data-aos="fade"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div class="tag-section-title">
                {{ section.section_name }}
              </div>
            </div>
          </v-flex>
          <v-flex xs12 sm10 offset-sm1 md8 offset-md2 lg8 offset-lg2 class="tags-section">
            <div
              v-for="tag in section.tags"
              :key="tag.id"
              class="tags-loop"
              data-aos="fade"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <router-link
                :to="$i18n.path(`search?city=&query=${checkWhiteSpace(tag)}`)"
                class="tag-router-link"
              >
                <v-chip :class="section.color_hover_class" outline class="tag">
                  {{ tag }}
                </v-chip>
              </router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>

      <button-section-component
        :route-path="$i18n.path('search')"
        :button-title="$t('home.popular_tags.search_button')"
      />

    </v-layout>
  </v-flex>
</template>

<script>
import TitleComponent from './title-section.vue';
import ButtonComponent from './button-section.vue';

export default {
  components: {
    'title-section-component': TitleComponent,
    'button-section-component': ButtonComponent,
  },
  data() {
    return {
      proposedTags: [
        {
          section_name: this.$t('home.popular_tags.food.title'),
          tags: this.$t('home.popular_tags.food.tags'),
          color_hover_class: 'color-hover-food',
        },
        {
          section_name: this.$t('home.popular_tags.shop.title'),
          tags: this.$t('home.popular_tags.shop.tags'),
          color_hover_class: 'color-hover-shop',
        },
        {
          section_name: this.$t('home.popular_tags.entertainment.title'),
          tags: this.$t('home.popular_tags.entertainment.tags'),
          color_hover_class: 'color-hover-entertainment',
        },
        {
          section_name: this.$t('home.popular_tags.sport.title'),
          tags: this.$t('home.popular_tags.sport.tags'),
          color_hover_class: 'color-hover-sport',
        },
        {
          section_name: this.$t('home.popular_tags.business.title'),
          tags: this.$t('home.popular_tags.business.tags'),
          color_hover_class: 'color-hover-business',
        },
        {
          section_name: this.$t('home.popular_tags.other.title'),
          tags: this.$t('home.popular_tags.other.tags'),
          color_hover_class: 'color-hover-other',
        },
      ],
    };
  },
  methods: {
    checkWhiteSpace(tag) {
      return tag.replace(/\s/g, '+');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/home/tags/lg.scss';
  @import '../../assets/scss/home/tags/xs.scss';
</style>
