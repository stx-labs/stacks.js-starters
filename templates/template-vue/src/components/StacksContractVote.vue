<script setup>
import { ref } from 'vue'
import { request } from '@stacks/connect'
import { Cl } from '@stacks/transactions'
import { NETWORK, connected, explorerUrl } from '../stacks'

const CONTRACT = 'ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract'

const txid = ref(null)
const error = ref(null)

async function vote(pick) {
  txid.value = null
  error.value = null
  try {
    const response = await request('stx_callContract', {
      contract: CONTRACT,
      functionName: 'vote',
      functionArgs: [Cl.stringUtf8(pick)],
      network: NETWORK,
    })
    txid.value = response.txid
  } catch (e) {
    // the user cancelled, or the wallet returned an error
    error.value = e?.message ?? String(e)
  }
}
</script>

<template>
  <div v-if="connected" class="stacks-card">
    <p>Vote via smart contract</p>
    <div class="stacks-actions">
      <button type="button" @click="vote('🍊')">
        Vote for 🍊
      </button>
      <button type="button" @click="vote('🍎')">
        Vote for 🍎
      </button>
    </div>
    <p v-if="txid">
      <a :href="explorerUrl(txid)" target="_blank">View transaction</a>
    </p>
    <p v-else-if="error">{{ error }}</p>
  </div>
</template>
