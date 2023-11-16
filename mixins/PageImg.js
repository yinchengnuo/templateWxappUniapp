export default {
  data() {
    return {
      src: "",
      errored: false,
    };
  },
  created() {
    if (this.SRC) {
      this.src = this.SRC;
    }
  },
  mounted() {
    this.$loading();
  },
  methods: {
    load() {
      this.$loaded();
      this.$refs.Page.refreshing = false;
    },
    error() {
      this.src = "";
      this.$loaded();
      this.errored = true;
      this.$refs.Page.refreshing = false;
      this.$toast("哎呀！加载失败了...请稍后再试或下拉刷新重试，或者先看看美女...");
    },
    refresh() {
      this.src = "";
      this.$loading();
      this.errored = false;
      setTimeout(() => (this.src = this.SRC));
    },
  },
};
