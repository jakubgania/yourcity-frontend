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
			
		}
	},
	computed: {

	},\
	watch: {

	},
	mounted() {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
	@import '../../assets/scss/home/search/search.scss';
	@import '../../assets/scss/home/search/lg.scss';
	@import '../../assets/scss/home/search/sm.scss';
	@import '../../assets/scss/home/search/xs.scss';
</style>
