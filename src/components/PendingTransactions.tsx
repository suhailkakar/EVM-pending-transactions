import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { columns } from "../utils/table/columns";
import Card from "./shared/Card";

export default function PendingTransactions({ node }) {
  const [data, setData] = useState([]);

  const provider = new ethers.providers.WebSocketProvider(node);

  const handlePending = async (hash) => {
    const tx = await provider.getTransaction(hash);
    if (tx) {
      setData((oldTx) => [tx, ...oldTx]);
    }
  };

  useEffect(() => {
    provider.on("pending", handlePending);
    return () => {
      provider.removeAllListeners("pending");
    };
  }, []);

  return (
    <Card>
      <DataTable
        title="Pending Transactions"
        columns={columns}
        data={data}
        pagination
      />
    </Card>
  );
}
