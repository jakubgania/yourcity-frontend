<template>
	<div v-if="showFullScreenLoader" class="loader-section">
		<v-flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 xl2 offset-xl5>
			<v-progress-linear :indeterminate="true" color="indigo accent-4" background-color="grey lighten-5"/>
		</v-flex>
	</div>
</template>

<script>
export default {
	props: {
		showFullScreenLoader: {
			type: Boolean,
			default: true,
		}
	}
}
</script>

<style lang="scss" scoped>
.loader-section
{
	position: fixed;
  	z-index: 400;
  	top: 0;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	background-color: #fff;
  	opacity: 1;
}
.loader-position
{
  	position: absolute;
  	top: 50%;
  	right: 0;
  	bottom: 0;
  	left: 0;
  	width: auto;
  	height: auto;
}
</style>

