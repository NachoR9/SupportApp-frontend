<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref("")
const password = ref("")
const router = useRouter()

function submit(e) {
  e.preventDefault();
  username.value = "";
  password.value = "";
  router.push("/requestList")
}
</script>

<template>
  <h1 class="display-6 text-center mb-5">Please, enter your credentials</h1>
  <form class="col-12 col-md-8 offset-0 offset-md-2 px-md-5 py-md-4" @submit="submit">
    <div class="row mb-3">
      <label for="username" class="col-sm-2 col-form-label">Username</label>
      <div class="col-sm-10">
        <input type="text" v-model="username" id="username" name="username" required class="form-control py-2" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="password" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" v-model="password" id="password" name="password" required class="form-control py-2" />
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary">Log in</button>
    </div>
  </form>
</template>
