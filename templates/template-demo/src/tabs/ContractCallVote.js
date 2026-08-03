import { request } from "@stacks/connect";
import { Cl, cvToValue, fetchCallReadOnlyFunction } from "@stacks/transactions";
import { useState } from "react";
import { getStxAddress, NETWORK } from "../stacks";

const CONTRACT_ADDRESS = "ST10GH0ED2YA6AN2BT94N75KMVJAC3DGARE3W1VP9";
const CONTRACT_NAME = "slight-crimson-ape";

const ContractCallVote = ({ addTx }) => {
  const [votes, setVotes] = useState();
  const [pick, setPick] = useState();

  async function vote() {
    try {
      // `request("stx_callContract")` replaces `doContractCall` from v7.
      // It resolves with the txid instead of using `onFinish`/`onCancel`.
      const response = await request("stx_callContract", {
        contract: `${CONTRACT_ADDRESS}.${CONTRACT_NAME}`,
        functionName: "vote",
        functionArgs: [Cl.stringUtf8(pick)],
        network: NETWORK,
      });

      console.log("response", response);
      addTx(response.txid);
    } catch (error) {
      // the user canceled, or the wallet returned an error
      console.error("error", error);
    }
  }

  async function refreshCount() {
    // Read-only calls don't need a wallet — they hit a Stacks API node.
    // v7 renamed `callReadOnlyFunction` to `fetchCallReadOnlyFunction`.
    const result = await fetchCallReadOnlyFunction({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: "get-data",
      functionArgs: [],
      network: NETWORK,
      senderAddress: getStxAddress() || CONTRACT_ADDRESS,
    });

    // `cvToValue` turns the returned Clarity tuple into a plain JS object
    const data = cvToValue(result);
    setVotes({
      apple: Number(data.apple.value),
      orange: Number(data.orange.value),
    });
  }

  return (
    <div className="tab">
      {/* intro */}
      <h2>Calling a Contract</h2>
      <p>
        This tab shows the interaction of a simple voting contract. We're
        comparing apples to oranges. Vote for your favorite!
      </p>

      {/* example */}
      <div className="frame">
        <p>
          Check the current results of the vote on the left. Choose a fruit and
          broadcast your vote to the blockchain on the right.
        </p>
        <div className="cols">
          <div className="box">
            <p>
              To get/refresh the vote results we call a <code>readonly</code>{" "}
              function.
            </p>
            {votes && (
              <div>
                <span>Total Votes: {votes.apple + votes.orange}</span>
                <progress
                  max="100"
                  value={(votes.apple / (votes.apple + votes.orange)) * 100}
                />
                {` ${votes.apple}x 🍎`}
                <br />
                <progress
                  max="100"
                  value={(votes.orange / (votes.apple + votes.orange)) * 100}
                />
                {` ${votes.orange}x 🍊`}
                <br />
              </div>
            )}
            <br />
            <button onClick={refreshCount}>Refresh Results</button>
          </div>
          <div
            className="ContractCallVote-vote box"
            onChange={(e) => setPick(e.target.value)}
          >
            <p>
              Using <code>request("stx_callContract")</code> we can call smart
              contracts on the Stacks blockchain.
            </p>
            <label htmlFor="radio-apple">
              <input type="radio" id="radio-apple" name="pick" value="🍎" />
              🍎
            </label>
            <label htmlFor="radio-orange">
              <input type="radio" id="radio-orange" name="pick" value="🍊" />
              🍊
            </label>
            <br />
            {pick ? (
              <button onClick={vote}>Vote for {pick}</button>
            ) : (
              <button disabled>Pick 🍎&nbsp; or 🍊</button>
            )}
          </div>
        </div>
        {/* file name */}
        <small>
          <code>tabs/ContractCallVote.js</code>
        </small>
      </div>
    </div>
  );
};

export default ContractCallVote;
