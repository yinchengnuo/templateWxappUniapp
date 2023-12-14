<template>
  <Page ref="Page">
    <template v-slot:default="{ page }">
      <template v-if="page"> </template>
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
