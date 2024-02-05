import { InferGetServerSidePropsType } from "next/types";
import React from "react";
import { makeData, Person } from "@/makeData";
import {
  getCoreRowModel,
  getGroupedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import Layout from "@/components/Layout";
import CustomTable from "@/components/CustomTable";

const { accessor } = createColumnHelper<Person>();

export default function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const columns = React.useMemo(
    () => [
      accessor("firstName", {
        cell: (info) => info.getValue(),
        header: () => <span>First</span>,
        footer: (props) => props.column.id,
      }),

      accessor("lastName", {
        cell: (info) => info.getValue(),
        header: () => <span>Last</span>,
        footer: (props) => props.column.id,
      }),

      accessor(({ firstName, lastName }) => `${firstName} ${lastName}`, {
        id: "fullName",
        header: "Full",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),

      accessor("status", {
        cell: (info) => info.getValue(),
        header: () => <span>Status</span>,
        footer: (props) => props.column.id,
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
  });

  return (
    <Layout>
      <CustomTable table={table} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const data = makeData(1000);
  return {
    props: {
      data,
    },
  };
}
