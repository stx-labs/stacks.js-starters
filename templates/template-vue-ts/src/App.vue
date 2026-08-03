<script setup lang="ts">
import StacksConnectWallet from './components/StacksConnectWallet.vue'
import StacksContractVote from './components/StacksContractVote.vue'
</script>

<template>
  <h1>Vite + Vue + Stacks.js</h1>

  <StacksConnectWallet />
  <StacksContractVote />

  <p>
    Edit <code>src/components/StacksContractVote.vue</code> to change the contract call.
  </p>
  <p>
    <a href="https://docs.hiro.so/stacks.js" target="_blank">Stacks.js documentation</a>
  </p>
</template>
