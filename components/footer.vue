<template>
	<v-layout row wrap class="footer-container">
		<v-flex xs12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2 class="footer-section">
			<v-layout row wrap>
				<v-flex xs12 lg4>
					<v-layout row wrap>
						<v-flex xs12 sm12 lg12>
							<logo-component/>
						</v-flex>
						<v-flex xs12 sm8 lg12>
							<div class="icons-section">
								<v-layout>
									<v-flex v-for="icon in icons" :key="icon.id" sm2 mg2 lg2>
										<v-icon class="footer-icon">
											{{ icon }}
										</v-icon>
									</v-flex>
								</v-layout>
							</div>
						</v-flex>
						<v-flex xs12 sm8 lg12>
							<div class="description">
								{{ $t('footer.description') }}
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
				<v-flex xs12 lg8>
					<v-layout row wrap>
						<v-flex v-for="route in routes" :key="route.id" xs12 sm4 lg4>
							<div v-for="item in route" :key="item.id" class="link-section">
								<nuxt-link :to="$i18n.path(item.i18nPath)">
									<v-icon class="link-icon">
										keyboard_arrow_right
									</v-icon>
									{{ $t(item.translateRouteName) }}
								</nuxt-link>
							</div>
						</v-flex>
					</v-layout>
				</v-flex>
			</v-layout>
		</v-flex>

		<v-flex xs12 md10 offset-md1 lg10 offset-lg1 xl8 offset-xl2>
			<div class="copyright-section">
				<div class="copyright">
					yourcity &copy; 2018 - 2019
				</div>
			</div>
		</v-flex>
	</v-layout>
</template>

<script>
import LogoComponent from './logo.vue';

export default {
	components: {
		'logo-component': LogoComponent,
	},
	data() {
		return {
			icons: [
				'perm_device_info',
				'location_city',
				'map',
				'layers',
				'perm_device_info'
			],
			routes: [
				[
					{
						i18nPath: '',
						translateRouteName: 'routes-names.home-page'
					},
					{
						i18nPath: 'search',
						translateRouteName: 'routes-names.search-page'
					},
					{
						i18nPath: 'photos',
						translateRouteName: 'routes-names.photos-page'
					},
					{
						i18nPath: 'countries/all',
						translateRouteName: 'routes-names.countries-page'
					}
				],
				[
					{
						i18nPath: 'project',
						translateRouteName: 'routes-names.projects-page'
					},
					{
						i18nPath: 'founder',
						translateRouteName: 'routes-names.founder-page'
					},
					{
						i18nPath: 'changelog',
						translateRouteName: 'routes-names.changelog-page'
					},
					{
						i18nPath: 'agreements',
						translateRouteName: 'routes-names.agreements-page'
					}
				],
				[
					{
						i18nPath: 'contact',
						translateRouteName: 'routes-names.contact-page'
					},
					{
						i18nPath: 'business',
						translateRouteName: 'routes-names.business-page'
					},
					{
						i18nPath: 'example-profile',
						translateRouteName: 'routes-names.example-profile'
					}
				]
			]
		}
	},
}
</script>

<style lang="scss" scoped>
	@import './../assets/scss/footer/lg.scss';
	@import './../assets/scss/footer/sm.scss';
	@import './../assets/scss/footer/xs.scss';
</style>

