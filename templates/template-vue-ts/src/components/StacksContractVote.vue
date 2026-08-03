<script setup lang="ts">
import { request } from '@stacks/connect'
import { Cl } from '@stacks/transactions'
import { NETWORK, connected, openExplorer } from '../stacks'

async function vote(pick: string) {
  try {
    const response = await request('stx_callContract', {
      contract: 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract',
      functionName: 'vote',
      functionArgs: [Cl.stringUtf8(pick)],
      network: NETWORK,
    })
    console.log('response:', response)
    if (response.txid) openExplorer(response.txid)
  } catch (error) {
    console.log('error:', error)
  }
}
</script>

<template>
  <div v-if="connected" class="card">
    <p>Vote via Smart Contract</p>
    <div class="options">
      <button type="button" @click="vote('🍊')">Vote for 🍊</button>
      <button type="button" @click="vote('🍎')">Vote for 🍎</button>
    </div>
  </div>
</template>

<style scoped>
.options {
  display: flex;
  gap: 8px;
  justify-content: center;
}
</style>
