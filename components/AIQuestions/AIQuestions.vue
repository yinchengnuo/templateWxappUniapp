<template>
  <view class="index" :class="className">
    <view class="cu-list menu card-menu sm-border shadow radius-lg">
      <view class="cu-bar">
        <view class="action">
          <text class="text-bold">ToolBox AI 百宝箱</text>
        </view>
        <view class="flex" style="width: 42rpx; height: 42rpx" @click="$parent.page_container_show = false">
          <text class="cuIcon-close"></text>
        </view>
      </view>
    </view>
    <swiper class="h" :current="active" @change="({ detail }) => (active = detail.current)">
      <swiper-item class="h">
        <scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false" class="h" style="background: linear-gradient(rgba(255, 255, 255, 0.318), rgba(255, 255, 255, 0))">
          <view class="flex flex-wrap justify-between padding-sm">
            <view v-for="(item, index) in list1" :key="index" class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg" style="width: 348rpx; position: relative; min-height: 188rpx" @click="chat(item)">
              <view class="text-bold text-black flex justify-start">
                <image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.icon" mode="aspectFill" />
                <view class="text-cut text-df" style="width: calc(100% - 28rpx)"> {{ item.tag }}</view>
              </view>
              <rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item class="h100">
        <scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false" class="h" style="background: rgba(255, 255, 255, 0.618)">
          <view class="flex flex-wrap justify-between padding-sm">
            <view v-for="(item, index) in list2" :key="index" class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg" style="width: 348rpx; position: relative; min-height: 188rpx" @click="chat(item)">
              <view class="text-bold text-black flex justify-start">
                <image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.icon" mode="aspectFill" />
                <view class="text-cut text-df" style="width: calc(100% - 28rpx)"> {{ item.tag }}</view>
              </view>
              <rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item class="h100">
        <scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false" class="h" style="background: rgba(255, 255, 255, 0.618)">
          <view class="flex flex-wrap justify-between padding-sm">
            <view v-for="(item, index) in list3" :key="index" class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg" style="width: 348rpx; position: relative; min-height: 188rpx" @click="chat(item)">
              <view class="text-bold text-black flex justify-start">
                <image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.icon" mode="aspectFill" />
                <view class="text-cut text-df" style="width: calc(100% - 28rpx)"> {{ item.tag }}</view>
              </view>
              <rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
      <swiper-item class="h100">
        <view class="flex margin-top-xs">
          <scroll-view class="cu-vertical-nav nav cu-timeline" scroll-y scroll-with-animation :scroll-top="VerticalNavTop1" style="height: calc(100vh - 375rpx)">
            <view class="cu-item" style="white-space: nowrap; padding: 0; overflow: hidden" :class="index == TabCur1 ? 'text-black text-bold cur' : 'text-black'" v-for="(item, index) in scene" :key="index" @click="tabSelect1" :data-id="index"
              >{{ item.categoryName }}
            </view>
          </scroll-view>
          <scroll-view class="bg-ghostWhite" scroll-y scroll-with-animation style="height: calc(100vh - 375rpx)" :scroll-into-view="'main-1-' + MainCur1" @scroll="VerticalMain1">
            <view class="padding-top-xs padding-lr-xs" v-for="(item, index) in scene" :key="index" :id="'main-1-' + index">
              <view class="cu-bar solid-bottom bg-white" style="position: sticky; top: 0; z-index: 1; min-height: 80rpx">
                <view class="action">
                  <image v-if="item.categoryIcon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.categoryIcon" mode="aspectFill" />
                  <text class="text-bold text-black">{{ item.categoryName }}</text>
                </view>
                <view class="action">{{ item.promptLibs.length }}</view>
              </view>
              <view class="flex flex-wrap justify-between padding-tb-xs">
                <view v-for="(itemm, indexx) in item.promptLibs" :key="indexx" class="margin-bottom-xs radius padding-xs padding-right-xs shadow" :class="itemm.bg" style="width: 284rpx; position: relative" @click="chat(itemm)">
                  <view class="text-bold text-black flex justify-start">
                    <image v-if="itemm.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="itemm.icon" mode="aspectFill" />
                    <view class="text-cut text-df" style="width: calc(100% - 28rpx)"> {{ itemm.tag }}</view>
                  </view>
                  <rich-text :nodes="itemm.content" class="margin-top-xs text-sm text-cut-2 text-bold"></rich-text>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </swiper-item>
      <swiper-item class="h100">
        <view class="flex margin-top-xs">
          <scroll-view class="cu-vertical-nav nav cu-timeline" scroll-y scroll-with-animation :scroll-top="VerticalNavTop2" style="height: calc(100vh - 375rpx)">
            <view class="cu-item" style="white-space: nowrap; padding: 0; overflow: hidden" :class="index == TabCur2 ? 'text-black text-bold cur' : 'text-black'" v-for="(item, index) in career" :key="index" @click="tabSelect2" :data-id="index"
              >{{ item.categoryName }}
            </view>
          </scroll-view>
          <scroll-view class="bg-ghostWhite" scroll-y scroll-with-animation style="height: calc(100vh - 375rpx)" :scroll-into-view="'main-2-' + MainCur2" @scroll="VerticalMain2">
            <view class="padding-top-xs padding-lr-xs" v-for="(item, index) in career" :key="index" :id="'main-2-' + index">
              <view class="cu-bar solid-bottom bg-white" style="position: sticky; top: 0; z-index: 1; min-height: 80rpx">
                <view class="action">
                  <image v-if="item.categoryIcon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.categoryIcon" mode="aspectFill" />
                  <text class="text-bold text-black">{{ item.categoryName }}</text>
                </view>
                <view class="action">{{ item.promptLibs.length }}</view>
              </view>
              <view class="flex flex-wrap justify-between padding-tb-xs">
                <view v-for="(itemm, indexx) in item.promptLibs" :key="indexx" class="margin-bottom-xs radius padding-xs padding-right-xs shadow" :class="itemm.bg" style="width: 284rpx; position: relative" @click="chat(itemm)">
                  <view class="text-bold text-black flex justify-start">
                    <image v-if="itemm.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="itemm.icon" mode="aspectFill" />
                    <view class="text-cut text-df" style="width: calc(100% - 28rpx)"> {{ itemm.tag }}</view>
                  </view>
                  <rich-text :nodes="itemm.content" class="margin-top-xs text-sm text-cut-2 text-bold"></rich-text>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </swiper-item>
      <swiper-item class="h100">
        <scroll-view scroll-y show-scrollbar enhanced scroll-with-animation enable-passive using-sticky :bounces="false" class="h" style="background: rgba(255, 255, 255, 0.618)">
          <view class="flex flex-wrap justify-between padding-sm">
            <view v-for="(item, index) in list4" :key="index" class="margin-bottom-sm radius padding-sm padding-right-xs shadow" :class="item.bg" style="width: 348rpx; position: relative; min-height: 188rpx" @click="chat(item)">
              <view class="text-bold text-black flex justify-start">
                <image v-if="item.icon" class="margin-right-xs radius" style="width: 34rpx; height: 34rpx" :src="item.icon" mode="aspectFill" />
                <view class="text-cut text-df" style="width: calc(100% - 28rpx)"> {{ item.tag }}</view>
              </view>
              <rich-text :nodes="item.content" class="margin-top-sm text-sm text-cut-2 text-bold"></rich-text>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
    <view class="cu-bar tabbar bg-white shadow" style="padding: 0">
      <view class="flexc radius flex1 h100" :class="active === 0 ? className : ''" @click="active = 0">
        <view class="cu-tag badge bg-red">{{ list1.length }}</view>
        <text class="text-lg" :class="active === 0 ? 'cuIcon-hotfill' : 'cuIcon-hot'"></text>
        <text class="text-sm text-bold">今日热门</text>
      </view>
      <view class="flexc radius flex1 h100" :class="active === 1 ? className : ''" @click="active = 1">
        <view class="cu-tag badge bg-red">{{ list2.length }}</view>
        <text class="text-lg" :class="active === 1 ? 'cuIcon-friendfill' : 'cuIcon-friend'"></text>
        <text class="text-sm text-bold">大家都在问</text>
      </view>
      <view class="flexc radius flex1 h100" :class="active === 2 ? className : ''" @click="active = 2">
        <view class="cu-tag badge bg-red">{{ list3.length }}</view>
        <text class="text-lg" :class="active === 2 ? 'cuIcon-creativefill' : 'cuIcon-creative'"></text>
        <text class="text-sm text-bold">提效 Max</text>
      </view>
      <view class="flexc radius flex1 h100" :class="active === 3 ? className : ''" @click="active = 3">
        <view class="cu-tag badge bg-red">{{ scene.reduce((t, e) => t + e.promptLibs.length, 0) }}</view>
        <text class="text-lg" :class="active === 3 ? 'cuIcon-cardboardfill' : 'cuIcon-cardboard'"></text>
        <text class="text-sm text-bold">{{ scene.length }}大场景</text>
      </view>
      <view class="flexc radius flex1 h100" :class="active === 4 ? className : ''" @click="active = 4">
        <view class="cu-tag badge bg-red">{{ career.reduce((t, e) => t + e.promptLibs.length, 0) }}</view>
        <text class="text-lg" :class="active === 4 ? 'cuIcon-discoverfill' : 'cuIcon-discover'"></text>
        <text class="text-sm text-bold">{{ career.length }}大职业</text>
      </view>
      <view class="flexc radius flex1 h100" :class="active === 5 ? className : ''" @click="active = 5">
        <view class="cu-tag badge bg-red">{{ list4.length }}</view>
        <text class="text-lg" :class="active === 5 ? 'cuIcon-attentionfill' : 'cuIcon-attention'"></text>
        <text class="text-sm text-bold">最近更新</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "AIQuestions",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      scene: [],
      active: 0,
      career: [],
      className: "",
      TabCur1: 0,
      MainCur1: 0,
      VerticalNavTop1: 0,
      TabCur2: 0,
      MainCur2: 0,
      VerticalNavTop2: 0,
    };
  },
  watch: {
    show() {
      if (!this.list1.length) {
        this.$loading();
        this.$("/box/chosen")
          .then(data => {
            let bgs = getApp()
              .globalData.bgClass.slice()
              .sort(() => Math.random() - 0.5);
            this.list1 = data.filter(e => e.type === "hot").map((e, i) => ({ ...e, bg: bgs[i % 8] }));
            bgs = getApp()
              .globalData.bgClass.slice()
              .sort(() => Math.random() - 0.5);
            this.list2 = data.filter(e => e.type === "everyone").map((e, i) => ({ ...e, bg: bgs[i % 8] }));
            bgs = getApp()
              .globalData.bgClass.slice()
              .sort(() => Math.random() - 0.5);
            this.list3 = data.filter(e => e.type === "max").map((e, i) => ({ ...e, bg: bgs[i % 8] }));
            bgs = getApp()
              .globalData.bgClass.slice()
              .sort(() => Math.random() - 0.5);
            this.list4 = data.filter(e => e.type === "recent").map((e, i) => ({ ...e, bg: bgs[i % 8] }));
          })
          .finally(() => {
            this.$loaded();
          });
        this.$("/box/scene").then(data => {
          this.scene = data.map((e, i) => {
            const bgs = getApp()
              .globalData.bgClass.slice()
              .sort(() => Math.random() - 0.5);
            return { ...e, id: i, promptLibs: e.promptLibs.map((e, i) => ({ ...e, bg: bgs[i % 8] })) };
          });
        });
        this.$("/box/career").then(data => {
          this.career = data.map((e, i) => {
            const bgs = getApp()
              .globalData.bgClass.slice()
              .sort(() => Math.random() - 0.5);
            return { ...e, id: i, promptLibs: e.promptLibs.map((e, i) => ({ ...e, bg: bgs[i % 8] })) };
          });
        });
      }
    },
    active: {
      handler() {
        this.className = getApp()
          .globalData.bgClass.slice()
          .sort(() => Math.random() - 0.5)[0];
      },
      immediate: true,
    },
  },
  methods: {
    chat({ content }) {
      this.$parent.chat = content
        .replace(/\<.+?\>/g, "")
        .replaceAll("[", "")
        .replaceAll("]", "");
      this.$parent.send();
      this.$parent.page_container_show = false;
      this.$store.state.user.show_random_box = false;
    },
    tabSelect1(e) {
      this.TabCur1 = e.currentTarget.dataset.id;
      this.MainCur1 = e.currentTarget.dataset.id;
      this.VerticalNavTop1 = (e.currentTarget.dataset.id - 1) * 50;
    },
    VerticalMain1(e) {
      let tabHeight = 0;
      if (!this._load) {
        for (let i = 0; i < this.scene.length; i++) {
          uni
            .createSelectorQuery()
            .in(this)
            .select("#main-1-" + this.scene[i].id)
            .fields({ size: true }, data => {
              this.scene[i].top = tabHeight;
              tabHeight = tabHeight + data.height;
              this.scene[i].bottom = tabHeight;
            })
            .exec();
        }
        this._load = true;
      }
      let scrollTop = e.detail.scrollTop + 20;
      for (let i = 0; i < this.scene.length; i++) {
        if (scrollTop > this.scene[i].top && scrollTop < this.scene[i].bottom) {
          this.TabCur1 = this.scene[i].id;
          this.VerticalNavTop1 = (this.scene[i].id - 1) * 50;
          return false;
        }
      }
    },
    tabSelect2(e) {
      this.TabCur2 = e.currentTarget.dataset.id;
      this.MainCur2 = e.currentTarget.dataset.id;
      this.VerticalNavTop2 = (e.currentTarget.dataset.id - 1) * 50;
    },
    VerticalMain2(e) {
      let tabHeight = 0;
      if (!this.__load) {
        for (let i = 0; i < this.career.length; i++) {
          uni
            .createSelectorQuery()
            .in(this)
            .select("#main-2-" + this.career[i].id)
            .fields({ size: true }, data => {
              this.career[i].top = tabHeight;
              tabHeight = tabHeight + data.height;
              this.career[i].bottom = tabHeight;
            })
            .exec();
        }
        this.__load = true;
      }
      let scrollTop = e.detail.scrollTop + 20;
      for (let i = 0; i < this.career.length; i++) {
        if (scrollTop > this.career[i].top && scrollTop < this.career[i].bottom) {
          this.TabCur2 = this.career[i].id;
          this.VerticalNavTop2 = (this.career[i].id - 1) * 50;
          console.log("👀  file: AIQuestions.vue:307  VerticalMain2  this.TabCur2:", this.TabCur2)
          console.log("👀  file: AIQuestions.vue:308  VerticalMain2  this.VerticalNavTop2:", this.VerticalNavTop2)
          return false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.h {
  height: calc(100vh - 375rpx);
}

.flex1 {
  position: relative;
}

.cu-tag {
  top: 0rpx !important;
  right: 10rpx !important;
}

.text-sm {
  line-height: 2;
}
</style>
