<template>
	<Page ref="Page" refresh @refresh="refresh">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<image v-if="src" class="w100" :src="src" mode="widthFix" show-menu-by-longpress @load="load" @error="error" />
				<ErrorImage v-if="errored" />
				<AD2 />
				<AD3 />
			</template>
		</template>

	</Page>
</template>

<script>
import PageImg from '@/mixins/PageImg.js'
export default {
	mixins: [PageImg],
	data() {
		return {
			SRC: 'https://api.xingzhige.com/API/yshl'
		}
	}
}
</script>

<style lang="scss" scoped></style>