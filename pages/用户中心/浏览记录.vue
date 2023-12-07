<template>
  <Page ref="Page" bg>
    <template v-slot:default="{ page }">
      <template v-if="page">
        <template v-if="records.length">
          <view class="cu-list menu-avatar">
            <navigator :url="item.page" class="cu-item arrow bg-white solids-bottom" v-for="(item, index) in records" :key="index">
              <view class="cu-avatar round lg">
                <image class="w100 h100 radius" :src="item.icon" mode="scaleToFill" />
              </view>
              <view class="content">
                <view class="text-bold">{{ item.name }}</view>
                <view class="text-gray text-sm flex justify-start">
                  <text class="text-cut">
                    {{ item.desc }}
                  </text>
                </view>
              </view>
              <view class="action">
                <view class="cuIcon-right"></view>
              </view>
            </navigator>
          </view>
        </template>
        <Empty v-if="empty" />
      </template>
    </template>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      records: [],
      empty: false,
    };
  },
  created() {
    this.$loading();
    this.$("/view_record")
      .then(data => {
        this.records = data.map(e => this.$store.state.app.list.find(ee => e.function_id === ee._id)).map(e => ({ ...e, name: e.page.split("/").at(-1) }));
        if (!this.records.length) {
          this.empty = true;
        }
      })
      .finally(() => {
        this.$loaded();
      });
  }
};
</script>

<style lang="scss" scoped></style>
