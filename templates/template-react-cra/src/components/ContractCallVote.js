import { request } from "@stacks/connect";
import { Cl } from "@stacks/transactions";

const ContractCallVote = ({ connected }) => {
  async function vote(pick) {
    try {
      // `request` replaces the v7 `openContractCall`/`doContractCall` helpers
      const response = await request("stx_callContract", {
        contract:
          "ST39MJ145BR6S8C315AG2BD61SJ16E208P1FDK3AK.example-fruit-vote-contract",
        functionName: "vote",
        functionArgs: [Cl.stringUtf8(pick)],
        network: "testnet",
      });

      console.log("response:", response);
      window
        .open(
          `https://explorer.hiro.so/txid/${response.txid}?chain=testnet`,
          "_blank"
        )
        .focus();
    } catch (error) {
      // the user canceled, or the wallet returned an error
      console.error("error:", error);
    }
  }

  if (!connected) {
    return null;
  }

  return (
    <div>
      <p>Vote via Smart Contract</p>
      <button className="Vote" onClick={() => vote("🍊")}>
        Vote for 🍊
      </button>
      <button className="Vote" onClick={() => vote("🍎")}>
        Vote for 🍎
      </button>
    </div>
  );
};

export default ContractCallVote;
