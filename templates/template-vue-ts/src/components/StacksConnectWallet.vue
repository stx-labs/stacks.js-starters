<script setup lang="ts">
import {
  connect,
  disconnect,
  getLocalStorage,
  isConnected,
} from "@stacks/connect";
import { ref, onMounted } from "vue";

const connected = ref(false);
const address = ref("");

function updateState() {
  connected.value = isConnected();
  const storage = getLocalStorage();
  if (connected.value && storage && storage.addresses?.stx?.[0]?.address) {
    address.value = storage.addresses.stx[0].address;
  }
}

onMounted(() => {
  updateState();
});

async function authenticate() {
  await connect({
    network: "testnet",
  });
  updateState();
}

function handleDisconnect() {
  disconnect();
  updateState();
}
</script>

<template>
  <div v-if="connected">
    <button @click="handleDisconnect">Disconnect Wallet</button>
    <p>STX Address: {{ address }}</p>
  </div>
  <div v-else>
    <button @click="authenticate">Connect Wallet</button>
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
