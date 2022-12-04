<template>
	<div>
		<UserInfo/>
	</div>
</template>
<script>
import { mapGetters } from "vuex";
import UserInfo from "@/components/daily/UserInfo.vue";
export default {
	name: "eat",
	components:{
		UserInfo
	},
	async mounted(){
		await this.fetchInfo();
	},
	computed: {
		...mapGetters({
			userList: "city/userList"
		})
	},
	methods: {
		async fetchInfo(){
			await this.fetchUserList();
		},
		async fetchUserList(){
			await this.$store.dispatch("city/fetchUserList");
		}
	}
};
</script>
<style lang="stylus" scoped>

</style>
