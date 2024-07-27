<script setup>
import { userRequestsStore } from "@/stores/requests";

const requestsStore = userRequestsStore();

requestsStore.get();
</script>

<template>
  <div v-for="request in requestsStore.requests">{{ request }}</div>
</template>

<style scoped></style>
