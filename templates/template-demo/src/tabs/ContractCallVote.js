import { getLocalStorage, isConnected, request } from "@stacks/connect";
import { callReadOnlyFunction, stringUtf8CV } from "@stacks/transactions";
import { useState } from "react";

const ContractCallVote = ({ addTx }) => {
  const [votes, setVotes] = useState();
  const [pick, setPick] = useState();

  if (!isConnected()) {
    return <p>Connect wallet first</p>;
  }

  const address = getLocalStorage().addresses.stx[0].address;

  async function vote() {
    try {
      const result = await request("stx_callContract", {
        network: "testnet",
        contract:
          "ST10GH0ED2YA6AN2BT94N75KMVJAC3DGARE3W1VP9.slight-crimson-ape",
        functionName: "vote",
        functionArgs: [stringUtf8CV(pick)],
        postConditionMode: "deny",
        postConditions: [],
      });
      console.log("result", result);

      addTx(result.txId);
    } catch (error) {
      console.error(error);
    }
  }

  async function refreshCount() {
    const result = await callReadOnlyFunction({
      contractAddress: "ST10GH0ED2YA6AN2BT94N75KMVJAC3DGARE3W1VP9",
      contractName: "slight-crimson-ape",
      functionName: "get-data",
      functionArgs: [],
      network: "testnet",
      senderAddress: address,
    });
    setVotes({
      apple: Number(result.data.apple.value),
      orange: Number(result.data.orange.value),
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
              Using <code>doContractCall</code> we can call smart contracts on
              the Stacks blockchain.
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
