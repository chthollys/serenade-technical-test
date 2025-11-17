import type { Data } from "@/utils/types";
import type { ReactNode } from "react";

interface TableProps {
  data: Data[];
}

export default function Table({ data }: TableProps) {
  return (
    <table>
      <tr>
        <TableHead>userId</TableHead>
        <TableHead>id</TableHead>
        <TableHead>title</TableHead>
        <TableHead>body</TableHead>
      </tr>
      {data.map(({ id, body, title, userId }) => {
        return (
          <tr key={id}>
            <TableCell>{userId}</TableCell>
            <TableCell>{id}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{body}</TableCell>
          </tr>
        );
      })}
    </table>
  );
}

function TableHead({ children }: { children: ReactNode }) {
  return <th className="border-2">{children}</th>;
}

function TableCell({ children }: { children: ReactNode }) {
  return <th className="border-2">{children}</th>;
}
