<script setup lang="ts">
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { ref, onMounted, computed } from "vue";

const version = ref(0); // Reactive trigger

const stxAddress = computed(() => {
  version.value; // Depend on version to trigger re-computation
  if (isConnected()) {
    const storage = getLocalStorage();
    return storage?.addresses?.stx?.[0]?.address;
  }
  return undefined;
});

onMounted(() => {
  version.value++; // Initial trigger to evaluate computed property
});

async function handleConnect() {
  try {
    await connect(); // Use default options
    version.value++; // Trigger re-computation
  } catch (error) {
    console.error("Failed to connect:", error);
    // Optionally, handle connection error state here
  }
}

function handleDisconnect() {
  disconnect();
  version.value++; // Trigger re-computation
}
</script>

<template>
  <div v-if="stxAddress">
    <button @click="handleDisconnect">Disconnect Wallet</button>
    <p>STX Address: {{ stxAddress }}</p>
  </div>
  <div v-else>
    <button @click="handleConnect">Connect Wallet</button>
  </div>
</template>

<style scoped>
div {
  margin-top: 8px;
}

button {
  margin: 8px;
  background-color: #222;
  border: 2px solid #777;
  border-radius: 28px;
  font-size: 18px;
  padding: 16px 24px;
}
</style>
