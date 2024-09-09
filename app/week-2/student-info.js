import Link from "next/link";

export default function StudentInfo() {
  return (
    <>
      <h2 className="text-text text-xl">Josh LaRue</h2>
      <Link
        href={"https://github.com/joshlarue"}
        className="text-xl text-text hover:text-pink"
      >
        this is a link to my github profile
      </Link>
    </>
  );
}
