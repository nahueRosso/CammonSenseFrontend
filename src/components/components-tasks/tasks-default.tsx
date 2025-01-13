"use client";

import * as React from "react";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type TypeTaskDefault = {
  id: string;
  title: string;
  type: "Trade" | "Analysis" | "Bug" | "Feature";
  status: "backlog" | "in progress" | "done" | "canceled" | "todo";
  priority: "low" | "medium" | "high";
};

export const columnsDefault: ColumnDef<TypeTaskDefault>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Task",
    cell: ({ row }) => <div className="font-mono">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string;
      return (
        <Badge variant={type === "Bug" ? "destructive" : "default"}>
          {type}
        </Badge>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "done"
              ? "success"
              : status === "canceled"
              ? "destructive"
              : "secondary"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      return (
        <Badge
          variant={
            priority === "high"
              ? "destructive"
              : priority === "medium"
              ? "default"
              : "secondary"
          }
        >
          {priority}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View task details</DropdownMenuItem>
            <DropdownMenuItem>Assign to team member</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Change status</DropdownMenuItem>
            <DropdownMenuItem>Update priority</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const data: TypeTaskDefault[] = [
  {
    id: "CRYPTO-001",
    title: "Implement automated trading strategy for BTC/ETH pair",
    type: "Trade",
    status: "in progress",
    priority: "high",
  },
  {
    id: "CRYPTO-002",
    title: "Analyze market volatility patterns in DeFi tokens",
    type: "Analysis",
    status: "todo",
    priority: "medium",
  },
  {
    id: "CRYPTO-003",
    title: "Fix wallet connection issue in trading dashboard",
    type: "Bug",
    status: "backlog",
    priority: "high",
  },
  {
    id: "CRYPTO-004",
    title: "Add support for new stablecoin pairs",
    type: "Feature",
    status: "done",
    priority: "medium",
  },
  {
    id: "CRYPTO-005",
    title: "Optimize gas fee calculation algorithm",
    type: "Feature",
    status: "in progress",
    priority: "medium",
  },
  {
    id: "CRYPTO-006",
    title: "Optimize gas fee calculation algorithm",
    type: "Feature",
    status: "in progress",
    priority: "medium",
  },
];

  export const data2: TypeTaskDefault[] = [
    {
      id: "Transaction-002",
      title: "Implement BTC/ETH pair",
      type: "Trade",
      status: "in progress",
      priority: "high",
    },
  ]

