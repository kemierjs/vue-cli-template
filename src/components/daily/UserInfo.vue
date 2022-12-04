<template>
	<div>
		<t-card :bordered="false" hover-shadow>
			<t-form
					:data="formData"
					:rules="rules"
					:labelWidth="80"
					:statusIcon="formStatusIcon"
			>
				<t-form-item label="失败" name="fail">
					<t-input v-model="formData.fail" placeholder="校验不通过状态"></t-input>
				</t-form-item>
				<t-form-item label="警告" name="warning">
					<t-input v-model="formData.warning" placeholder="校验警告状态"></t-input>
				</t-form-item>

				<t-form-item :statusIcon="false" style="margin-left: 80px">
					<t-space size="10px">
						<t-button theme="primary" type="submit">提交</t-button>
						<t-button theme="default" variant="base" type="reset">重置</t-button>
					</t-space>
				</t-form-item>
			</t-form>
		</t-card>
	</div>
</template>
<script>
const INITIAL_DATA = {
	fail: "",
	warning: "",
	success: "",
	failB: "",
	warningB: "",
	loading: "",
	add: "",
	help: ""
};
export default {
	name: "UserInfo",
	data(){
		return {
			formStatusIcon: true,
			formData: { ...INITIAL_DATA },
			rules: {
				fail: [{ required: true, message: "必填", type: "error" }],
				warning: [{ required: true, message: "必填", type: "warning" }],
				success: [{ validator: () => true }],
				failB: [{ required: true, message: "必填", type: "error" }],
				warningB: [{ required: true, message: "必填", type: "warning" }]
			},
			addlist: [{ id: 0, name: "add0" }],
			lastAddItem: 1
		};
	},
	methods: {
		addItem(){

		},
		removeItem(){

		},
		getStatusIcon(){

		}
	},

};
</script>
<style scoped>
</style>
