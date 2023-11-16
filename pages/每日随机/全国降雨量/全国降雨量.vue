<template>
	<Page ref="Page" type="S1" refresh @refresh="refresh">
		<template v-slot:default="{ page }">
			<template v-if="page">
				<image v-if="src" class="w100" :src="src" mode="widthFix" @load="load()" @error="error()" />
				<ErrorImage v-if="errored" />
				<AD1 />
				<AD2 />
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
			SRC: 'https://api.andeer.top/API/jiangyu.php'
		}
	}
}
</script>

<style lang="scss" scoped></style>