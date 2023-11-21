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
  methods: {
    load(e) {
      this.$loaded();
      this.$refs.Page.refreshing = false;
      if (typeof this._load === "function") {
        this._load(e);
      }
    },
    error() {
      this.src = "";
      this.$loaded();
      this.errored = true;
      this.$refs.Page.refreshing = false;
      this.$toast("哎呀！加载失败了...先看看美女叭...");
    },
    refresh() {
      this.src = "";
      this.$loading();
      this.errored = false;
      setTimeout(() => (this.src = `${this.SRC}?=t=${Date.now()}`));
    },
  },
};
