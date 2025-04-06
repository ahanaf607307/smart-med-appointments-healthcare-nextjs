'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react";

const invoices = [
    {
        Name: "Sokina begum",
        category: "Cardiologist",
        Role: "Doctor",
        status: "Active",
    },
    {
        Name: "Sokina begum",
        category: "Cardiologist",
        Role: "Doctor",
        status: "Active",
    },

    {
        Name: "Sokina begum",
        category: "Cardiologist",
        Role: "Doctor",
        status: "Active",
    },

]

export function TableDemo() {
    const [Status, setStatus] = useState("")
    console.log(Status);

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
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">{invoice.Name}</TableCell>
                        <TableCell>{invoice.category}</TableCell>
                        <TableCell>{invoice.Role}</TableCell>
                        <TableCell className={"flex justify-end"}>
                            <Select value={Status} onValueChange={setStatus}>
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
    )
}
