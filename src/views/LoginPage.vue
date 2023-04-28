<template>
  <div class="container mt-5">
    <!-- submit 事件的放置位置並不是「登入」按鈕上，而是整個 form 區塊的位置中 -->
    <form @submit.prevent="signIn" class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address
          <input
            v-model="user.username"
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
          />
          <!-- autofocus 這邊 eslint 持續噴錯，還找不到把相關設定關掉的地方，暫時先放在這邊-->
        </label>
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password
          <input
            v-model="user.password"
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
        </label>
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // vue-axios 的用法
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
            this.$router.push('/dashboardpage/productspage');
          }
        });
    },
  },
};
</script>
