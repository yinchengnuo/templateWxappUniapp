<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page"> 电话号大全 </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
