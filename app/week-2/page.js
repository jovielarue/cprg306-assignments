import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-text text-4xl font-bold">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}
