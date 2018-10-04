<template>
  <v-flex lg12>
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
          Popularne tagi
        </div>
      </v-flex>
      <v-flex
        v-for="section in proposedTags"
        :key="section.id"
        xs12
        sm12
        md12
        lg12
      >
        <v-layout
          row
          wrap
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <v-flex
            xs12
            sm10
            offset-sm1
            md8
            offset-md2
            lg8
            offset-lg2
          >
            <div
              data-aos="fade"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div
                class="tag-section-title"
              >
                {{ section.section_name }}
              </div>
            </div>
          </v-flex>
          <v-flex
            xs12
            sm10
            offset-sm1
            md8
            offset-md2
            lg8
            offset-lg2
            class="tags-section"
          >
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
                <v-chip
                  :class="section.color_hover_class"
                  outline
                  class="tag"
                >
                  {{ tag }}
                </v-chip>
              </router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      proposedTags: [
        {
          section_name: 'JEDZENIE',
          tags: [
            'lody',
            'restauracja',
            'pizza',
            'kawiarnia',
            'food',
            'food truck',
            'vegan',
            'sushi',
          ],
          color_hover_class: 'color-hover-food',
        },
        {
          section_name: 'ZAKUPY',
          tags: [
            'fashion',
            'galeria',
            'centrum',
            'centrum handlowe',
            'sklep',
          ],
          color_hover_class: 'color-hover-shop',
        },
        {
          section_name: 'ROZRYWKA',
          tags: [
            'kino',
            'party',
            'escape room',
            'club',
            'fun',
          ],
          color_hover_class: 'color-hover-entertainment',
        },
        {
          section_name: 'SPORT',
          tags: [
            'siłownia',
            'basen',
            'sport',
            'fitness',
          ],
          color_hover_class: 'color-hover-sport',
        },
        {
          section_name: 'BIZNES',
          tags: [
            'startup',
            'office',
            'business',
            'job',
            'service',
            'work',
          ],
          color_hover_class: 'color-hover-business',
        },
        {
          section_name: 'INNE',
          tags: [
            'apartamenty',
            'bootcamp',
            'design',
            'apteka',
            'tourist',
            'beauty',
            'culture',
          ],
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
