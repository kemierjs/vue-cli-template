<template>
	<t-menu
			theme="light"
			defaultValue="3-2"
			expandMutex
			:defaultExpanded="expanded"
			height="550px"
			:collapsed="collapsed"
	>
		<template #logo>
			<t-icon size="30px" v-if="collapsed" name="app"/>
			<img v-else :style='{ width:"calc(100% - 40px)" }' src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo"/>
		</template>
		<t-submenu title="日常" value="3">
			<template #icon>
				<t-icon name="mail"/>
			</template>
			<t-menu-item value="3-2" to="/eat">吃饭</t-menu-item>
			<t-menu-item value="3-3" to="/sleep">睡觉</t-menu-item>
			<t-menu-item value="3-4" to="/play">打游戏</t-menu-item>
		</t-submenu>
		<template #operations>
			<t-icon class="t-menu__operations-icon" name="view-list" @click.native="changeCollapsed"/>
		</template>
	</t-menu>
</template>
<script>
export default {
	components: {},
	data(){
		return {
			expanded: ["2", "3"],
			disabled: true,
			collapsed: false
		};
	},
	methods: {
		changeCollapsed(){
			this.collapsed = !this.collapsed;
		}
	}
};
</script>
<style scoped>
</style>
