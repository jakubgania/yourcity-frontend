<template>
	<router-link :to="$i18n.path('')" class="logo-link">
		<img :style="{marginTop: margin + 'px'}" :width="logoSize" :src="logo" alt="Yourcity logo" height="auto">
	</router-link>
</template>

<script>
import logo from '../static/logo.svg';

export default {
	props: {
		logoSize: {
			type: Number,
			default: 160,
		},
		margin: {
			type: Number,
			default: 0,
		}
	},
	data() {
		return {
			logo,
		}
	},
}
</script>

<style lang="scss" scoped>
.logo-link
{
	text-decoration: none;
}
</style>

