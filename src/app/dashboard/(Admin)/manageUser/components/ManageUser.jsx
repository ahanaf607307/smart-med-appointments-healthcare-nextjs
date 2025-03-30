import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
                        <TableCell className="text-right">{invoice.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    )
}
