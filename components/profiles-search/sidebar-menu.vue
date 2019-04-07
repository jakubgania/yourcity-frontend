<template>
	<div class="container-menu">
		<div class="section-menu">
			<ul class="ul-section">
				<li
					v-for="category in categoriesMenuItems"
					:key="category.id"
					:class="{'active': category.id == currentCategory}"
					class="li-menu"
					@click="changeCategory(category.id)"
				>
					<v-icon class="icon">
						{{ category.icon }}
					</v-icon>
					{{ $t(`categories.${category.id}`) }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import categoriesMenuItems from '../../json/categories-menu-items.json';

export default {
	data() {
		return {
			categoriesMenuItems: categoriesMenuItems.categories,
			isActive: false
		}
	},
	computed: {
		...mapGetters('searchProfiles', [
			'city',
			'query',
			'currentCategory'
		]),
		...mapGetters({
			basicClientAddress: 'basicClientAddress'
		}),
		currentCategory: {
			get() {
				return this.$store.state.searchProfiles.currentCategory;
			},
			set(value) {
				this.$store.commit('searchProfiles/currentCategory', value);
			}
		}
	},
	created() {
		if (this.$route.query.category) {
			this.currentCategory = this.$route.query.category
			this.$store.dispatch('searchProfiles/updateShowTagSection', true)
			this.updateCurrentCategory(this.$route.query.category)

			let cityInput = ''
			const newCategory = this.$route.query.category

			if (this.city !== null) cityInput = this.city
			
			const parameters = {
				city: cityInput,
				category: newCategory,
			}

			this.$store.dispatch('searchProfiles/switchCategory', parameters);
		}
	},
	methods: {
		...mapActions('searchProfiles', [
			'showTagSection',
			'updateCategory',
			'setPredefinedTags',
			'updateCurrentCategory',
			'updateShowTagSection',
		]),
		updateCurrentCategory(category) {
			this.$store.dispatch('searchProfiles/setPredefinedTags', category)
		},
		changeCategory(category) {
			this.isActive = category
      		this.updateURL(this.getUrl(category));
      		this.$emit('updateCurrentCategory', category);
      		window.scrollTo(0, 0);
      		this.$store.dispatch('searchProfiles/updateShowTagSection', true);
      		this.$store.dispatch('searchProfiles/updateCategory', category);
      		this.updateCurrentCategory(category);
      		this.currentCategory = category;

      		let cityInput = '';
      		const newCategory = category;

      		if (this.city) cityInput = this.city;

      		const parameters = {
        		city: cityInput,
        		category: newCategory,
      		};

      		this.$store.dispatch('searchProfiles/switchCategory', parameters);
		},
		getUrl(category) {
			if (this.city) {
				return `/${this.checkLanguage()}/search?category=${category}&city=${this.city}`;
			}

			return `/${this.checkLanguage()}/search?category=${category}`;
		},
		updateURL(url) {
			const stateObj = { foo: 'bar' };
      		history.pushState(stateObj, 'page', url);
		},
		checkLanguage() {
			return `${this.$i18n.locale}`;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/profiles-search/sidebar-menu.scss';
</style>

