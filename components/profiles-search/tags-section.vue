<template>
	<transition name="fade">
		<div v-if="showTagSection && proposedTags.length > 0">
			<v-flex lg12 xl10 offset-xl1>
				<div class="title-section">
					{{ `${$t('profiles-search.tags.title')} - ${proposedTags.length}` }}
				</div>
			</v-flex>
			<div class="tag-section">
				<v-flex xs12 lg12 xl10 offset-xl1>
					<v-flex v-for="index in numberOfTags" :key="index.id" xs12 lg12 style="display: inline;">
						<v-chip outline class="tag-chip" @click.native="$emit('searchByTag', proposedTags[index - 1])">
							{{ proposedTags[index - 1] }}
						</v-chip>
					</v-flex>
				</v-flex>
			</div>
			<v-flex v-if="proposedTags.length > numberOfTags" lg4 offset-lg4 md6 offset-md3 sm6 offset-sm3 xs10 offset-xs1>
				<v-btn large block depressed color="grey lighten-5" class="more-tags-button" @click="showMoreTagsDialog(true)">
					{{ $t('profiles-search.tags.button') }}
					<v-icon class="icon">
						bubble_chart
					</v-icon>
				</v-btn>

				<v-dialog v-model="showMoreTagsDialogModel" max-width="600" style="z-index: 800;" @keydown.esc="showMoreTagsDialog(false)">
					<v-card>
						<div class="top-title-section">
							<v-icon class="icon-info">
								info_outline
							</v-icon>
							{{ $t('profiles-search.tags.title') }}
							<v-icon class="icon-close" @click="showMoreTagsDialog(false)">
								close
							</v-icon>
						</div>
						<v-card-text>
							<div v-for="tag in proposedTags" :key="tag.id" style="display: inline;">
								<v-chip outline class="tag-chip" @click.native="selectTag(tag)">
									{{ tag }}
								</v-chip>
							</div>
						</v-card-text>
						<v-card-actions class="bottom-section">
							<v-spacer/>
							<v-btn color="blue accent-3" flat style="font-size: 12px;letter-spacing: 2px;" @click.native="showMoreTagsDialog(false)">
								{{ $t('profiles-search.tags.close') }}
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
			</v-flex>

			<v-flex xs12 sm12 md12 lg12 xl10 offset-xl1 style="border-top: 2px solid #ced8e2;"/>

		</div>
	</transition>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			showMoreTagsDialogModel: false,
		}
	},
	computed: {
		...mapGetters('searchProfiles', [
			'city',
			'showTagSection',
			'proposedTags',
			'numberOfTags'
		])
	},
	methods: {
		...mapActions('searchProfiles', [
			'updateShowTagSection',
		]),
		showMoreTagsDialog(value) {
			this.showMoreTagsDialogModel = value
		},
		selectTag(tag) {
			this.$emit('searchByTag', tag)
			this.showMoreTagsDialogModel(false)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/profiles-search/tags/lg.scss';
	@import '../../assets/scss/profiles-search/tags/xs.scss';
</style>


