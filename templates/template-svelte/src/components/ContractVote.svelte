<script>
  import { isConnected, request } from "@stacks/connect";
  import { Cl } from "@stacks/transactions";

  export async function vote(pick) {
    try {
      const result = await request("stx_callContract", {
        contract: "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract",
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

  let connected = isConnected();
</script>

{#if connected}
  <div>
    <p>Vote via Smart Contract</p>
    <button on:click={() => vote("🍊")}> Vote for 🍊 </button>
    <button on:click={() => vote("🍎")}> Vote for 🍎 </button>
  </div>
{/if}

<style>
  div {
    margin-top: 16px;
  }
</style>
