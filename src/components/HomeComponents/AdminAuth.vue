<template>
  <div class="bg-gray-300  min-h-screen">
    <div>Admin Register</div>
    <div class="flex flex-col justify-center items-center h-full">
      <div class="flex flex-col">
        <label for="email"> email</label>
        <input type="email" class="border" v-model="email" />
      </div>
      <div class="flex flex-col">
        <label for="password">Password</label>
        <input type="password" class="border" v-model="password" />
      </div>
      <div class="flex flex-col">
        <label for="text">name</label>
        <input type="text" class="border" v-model="name" />
      </div>
      <button
        class="bg-blue-300 py-2 my-5 px-10 text-white"
        @click="registerAdmin"
      >
        Create Admin Account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-register',
  data: () => {
    return {
      email: '',
      password: '',
      name: '',
    };
  },
  methods: {
    registerAdmin() {
      this.$store.dispatch('adminRegister', {
        email: this.email,
        password: this.password,
        name: this.name,
      });
    },
  },
};
</script>
