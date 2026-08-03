<script setup lang="ts">
import { connectWallet, connected, disconnectWallet, stxAddress } from '../stacks'
</script>

<template>
  <div class="card">
    <template v-if="connected">
      <p>
        Connected as <code>{{ stxAddress }}</code>
      </p>
      <button type="button" @click="disconnectWallet">Disconnect Wallet</button>
    </template>
    <button v-else type="button" @click="connectWallet">Connect Wallet</button>
  </div>
</template>
