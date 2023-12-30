<template>
  <view>
    <Page ref="Page" bg refresh @refresh="refresh">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-bar solid-bottom margin-top-xs">
            <view class="action">
              <text class="cuIcon-titles" :class="'text-' + $refs.Page.bgClass.split('-')[2]"></text>
              <text class="text-bold">类型</text>
            </view>
            <picker :value="index" :range="types" @change="e => (index = +e.detail.value)" class="margin-right">
              <text>{{ types[index] }}</text>
              <text class="cuIcon-unfold"></text>
            </picker>
          </view>
          <Img ref="Img" :src="src" />
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
const map = {
  美女: "1",
  动漫: "2",
  风景: "3",
  游戏: "4",
  文字: "5",
  情感: "7",
  设计: "8",
  明星: "9",
  物语: "10",
};
export default {
  data() {
    return {
      src: "",
      index: 0,
      types: Object.keys(map),
    };
  },
  watch: {
    index() {
      this.$refs.Page.refreshing = true;
    },
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$loading();
      this.$refs.Page.refreshing = true;
      uni
        .request({ url: "https://api.lolimi.cn/API/bizhi/api.php?msg=" + map[this.types[this.index]] })
        .then(({ data }) => {
          this.src = data.url;
        })
        .catch(() => {})
        .finally(() => {
          this.$loaded();
          this.$refs.Page.refreshing = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
