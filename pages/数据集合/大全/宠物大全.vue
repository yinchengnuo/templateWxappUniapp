<template>
  <view>
    <Page ref="Page" :scrollTop="!show">
      <template v-slot:nav>
        <picker :value="index" :range="types" @change="e => (index = +e.detail.value)" class="margin-right">
          <text>{{ types[index] }}</text>
          <text class="cuIcon-unfold"></text>
        </picker>
      </template>
      <template>
        <view class="cu-list menu-avatar">
          <view :url="item.page" class="cu-item arrow bg-white solids-bottom" v-for="(item, index) in records" :key="index" @click="view(item)">
            <view class="cu-avatar round lg">
              <image class="w100 h100 radius" :src="item.pic" mode="scaleToFill" @click.stop="$preview(item.pic)" />
            </view>
            <view class="content">
              <view class="text-bold">{{ item.name }}</view>
              <view class="text-gray text-sm">
                <text> {{ item.nation }} </text>
                <text class="margin">{{ item.life }} </text>
                <text> ￥{{ item.price }} </text>
              </view>
            </view>
            <view class="action">
              <view class="cuIcon-right"></view>
            </view>
          </view>
        </view>
      </template>
      <page-container :show="show" :z-index="999999999" round @afterleave="show = false">
        <scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false" style="height: 88.8vh; position: relative">
          <view class="cu-list menu card-menu sm-borde bg-white radius-lg" style="position: sticky; top: 0; z-index: 1; border-radius: 0">
            <view class="cu-bar">
              <view class="action">
                <text class="text-bold">宠物详情</text>
              </view>
              <view class="flex" style="width: 42rpx; height: 42rpx" @click="show = false">
                <text class="cuIcon-close"></text>
              </view>
            </view>
          </view>
          <view class="cu-card case margin">
            <view class="cu-item shadow">
              <view class="image">
                <image :src="item.pic" mode="aspectFill" @click="$preview(item.pic)" style="max-height: 360rpx"> </image>
                <view class="cu-tag bg-blue">原产地：{{ item.nation }}</view>
                <view class="cu-bar bg-shadeBottom">
                  <text class="text-cut">寿命：{{ item.life }}</text>
                </view>
              </view>
              <view class="cu-list menu-avatar">
                <view class="cu-item">
                  <view class="cu-avatar round lg">
                    <image class="w100 h100 radius" :src="item.pic" mode="aspectFill"></image>
                  </view>
                  <view class="content flex-sub">
                    <view class="text-grey">{{ item.name }}</view>
                    <view class="text-gray text-sm flex justify-between">
                      <text>{{ item.engname }}</text>
                      <view class="text-black text-bold">￥{{ item.price }}</view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="cu-list menu sm-border card-menu" style="margin: 0">
                <view v-if="item.message" class="cu-item">
                  <view class="content">
                    <text class="text-lg text-bold">基本信息</text>
                  </view>
                </view>
                <view v-if="item.message" class="cu-item">
                  <view class="content">
                    <text class="text-sm text-black text-bold">{{ item.message }}</text>
                  </view>
                </view>
                <view v-if="item.feed" class="cu-item">
                  <view class="content">
                    <text class="text-lg text-bold">喂养方法</text>
                  </view>
                </view>
                <view v-if="item.feed" class="cu-item">
                  <view class="content">
                    <text class="text-sm text-black text-bold">{{ item.feed }}</text>
                  </view>
                </view>
                <view v-if="item.feed" class="cu-item">
                  <view class="content">
                    <text class="text-lg text-bold">喂养方法</text>
                  </view>
                </view>
                <view v-if="item.feed" class="cu-item">
                  <view class="content">
                    <text class="text-sm text-black text-bold">{{ item.feed }}</text>
                  </view>
                </view>
                <view v-if="item.relative" class="cu-item">
                  <view class="content">
                    <text class="text-lg text-bold">优缺点</text>
                  </view>
                </view>
                <view v-if="item.relative" class="cu-item">
                  <view class="content">
                    <text class="text-sm text-black text-bold">{{ item.relative }}</text>
                  </view>
                </view>
                <view v-if="item.pick" class="cu-item">
                  <view class="content">
                    <text class="text-lg text-bold">鉴别方法</text>
                  </view>
                </view>
                <view v-if="item.pick" class="cu-item">
                  <view class="content">
                    <text class="text-sm text-black text-bold">{{ item.pick }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">粘人程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.sticky }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">喜叫程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.shout }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">友善程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.friendly }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">掉毛程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.lint }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">美容程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.beauty }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">体味程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.odour }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">口水程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.saliva }}</text>
                  </view>
                </view>
                <view class="cu-item">
                  <view class="content">
                    <text class="text-lg">可训程度</text>
                  </view>
                  <view class="action">
                    <text class="text-lg text-bold">{{ item.active }}</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </scroll-view>
      </page-container>
    </Page>
  </view>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      item: {},
      show: false,
      records: [],
      types: ["狗狗", "猫猫"],
    };
  },
  watch: {
    index() {
      this.records = uni.getStorageSync("pet").filter(e => e.type === this.types[this.index]);
    },
  },
  created() {
    if (uni.getStorageSync("pet")) {
      this.records = uni.getStorageSync("pet").filter(e => e.type === this.types[this.index]);
    } else {
      this.$loading();
      this.$("/pet")
        .then(data => {
          this.records = data.filter(e => e.type === this.types[this.index]);
          uni.setStorageSync("pet", data);
        })
        .finally(() => this.$loaded());
    }
  },
  methods: {
    view(item) {
      this.show = true;
      this.item = item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
