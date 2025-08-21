<script setup>
import { isConnected, request } from "@stacks/connect";
import { Cl } from "@stacks/transactions";
import { ref, onMounted } from "vue";

const connected = ref(false);

onMounted(() => {
  connected.value = isConnected();
});

async function vote(pick) {
  try {
    const result = await request("stx_callContract", {
      contract:
        "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract",
      functionName: "vote",
      functionArgs: [Cl.stringUtf8(pick)],
      postConditions: [],
      postConditionMode: "deny",
      network: "testnet",
    });
    console.log("result:", result);
    window
      .open(
        `https://explorer.hiro.so/txid/${result.txid}?chain=testnet`,
        "_blank"
      )
      ?.focus();
  } catch (e) {
    console.error(e);
  }
}
</script>

<template>
  <div v-if="connected">
    <p>Vote via Smart Contract</p>
    <button @click="vote('🍊')">Vote for 🍊</button>
    <button @click="vote('🍎')">Vote for 🍎</button>
  </div>
</template>

<style scoped>
div {
  margin-top: 16px;
}

button {
  background-color: rgba(148, 48, 148, 0.2);
  border: 2px solid rgb(148, 48, 148);
  border-radius: 14px;
  padding: 8px 12px;
  margin: 4px;
}
</style>
