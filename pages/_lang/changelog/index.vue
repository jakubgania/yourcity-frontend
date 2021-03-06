<template>
  <v-layout row wrap class="container-changelog">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg12>
        <div class="title-page">
          {{ $t('changelog.title') }}
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
            <div style="background-color:#ffffff;">
              <div class="card-information-section">
                <div class="information">
                  <span class="time">
                    {{ post.time }}
                  </span>
                  <span class="date">
                    {{ post.date }}
                  </span>
                  <span class="message-counter">
                    {{ post.post_number_id }}
                  </span>
                </div>
              </div>
              <div class="message">
                <div class="content-text" v-html="post.message">
                  {{ post.message }}
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-flex xs12 sm12 md12 lg12 style="padding-bottom:120px;">
      <v-layout row wrap>
        <v-flex
          v-if="showPagingButton"
          xs12
          sm8
          offset-sm2
          md6
          offset-md3
          lg4
          offset-lg4
          class="paging-button-section"
        >
          <v-btn
            :loading="showPagingButtonLoader"
            :disabled="showPagingButtonLoader"
            class="paging-button"
            large
            block
            @click="getMorePosts(pagingURL)"
          >
            {{ $t('changelog.paging-button') }}
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
              {{ $t('changelog.network-connection-error') }}
            </v-alert>
          </v-flex>
        </transition>

        <network-connection-error-alert-component
          :show-error-connection-alert="networkError"
          :margin="100"
        />
      </v-layout>
    </v-flex>

    <v-flex
      v-if="showPageLoader"
      xs12 sm12 md12 lg12 style="min-height:calc(100vh - 264px);text-align:center;"
    >
      <v-progress-circular :size="50" indeterminate style="color:#252bfc;margin-top:80px;"/>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NetworkConnectionErrorAlertComponent from '../../../components/network-connection-error-alert.vue';

export default {
  scrollToTop: true,
  components: {
    'network-connection-error-alert-component': NetworkConnectionErrorAlertComponent,
  },
  computed: {
    ...mapGetters('changelog', [
      'posts',
      'pagingURL',
      'showPageLoader',
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
      htmlAttrs: {
        lang: this.$t('html.language'),
      },
      title: this.$t('changelog.head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('changelog.head.description'),
        },
        {
          name: 'keywords',
          content: this.$t('changelog.head.keywords'),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './assets/scss/changelog/lg.scss';
</style>
