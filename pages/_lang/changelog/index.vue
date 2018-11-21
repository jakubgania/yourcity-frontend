<!-- eslint-disable vue/max-attributes-per-line -->
<template>
  <v-layout row wrap class="container-changelog">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12>
        <div class="title-page">
          Changelog
        </div>
      </v-flex>

      <v-flex
        v-for="post in posts"
        :key="post.id"
        xs11 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4
        class="message-item"
      >
        <span class="line-marker"/>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 lg10 offset-lg1>
            <!-- <v-card> -->
            <div class="" style="background-color:#f2f2f2;">
              <div class="card-information-section">
                <div class="information">
                  <span class="date">
                    {{ post.date }}
                  </span>
                  <span class="time">
                    {{ post.time }}
                  </span>
                  <span class="message-counter">
                    {{ post.post_number_id }}
                  </span>
                </div>
              </div>
              <div class="message">
                <span class="content-text" v-html="post.message">
                  {{ post.message }}
                </span>
              </div>
            </div>
            <!-- </v-card> -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-flex xs12 sm12 md12 lg12 style="padding-bottom:120px;">
      <v-layout row wrap>
        <v-flex
          v-if="showPagingButton" xs10 offset-xs1 sm4 offset-sm4 md4 offset-md4 lg2 offset-lg5
        >
          <v-btn
            :loading="showPagingButtonLoader"
            :disabled="showPagingButtonLoader"
            class="paging-button"
            large
            block
            @click="getMorePosts(pagingURL)"
          >
            POKAŻ WIĘCEJ
            <v-icon right dark>cached</v-icon>
          </v-btn>
        </v-flex>
        <transition name="fade">
          <v-flex v-if="networkErrorPaging" xs10 offset-xs1 lg4 offset-lg4>
            <v-alert
              :value="true"
              outline
              type="error"
            >
              Network connection error.
            </v-alert>
          </v-flex>
        </transition>
      </v-layout>
    </v-flex>

    <!-- <network-connection-error-alert-component
      :show-error-connection-alert="showErrorConnectionAlert"
      :margin="100"
    /> -->

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NetworkConnectionErrorAlertComponent from '../../../components/network-connection-error-alert.vue';

export default {
  components: {
    'network-connection-error-alert-component': NetworkConnectionErrorAlertComponent,
  },
  computed: {
    ...mapGetters('changelog', [
      'posts',
      'pagingURL',
      'showPagingButton',
      'showPagingButtonLoader',
      'networkError',
      'networkErrorPaging',
    ]),
  },
  created() {
    this.$store.dispatch('changelog/getPosts');
  },
  methods: {
    ...mapActions('changelog', [
      'getPosts',
      'getPagingPosts',
    ]),
    getMorePosts(pagingURL) {
      this.$store.dispatch('changelog/getPagingPosts', pagingURL);
    },
  },
  head() {
    return {
      title: this.$t('changelog.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './assets/scss/changelog/lg.scss';
</style>
