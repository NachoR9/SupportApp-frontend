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
  <div>
    <form @submit="submit">
      <ul>
        <li>
          <label for="name">Name</label>
          <input v-model="name" type="text" id="name" name="name" required />
        </li>
        <li>
          <label for="name">Date</label>
          <input
            v-model="date"
            type="datetime-local"
            id="date"
            name="date"
            required
          />
        </li>
        <li>
          <label for="name">Topic</label>
          <input v-model="topic" type="text" id="topic" name="topic" required />
        </li>
        <li>
          <label for="name">Description</label>
          <input
            v-model="description"
            type="text"
            id="description"
            name="description"
            required
          />
        </li>
      </ul>
      <button type="submit">Submit</button>
      <input
        type="reset"
        value="Reset"
      />
      <button>
        
      </button>
    </form>
  </div>
</template>

<style scoped></style>
