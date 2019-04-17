<template>
	<div>
		<v-flex xs12 lg12>
			<v-parallax :src="topImage" :height="imageHeight" alt="Wrocław at night from the Sky Tower">
				<v-layout row wrap>
					<v-flex lg12>
						<div class="word-changer-section">
							<transition name="fade">
								<p v-if="show">
									{{ wordChanger }}
								</p>
							</transition>
						</div>
					</v-flex>
				</v-layout>

				<div class="search-form-section">
					<v-form @submit.prevent="submitSearchForm">
						<v-layout row wrap>

						</v-layout>
					</v-form>
				</div>

			</v-parallax>
		</v-flex>
	</div>
</template>

<script>
export default {
	components: {

	},
	data() {
		return {
			localStorageObject: new LocalStorage(),
		}
	},
	computed: {
		...mapGetters('searchProfiles', [
			'city',
			'query'
		]),
		...mapGetters('autocomplete', [
			'queryItems',
			'cityItems'
		]),
		imageHeight() {
			switch (this.$vuetify.breakpiont.name) {
				case 'xs': return '540';
				case 'sm': return '600';
				case 'md': return '640';
				case 'lg': return '680';
				case 'xl': return '800';
				default: return '800'
			}
		},
		wordChanger() {
			if (this.counter > this.topWords.length) {
				this.resetCounter();
			}

			return this.topWords[this.counter];
		},
		queryModel: {
			get() {
				return this.$store.state.searchProfiles.query;
			},
			set(value) {
				this.$store.dispatch('searchProfiles/queryUpdate', value);
			}
		},
		cityModel: {
			get() {
				return this.$store.state.searchProfiles.city;
			},
			set(value) {
				this.$store.dispatch('searchProfiles/cityUpdate', value);
			}
		}
	},
	watch: {
		cityInputSync(value) {
			if (value && value !== this.cityModel) {
				this.$store.dispatch('autocomplete/autocompleteCity', value);
			}

			if (value != null) this.cityModel = value
		},
		queryInputSync(value) {
			if (value && value !== this.queryModel) {
				this.$store.dispatch('autocomplete/autocompleteQuery', value);
			}

			if (value != null) this.queryModel = value
		}
	},
	mounted() {
		setInterval(() => {
			this.show = !this.show;
			if (this.show) this.counter += 1;
		}, 1800);

		if (this.localStorageObject.checkIfDataExistsInLocalStorageByKey('listOfSuggestedQueries')) {
			this.$store.commit('autocomplete/queryItems', JSON.parse(localStorage.getItem('listOfSuggestedQueries')))
		}
	},
	methods: {
		...mapActions('autocomplete', [
			'autocompleteQuery',
			'autocompleteCity',
		]),
		resetCounter() {
			this.counter = 0;
		},
		submitSearchForm() {
			this.updateLocalStorage(this.query, 'listOfSuggestedQueries')
			this.updateLocalStorage(this.city, 'listOfSuggestedCities')

			this.$router.push({
				path: `${this.$i18n.locale}/search`,
				query: {
					query: this.query,
					city: this.city
				}
			})
		},
		updateLocalStorage(value, key) {
			if (value != null && value.length > 0) {
				if (this.localStorageObject.checkIfDataExistsInLocalStorageByKey(key)) {
					this.localStorageObject.updateDataByKey(key, value)					
				} else {
					this.localStorageObject.setDataByKey(key, value)
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/home/search/search.scss';
	@import '../../assets/scss/home/search/lg.scss';
	@import '../../assets/scss/home/search/sm.scss';
	@import '../../assets/scss/home/search/xs.scss';
</style>
