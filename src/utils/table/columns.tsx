import { ethers } from "ethers";

export const columns = [
  {
    name: "Hash",
    selector: (row) => <a className="text-purple-900">{row.hash}</a>,
  },
  {
    name: "Gas Limit",
    selector: (row) => row.gasLimit.toString(),
    sortable: true,
  },
  {
    name: "From",
    selector: (row) => row.from,
  },
  {
    name: "To",
    selector: (row) => row.to,
  },
  {
    name: "Gas Price",
    selector: (row) =>
      Number(ethers.utils.formatEther(row.gasPrice)).toFixed(2) + " MATIC",
  },
];
