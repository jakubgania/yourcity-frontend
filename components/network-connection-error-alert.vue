<template>
	<v-flex lg12>
		<v-layout v-if="showErrorConnectionAlert" row wrap>
			<v-flex :style="{marginTop: margin + 'px'}" xs10 offset-xs1 sm6 offset-sm3 lg4 offset-lg4>
				<v-alert value="true" color="error" type="error" style="letter-spacing: 1px; font-weight: 700;">
					{{ $t('alerts.network-connection-error-alert') }}
				</v-alert>
			</v-flex>
		</v-layout>
	</v-flex>
</template>

<script>
export default {
	props: {
		showErrorConnectionAlert: {
			type: Boolean,
			default: false,
		},
		margin: {
			type: Number,
			default: 0,
		}
	}
}
</script>

