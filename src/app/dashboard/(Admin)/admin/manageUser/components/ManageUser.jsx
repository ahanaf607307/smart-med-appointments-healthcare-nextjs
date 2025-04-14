"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

export function TableDemo() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllUsers`
      );
      const users = await res.json();
      setAllUsers(users);
    };

    getAllUsers();
  }, []);

  console.log(allUsers);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allUsers.map((invoice) => (
          <TableRow key={invoice._id}>
            <TableCell className="font-medium">{invoice.displayName}</TableCell>
            <TableCell>{invoice.email}</TableCell>
            <TableCell>{invoice.userType}</TableCell>
            <TableCell className={"flex justify-end"}>
              <Select value={invoice.Status} onValueChange={invoice.setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status Update" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Update</SelectItem>
                  <SelectItem value="Doctor">Doctor</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
