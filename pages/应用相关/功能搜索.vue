<template>
  <view>
    <Page ref="Page">
      <template v-slot:default="{ page }">
        <template v-if="page">
          <view :style="{ height: page.height + 'px' }" style="position: relative; overflow: hidden">
            <view class="cu-bar bg-white search fixed" :style="{ top: CustomBar + 'px' }">
              <view class="search-form round">
                <text class="cuIcon-search"></text>
                <input v-model="input" type="text" placeholder="输入搜索的关键词" confirm-type="search" :focus="focus" @blur="focus = false" @confirm="make" />
              </view>
              <text v-if="input" class="my_input_clear cuIcon-roundclosefill" @click="(input = ''), make()"></text>
              <view class="action">
                <button class="cu-btn bg-gradual-blue shadow-blur round" @click="make">搜索</button>
              </view>
            </view>

            <view class="margin-top-xxl padding-top">
              <scroll-view scroll-y class="indexes" :scroll-into-view="'indexes-' + listCurID" :style="{ height: 'calc(' + page.height + 'px - 50px)' }" scroll-with-animation="true" enable-back-to-top="true">
                <block v-if="list.length" v-for="letter in list" :key="letter">
                  <view class="padding padding-tb-sm text-bold" :class="'indexItem-' + letter" :id="'indexes-' + letter" :data-index="letter">{{ letter }}（{{ functionList.filter(e => e.initial === letter).length }}）</view>
                  <view class="cu-list menu-avatar no-padding">
                    <navigator :url="item.page" class="cu-item bg-white shadow" v-for="item in functionList.filter(e => e.initial === letter)" :key="item._id">
                      <view class="cu-avatar round lg light">
                        <image :src="item.icon" class="radius-lg" mode="aspectFit" style="width: 111rpx; height: 111rpx" />
                      </view>
                      <view class="content">
                        <view class="text-black">
                          <text v-for="(item, index) in item.name.split('')" :key="index" :style="{ fontWeight: (input || '').split('').includes(item) ? 'bolder' : '', color: (input || '').split('').includes(item) ? 'red' : '' }">{{ item }}</text>
                        </view>
                        <view class="text-gray text-sm">
                          <text v-for="(item, index) in item.desc.split('')" :key="index" :style="{ fontWeight: (input || '').split('').includes(item) ? 'bolder' : '', color: (input || '').split('').includes(item) ? 'red' : '' }">{{ item }}</text>
                        </view>
                      </view>
                      <view class="action margin-right">
                        <view class="cuIcon-right"></view>
                      </view>
                    </navigator>
                  </view>
                </block>
                <Empty v-else />
              </scroll-view>
            </view>

            <view class="indexBar flex align-center" :style="{ height: 'calc(' + page.height + 'px - 50px)' }" style="bottom: auto; top: 50vh; transform: translateY(-50%)">
              <view class="indexBar-box bg-white flex flex-column radius shadow" @touchstart="tStart" @touchend="tEnd" @touchmove="tMove">
                <view class="indexBar-item flex justify-center" v-for="letter in list" :key="letter" :id="letter" @touchstart="getCur" @touchend="setCur">{{ letter }}</view>
              </view>
            </view>

            <view :hidden="hidden" class="indexToast">
              {{ listCur }}
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
      input: "",
      boxTop: 0,
      barTop: 0,
      focus: true,
      movableY: 0,
      hidden: true,
      listCur: "A",
      listCurID: "A",
      functionList: [],
      StatusBar: getApp().globalData.statusBarHeight,
      CustomBar: getApp().globalData.navigationBarHeight,
    };
  },
  onLoad() {
    if (this.$store.state.user.openid) {
      this.getList();
    } else {
      uni.$once("LOGON", () => this.getList());
    }
  },
  onReady() {
    wx.createSelectorQuery()
      .select(".indexBar-box")
      .boundingClientRect(res => {
        this.boxTop = res.top;
      })
      .exec();
    wx.createSelectorQuery()
      .select(".indexes")
      .boundingClientRect(res => {
        this.barTop = res.top;
      })
      .exec();
  },
  methods: {
    getList() {
      this.functionList = this.$clone(this.$store.state.app.list.slice()).sort((a, b) => a.initial.charCodeAt(0) - b.initial.charCodeAt(0));
      this._functionList = this.$clone(this.functionList);
      this.list = [...new Set(this.functionList.map(e => e.initial))];
      this._list = this.$clone(this.list);
    },
    //获取文字信息
    getCur(e) {
      this.hidden = false;
      this.listCur = this.list[e.target.id];
    },
    setCur(e) {
      this.hidden = true;
      this.listCur = this.listCur;
    },
    //滑动选择Item
    tMove(e) {
      let y = e.touches[0].clientY,
        offsettop = this.boxTop;
      //判断选择区域,只有在选择区才会生效
      if (y > offsettop) {
        let num = parseInt((y - offsettop) / 20);
        this.listCur = this.list[num];
      }
    },
    //触发全部开始选择
    tStart() {
      this.hidden = false;
    },
    //触发结束选择
    tEnd() {
      this.hidden = true;
      this.listCurID = this.listCur;
    },
    indexSelect(e) {
      let barHeight = this.barHeight;
      let list = this.list;
      let scrollY = Math.ceil((list.length * e.detail.y) / barHeight);
      for (let i = 0; i < list.length; i++) {
        if (scrollY < i + 1) {
          this.listCur = list[i];
          this.movableY = i * 20;
          return false;
        }
      }
    },
    make() {
      this.focus = false;
      const input = this.input || "";
      if (input) {
        const array = input.split("");
        this.functionList = this.$clone(this._functionList).filter(e => (e.name + e.desc).split("").some(e => array.includes(e)));
        this.list = [...new Set(this.functionList.map(e => e.initial))];
      } else {
        this.list = this.$clone(this._list);
        this.functionList = this.$clone(this._functionList);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
