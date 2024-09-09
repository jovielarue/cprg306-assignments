import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-text text-4xl font-bold">shopping list</h1>
      <ItemList />
    </main>
  );
}
