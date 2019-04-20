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
							<v-flex xs12 sm5 md5 offset-md1 lg4 offsetlg2 xl13 offset-xl3>
								<v-combobx
									v-model="queryModel"
									:items="queryItems"
									:search-input.sync="queryInputSync"
									:placeholder="$t('home.search-section.search-form.input-query-placeholder')"
									solo
									clearable
									autocomplete="off"
									spellcheck="false"
									prepend-inner-icon="search"
									class="input-combobox"
									@keyup.enter.native="submitSearchForm()"
									@focus="autocompleteFromLocalStorage()"
								/>
							</v-flex>
							<v-flex xs12 sm4 md3 lg2 xl12>
								<v-combobox
									v-model="cityModel"
									:items="cityItems"
									:search-input.sync="cityInputSync"
									:placeholder="$t('home.search-section.search-form.input-city-placeholder')"
									item-text="name"
									item-value="name"
									return-object
									solo
									clearable
									autocomplete="off"
									spellcheck="false"
									prepend-inner-icon="location_on"
									class="input-combobox"
									@keyup.enter.native="submitSearchForm()"
									@facus="autocompleteFromLocalStorage()"
								>
								</v-combobox>
							</v-flex>
						</v-layout>
					</v-form>
				</div>

			</v-parallax>
		</v-flex>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import topImage from '../../assets/images/sky-tower-16.jpg';
import AutocompleteListComponent from '../autocomplete-list.vue';
import LocalStorage from '../../services/local-storage.service.js'

export default {
	components: {
		'autocomplete-list-component': AutocompleteListComponent,
	},
	data() {
		return {
			topImage,
			counter: 0,
			show: false,
			topWords: this.$t('home.search-section.top-words'),
			cityInputSync: null,
			queryInputSync: null,
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
