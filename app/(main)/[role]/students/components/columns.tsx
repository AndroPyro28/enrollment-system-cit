"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ColumnDef } from "@tanstack/react-table";
import {
  Archive,
  ArrowUpDown,
  Copy,
  Eye,
  MoreHorizontal,
  Pencil,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { capitalizeWords, cn } from "@/lib/utils";
import Avatar from "@/components/Avatar";
import { useToast } from "@/components/ui/use-toast";

export const columns: ColumnDef<any>[] =
  [
    // {
    //   id: "counter",
    //   header: () => {
    //     return <div className="sr-only">Counter</div>;
    //   },
    //   cell: ({ row }) => {
    //     const index = row.index + 1;

    //     return <div>{index}</div>;
    //   },
    // },
    // add id dont show it
    {
      accessorKey: "id",
      header: () => {
        return <div className="sr-only dark:text-white">Id</div>;
      },
      cell: ({ row }) => {
        const id = row.getValue("id") as string;

        return <div className="sr-only dark:text-white">{id}</div>;
      },
    },
    {
      accessorKey: "len",
      accessorFn: (row) => {
        const studentNumber = row.profile.studentNumber;
        return studentNumber;
      },
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className=" dark:text-white flex justify-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            LRN
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const studentNumber = row.original.profile.studentNumber;
        return (
          <div className="dark:text-white flex justify-center">
            {studentNumber}
          </div>
        );
      },
    },
    {
      accessorKey: "fullname",
      accessorFn: (row) => {
        const firstname = row.profile.firstname;
        const middlename = row.profile.middlename?.charAt(0);
        const lastname = row.profile.lastname;
        const fullname = `${firstname} ${middlename}. ${lastname}`;

        return fullname;
      },
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className=" dark:text-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Full Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const firstname = row.original.profile.firstname;
        const middlename = row.original.profile.middlename?.charAt(0);
        const lastname = row.original.profile.lastname;

        const fullname = `${firstname} ${middlename}. ${lastname}`;
        return (
          <div className="flex justify-start whitespace-nowrap text-left w-fit">
            {fullname}
          </div>
        );
      },
    },
    {
      accessorKey: "avatar",
      accessorFn: (row) => {
        const email = row.email;
        return email;
      },
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className=" dark:text-white flex justify-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => {
        const image = row.original.image;
        const email = row.original.email;
        return (
          <div className={`flex items-center`}>
            <Avatar src={image} className="mr-3" /> {email}
          </div>
        );
      },
    },
    {
      id: "actions",
      
      cell: ({ row }) => {
        const { id, profile } = row.original;

        const onCopy = (id: string) => {
        const { toast } = useToast()

          navigator.clipboard.writeText(id);
          toast({
            title: "Department ID copied to clipboard.",
            variant: "default"
          })

        //   toast.success("Department ID copied to clipboard.");
        };

        return (
          <div className="flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-4 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() =>
                    profile.studentNumber &&
                    onCopy(profile.studentNumber.toString())
                  }
                >
                  <Copy className="mr-2 h-4 w-4" /> Copy LRN
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => id && onCopy(id)}>
                  <Copy className="mr-2 h-4 w-4" /> Copy ID
                </DropdownMenuItem>
                <Link href={`/admin/students/${id}`}>
                  <DropdownMenuItem>
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </DropdownMenuItem>
                </Link>
              
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];