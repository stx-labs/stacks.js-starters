<script setup>
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { ref, computed } from "vue";

const version = ref(0); // Reactive trigger

const stxAddress = computed({
  get: function () {
    return isConnected()
      ? getLocalStorage()?.addresses?.stx?.[0]?.address
      : undefined;
  },
});

async function handleConnect() {
  try {
    await connect();
    version.value++; // Trigger re-mount
  } catch (error) {
    console.error("Failed to connect:", error);
    // Optionally, handle connection error state here
  }
}

function handleDisconnect() {
  disconnect();
  version.value++; // Trigger re-mount
}
</script>

<template>
  <div :key="version">
    <div v-if="stxAddress">
      <button @click="handleDisconnect">Disconnect Wallet</button>
      <p>STX Address: {{ stxAddress }}</p>
    </div>
    <div v-else>
      <button @click="handleConnect">Connect Wallet</button>
    </div>
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
