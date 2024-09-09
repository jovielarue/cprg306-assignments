export default function Item({ name, quantity, category }) {
  return (
    <ul className="bg-base border-2 border-pink rounded-md p-3 flex flex-col gap-1">
      <li className="text-text">{name}</li>
      <li className="text-text">{quantity}</li>
      <li className="text-text">{category}</li>
    </ul>
  );
}
