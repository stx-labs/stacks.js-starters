<script setup>
import {
  connectWallet,
  connected,
  disconnectWallet,
  stxAddress,
} from '../stacks'
</script>

<template>
  <div class="stacks-card">
    <template v-if="connected">
      <button type="button" @click="disconnectWallet">
        Disconnect wallet
      </button>
      <p>
        Connected as <code>{{ stxAddress }}</code>
      </p>
    </template>
    <button v-else type="button" @click="connectWallet">
      Connect wallet
    </button>
  </div>
</template>
