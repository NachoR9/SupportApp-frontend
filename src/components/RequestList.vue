<script setup>
import { userRequestsStore } from "@/stores/requests";
import { RouterLink } from "vue-router";

const requestsStore = userRequestsStore();

requestsStore.get();
</script>

<template>
  
  <RouterLink :to="`/requestedit/${ request.id }`" v-for="request in requestsStore.requests">{{ request }}</RouterLink>

</template>

<style scoped></style>
