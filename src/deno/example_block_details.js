import { Network } from "@dusk/w3sper";

const network = await Network.connect("https://testnet.nodes.dusk.network");

const BLOCK_ID =
	"ff044f582ca668b4a9960103b8c25acb52c6920a08d311ade8abd479f2e670fc";
const BLOCK_HEIGHT = parseFloat("9097");

let query = `block(hash: "${BLOCK_ID}") {
  header {
    hash,
    gasLimit,
    height,
    prevBlockHash,
    seed,
    stateHash,
    timestamp,
    version
  },
  fees,
  gasSpent,
  reward,
  transactions {
    blockHash,
    blockHeight,
    blockTimestamp,
    err,
    gasSpent,
    id,
    tx {
      callData {
        contractId,
        data,
        fnName
      },
      gasLimit,
      gasPrice,
      id,
      isDeploy,
      memo,
      txType
    }
  }
}`;

let blockInfo = await network.query(query);

console.log(blockInfo);
console.log(typeof BLOCK_HEIGHT);

query = `block(height: "${BLOCK_HEIGHT}") {
  header {
    hash,
    gasLimit,
    height,
    prevBlockHash,
    seed,
    stateHash,
    timestamp,
    version
  },
  fees,
  gasSpent,
  reward,
  transactions {
    blockHash,
    blockHeight,
    blockTimestamp,
    err,
    gasSpent,
    id,
    tx {
      callData {
        contractId,
        data,
        fnName
      },
      gasLimit,
      gasPrice,
      id,
      isDeploy,
      memo,
      txType
    }
  }
}`;

blockInfo = await network.query(query);

console.log(blockInfo);

await network.disconnect();
