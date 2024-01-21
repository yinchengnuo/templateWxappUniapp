<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view class="cu-list menu sm-border">
            <view class="cu-item" v-for="(item, index) in list" :key="index">
              <view class="content padding-tb-sm">
                <view>{{ item.name }} </view>
                <view class="text-black text-sm text-bold"> {{ item['release date'] }} </view>
              </view>
            </view>
          </view>
        </template>
      </template>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$loading();
    uni
      .request({
        url: "https://shanhe.kim/api/za/piaofang.php",
      })
      .then(({ data }) => {
        this.list = Object.values(data).filter(e => typeof e === 'object');
      })
      .finally(() => this.$loaded());
  },
};
</script>

<style lang="scss" scoped></style>
