new Vue({
    el: '#app',
    data() {
      return {
        open: false
      }
    },
     methods: {
      toogle() {
        this.open = !this.open;
      }
    }
  });