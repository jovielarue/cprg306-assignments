import Link from "next/link";

export default function StudentInfo() {
  return (
    <>
      <h2>Josh LaRue</h2>
      <Link href={"https://github.com/joshlarue"}>
        this is a link to my github profile
      </Link>
    </>
  );
}
