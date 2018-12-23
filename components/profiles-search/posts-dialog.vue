<template>
  <v-dialog
    v-model="showProfileDetailsDialog"
    :fullscreen="this.$vuetify.breakpoint.name == 'xs'"
    max-width="600"
    @keydown.esc="closeProfileDetailsDialog()"
  >
    <div class="">
      <div class="posts-header">
        <v-icon class="comment-icon">insert_comment</v-icon>
        <div class="text-title">
          Posty
        </div>
        <v-icon class="close-icon" @click="closeProfileDetailsDialog()">close</v-icon>
      </div>
      <div v-if="profilePosts.length > 0" class="post-list-section">
        <div
          v-for="post in profilePosts"
          :key="post.id"
          class=""
          style="border-top: 1px solid #616161;"
        >
          <v-card-text class="post-created-time">
            {{ calculateDateTimeUTC(post.created_time) }}
          </v-card-text>
          <v-card-text v-if="post.message" class="post-message">
            {{ post.message }}
          </v-card-text>
          <v-card-text v-if="post.story" style="letter-spacing:1px;">
            {{ post.story }}
          </v-card-text>
          <v-card-text v-if="post.permalink_url">
            <a :href="post.permalink_url" target="_blank" class="link">
              Zobacz wpis na Facebooku
            </a>
          </v-card-text>
        </div>
      </div>

      <div v-if="profilePosts.length == 0" style="padding-top:44px;">
        <v-card-text class="no-posts-alert">
          Brak postów
        </v-card-text>
      </div>

      <div class="close-button-section">
        <v-spacer/>
        <v-btn
          color="blue accent-3"
          style="float:right;font-size:12px;letter-spacing:2px;"
          flat
          @click.native="closeProfileDetailsDialog()"
        >
          zamknij
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    profilePosts: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      // postLoaderButton: false,
    };
  },
  computed: {
    ...mapGetters('searchProfiles', [
      'showProfileDetailsDialog',
    ]),
    showProfileDetailsDialog: {
      get() {
        return this.$store.state.searchProfiles.showProfileDetailsDialog;
      },
      set(value) {
        this.$store.dispatch('searchProfiles/updateShowProfileDetailsDialog', value);
      },
    },
  },
  methods: {
    calculateDateTimeUTC(value) {
      return new Date(Date.parse(value)).toUTCString();
    },
    closeProfileDetailsDialog() {
      this.$store.dispatch('searchProfiles/updateShowProfileDetailsDialog', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/profiles-search/posts-dialog/posts-dialog.scss';
</style>
