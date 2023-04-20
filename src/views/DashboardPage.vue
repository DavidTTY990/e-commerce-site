<template>
  <Navbar></Navbar>
<router-view/>

</template>

<script>
import Navbar from '../components/NavBar.vue';

export default {
  components: {
    Navbar,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // vue-axios 的用法
    // 這邊可以把 this.user 省略，因為不再需要打用戶資訊出去了
    this.$http.post(api).then((res) => {
      console.log(res);
      if (!res.data.success) {
        this.$router.push('/loginpage');
      }
    });
  },
};
</script>
