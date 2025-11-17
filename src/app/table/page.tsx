import { API_URL } from "@/utils/consts";
import { Data } from "@/utils/types";
import Table from "../components/Table";

const sample: Data[] = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

export default async function TablePage() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    return <p>API failed to fetch</p>;
  }

  const data = (await res.json()) as Data[];

  return (
    <>
      <Table data={data.slice(0, 20)} />
    </>
  );
}
