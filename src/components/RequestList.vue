<script setup>
import { userRequestsStore } from "@/stores/requests";
import { RouterLink } from "vue-router";

const requestsStore = userRequestsStore();

requestsStore.get();
</script>

<template>
  <div class="list-group">
    <RouterLink
      :to="`/requestedit/${request.id}`"
      v-for="request in requestsStore.requests"
      class="list-group-item list-group-item-action d-flex flex-column flex-md-row justify-content-between"
    >
      <div>
        <div class="d-flex flex-column">
          <div>
            <strong>{{ request.topic }} - {{ request.name }}</strong>
          </div>
          <div>{{ request.description }}</div>
        </div>
      </div>
      <div>{{ request.date }}</div>
    </RouterLink>
  </div>
</template>

<style scoped></style>
