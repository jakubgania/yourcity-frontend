<template>
	<v-app>
		<header-component/>

		<v-content style="padding-top:64px;">
			<v-container fluid class="container">
				<nuxt/>
			</v-container>
		</v-content>

		<div v-if="displayFooter()">
			<footer-component/>
		</div>

		<no-ssr>
			<portal-rules-alert-component/>
		</no-ssr>

	</v-app>
</template>

<script>
import HeaderComponent from '../components/header/header.vue';
import FooterComponent from '../components/footer.vue';
import FullSreenLoaderComponent from '../components/full-screen-loader.vue';
import PortalRulesAlertComponent from '../components/portal-rules-alert.vue';

export default {
	components: {
		'header-component': HeaderComponent,
    	'footer-component': FooterComponent,
    	'full-screen-loader-component': FullSreenLoaderComponent,
    	'portal-rules-alert-component': PortalRulesAlertComponent,
	},
	data() {
		return {
			showFullScreenLoader: true,
		}
	},
	methods: {
		displayFooter() {
			return this.$route.name === 'lang-search' || this.$route.name === 'search' ? true : false
		}
	}
}
</script>

<style lang="sass">
	@import './assets/scss/layouts/default.scss';
</style>

