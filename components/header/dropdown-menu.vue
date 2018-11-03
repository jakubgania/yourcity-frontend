<template>
  <v-menu
    nudge-top="-38"
    nudge-right="14"
  >
    <v-btn
      slot="activator"
      icon
    >
      <v-icon>more_vert</v-icon>
    </v-btn>

    <!-- <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-tile-title
          class="list"
          @click="menu(item.action)"
        >
          <v-icon style="margin-right:14px;">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-list-tile-title>
      </v-list-tile>
    </v-list> -->

    <v-list>
      <v-list-tile class="link-section">
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          :to="`/pl` + $route.fullPath.replace(/^\/[^\/]+/, '')"
          class="link"
        >
          <v-icon style="margin-right:14px;">translate</v-icon>
          {{ $t('header.dropdown_menu.language') }}
        </nuxt-link>
        <nuxt-link
          v-if="$i18n.locale === 'pl'"
          :to="`/en` + $route.fullPath"
          class="link"
        >
          <v-icon style="margin-right:14px;">translate</v-icon>
          {{ $t('header.dropdown_menu.language') }}
        </nuxt-link>
      </v-list-tile>
    </v-list>

  </v-menu>
</template>

<script>
export default {
  data: () => ({
    // items: [
    //   { title: 'Język', icon: 'translate', action: 'language' },
    // ],
  }),
  methods: {
    // menu(action) {
    //   if (action === 'language') {
    //     //
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
.list
{
  cursor:default;
  letter-spacing: 1px;
  padding-left: 10px;
  padding-right: 10px;
}
.link-section:hover
{
  background-color: #e6e6e6;
}
.link
{
  text-decoration: none;
  letter-spacing: 1px;
}
</style>
