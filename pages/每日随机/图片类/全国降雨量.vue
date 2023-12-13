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
      src: "https://api.andeer.top/API/jiangyu.php",
    };
  },
};
</script>

<style lang="scss" scoped></style>
