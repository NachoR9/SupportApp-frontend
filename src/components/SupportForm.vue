<script setup>
import { ref } from "vue";

const name = ref("");
const date = ref("");
const topic = ref("");
const description = ref("");

async function submit(e) {
  e.preventDefault();
  const response = await fetch("http://localhost:8080/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      date: date.value,
      topic: topic.value,
      description: description.value,
    }),
  });
}
</script>

<template>
  <form @submit="submit">
    <div class="row mb-3">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input v-model="name" type="text" id="name" name="name" required class="form-control py-2" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="date"  class="col-sm-2 col-form-label">Date</label>
      <div class="col-sm-10">
        <input
          v-model="date"
          type="datetime-local"
          id="date"
          name="date"
          required
          class="form-control py-2"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="topic"  class="col-sm-2 col-form-label">Topic</label>
      <div class="col-sm-10">
        <input v-model="topic" type="text" id="topic" name="topic" required class="form-control py-2"/>
      </div>
    </div>
    <div class="row mb-3">
      <label for="description"  class="col-sm-2 col-form-label">Description</label>
      <div class="col-sm-10">
        <input
          v-model="description"
          type="text"
          id="description"
          name="description"
          required
          class="form-control py-2"
        />
      </div>
    </div>
    <div class="d-flex justify-content-end">
      <input
        type="reset"
        value="Reset"
        class="btn btn-secondary me-2"
      />
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<style scoped></style>
