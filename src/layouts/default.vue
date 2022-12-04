<template>
	<t-layout class="container">
		<t-aside>
			<Aside/>
		</t-aside>
		<t-layout id="main" class="main">
			<t-header>Header</t-header>
			<t-content>
				<router-view class="view"/>
			</t-content>
			<t-footer>Footer</t-footer>
		</t-layout>
	</t-layout>
</template>
<script type="text/javascript" lang="jsx">
import Aside from "@/components/Asides.vue";

export default {
	components: {
		Aside
	}
};
</script>
<style lang="stylus" scoped>
.container
	.t-layout__sider
		width auto
		height 100vh
		position sticky
		top 0

		>>> .t-menu__logo
			box-sizing border-box
			display flex
			justify-content center
			align-items center

	.main
		.t-layout__header
			flex-shrink 0

		.t-layout__content
			display flex

			.view
				flex auto
				display flex
				flex-flow column nowrap
				gap 10px
				margin 10px

				& >>>
					> div:nth-child(1)
						display flex
						flex auto

						& > .t-card:nth-child(1)
							flex auto


		.t-layout__footer
			position sticky
			bottom 0
			background #ff0
</style>
