<template>
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
</template>

<script>
const map = {
  秀人网: "2.02",
  舞蹈生日记: "2.01",
  高质量JK: "1.10",
  DJAWA: "1.09",
  DISI第四印象: "1.08",
  耶米西奶露: "1.07",
  少女秩序: "1.06",
  木花琳琳是勇者: "1.05",
  紧急企划: "1.04",
  "喵写真;": "1.03",
  兔玩印画: "1.02",
  JKFUN: "1.01",
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
        .request({ url: "https://www.onexiaolaji.cn/RandomPicture/api/?key=qq249663924&type=json&class=" + map[this.types[this.index]] })
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
