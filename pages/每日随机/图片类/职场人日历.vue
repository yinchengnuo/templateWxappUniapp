<template>
  <Page type="S1" ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page">
        <Img ref="Img" :src="src" />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      src: "https://api.vvhan.com/api/zhichang",
    };
  },
};
</script>

<style lang="scss" scoped></style>
