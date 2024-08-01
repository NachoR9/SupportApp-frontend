<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg bg-primary mb-3" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">IT Support</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/requestlist" class="nav-link active"
                >Requests</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/supportform" class="nav-link active"
                >New request</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <main class="px-2 px-md-5">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
