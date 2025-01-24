import { Network } from "@dusk/w3sper";

const network = await Network.connect("https://testnet.nodes.dusk.network");
const TX_ID =
	"f8bbede502df102d1d3208297193654386fe0c5c66a969234320bbb0d646905a";
const query = `tx(hash: "${TX_ID}") {
    tx {
      id
      gasLimit
      gasPrice
      txType
      callData {
        contractId
        fnName
        data
      }
      isDeploy
      memo
    }
    err
    gasSpent
    blockHash
    blockHeight
    blockTimestamp
    id
    raw
  }`;
const transactionInfo = await network.query(query);

console.log(transactionInfo);

await network.disconnect();
