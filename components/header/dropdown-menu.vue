<template>
	<v-menu :nudge-width="140">
		<v-btn slot="activator" icon>
			<v-icon>
				more_vert
			</v-icon>
		</v-btn>

		<v-card class="card-menu">
			<v-list-tile class="title-header-menu">
				<v-list-tile-title class="text-title">
					<v-icon class="icon">
						translate
					</v-icon>
					{{ $t('header.dropdown-menu.title') }}
				</v-list-tile-title>
			</v-list-tile>

			<v-list-tile
				v-for="language in languages"
				:key="language.id"
				class="link-section"
				@click="changeLanguage(language.shortName)"
			>
				<v-list-tile-title class="text-title">
					<v-icon class="icon">
						chevron_right
					</v-icon>
					{{ language.name }}
				</v-list-tile-title>
			</v-list-tile>

		</v-card>
	</v-menu>
</template>

<script>
export default {
	data() {
		return {
			languages: [
				{
					name: 'Polski',
					shortName: 'pl'
				},
				{
					name: 'English',
					shortName: 'en'
				},
				{
					name: 'Deutsch',
					shortName: 'de'
				}
			]
		}
	},
	methods: {
		changeLanguage(language) {
			const routeName = this.$route.name;

      		if (routeName === 'index' && this.$i18n.locale !== language) {
        		this.$router.push({ name: 'lang', params: { lang: language } });
        		return;
      		}

      		if (routeName === 'lang' && this.$i18n.locale !== language) {
        		this.$router.push({ name: 'lang', params: { lang: language } });
        		return;
      		}

      		let route = '';

      		if (this.$i18n.locale === 'en') {
        		route = `lang-${this.$route.name}`;
      		} else {
        		route = this.$route.name;
      		}

      		if (this.$i18n.locale !== 'pl' && language === 'pl') {
        		this.$i18n.locale = 'pl';
        		this.$router.push({ name: route, params: { lang: 'pl' } });
      		} else if (this.$i18n.locale !== 'en' && language === 'en') {
        		this.$i18n.locale = 'en';
        		this.$router.push({ name: route, params: { lang: 'en' } });
      		} else if (this.$i18n.locale !== 'de' && language === 'de') {
        		this.$i18n.locale = 'de';
        		this.$router.push({ name: route, params: { lang: 'de' } });
      		}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/header/dropdown-menu.scss';
</style>


