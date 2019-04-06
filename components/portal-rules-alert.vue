<template>
	<v-dialog v-model="dialog" persistent max-width="440">
		<v-card>
			<v-card-title class="title">
				<v-icon style="margin-right:10px;">
					error_outline
				</v-icon>
				{{ $t('rules-dialog.title') }}
				<v-spacer/>
				<v-icon style="cursor: default;" @click="accept()">
					close
				</v-icon>
			</v-card-title>
			<v-card-text style="letter-spacing: 1px;">
				{{ $t('rules-dialog.description') }}
			</v-card-text>
			<v-card-title class="subheading" style="letter-spacing: 1px;">
				<v-icon style="margin-right: 10px;">
					storage
				</v-icon>
				{{ $t('rules-dialog.cookies.title') }}
			</v-card-title>
			<v-card-text style="letter-spacing:1px;">
        		{{ $t('rules-dialog.cookies.description') }}
      		</v-card-text>
			<v-card-title class="subheading" style="letter-spacing:1px;">
        		<v-icon style="margin-right:10px;">
					format_list_numbered
				</v-icon>
        		{{ $t('rules-dialog.agreements.title') }}
      		</v-card-title>
			<v-card-text style="letter-spacing:1px;">
        		{{ $t('rules-dialog.agreements.description') }}
        		<a :href="link()" target="_blank">
          			https://yourcity.io/agreements
        		</a>
      		</v-card-text>
			<v-card-title class="subheading" style="letter-spacing:1px;">
        		<v-icon style="margin-right:10px;">
					location_on
				</v-icon>
        		{{ $t('rules-dialog.location.title') }}
      		</v-card-title>
			<v-card-text style="letter-spacing:1px;">
        		{{ $t('rules-dialog.location.description') }}
      		</v-card-text>
			<v-card-actions>
				<v-spacer/>
				<v-btn small color="green darken-1" flat class="accept-button" @click="accept()">
					{{ $t('rules-dialog.accept-button') }}
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			dialog: false,
		}
	},
	created() {
		localStorage.getItem('confirmation') ? this.dialog = false : this.dialog = true
	},
	methods: {
		accept() {
			localStorage.setItem('confirmation', true);
      		this.dialog = false;
		},
		link() {
			return `/${this.$i18n.locale}/agreements`;
		}
	}
}
</script>

<style lang="scss" scoped>
.accept-button
{
	font-size: 12px;
  	font-weight: 700;
  	letter-spacing: 1px;
  	background-color: rgba(67, 159, 71, 0.16);
  	padding-left: 8px;
  	padding-right: 8px;
}
</style>

