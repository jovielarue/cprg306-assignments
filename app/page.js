import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-text text-4xl font-bold">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="flex flex-col gap-2">
        <Link href={"/week-2"} className={btnStyle}>
          Week 2
        </Link>
        <Link href={"/week-3"} className={btnStyle}>
          Week 3
        </Link>
        <Link href={"/week-4"} className={btnStyle}>
          Week 4
        </Link>
        <Link href={"/week-5"} className={btnStyle}>
          Week 5
        </Link>
        <Link href={"/week-6"} className={btnStyle}>
          Week 6
        </Link>
        <Link href={"/week-7"} className={btnStyle}>
          Week 7
        </Link>
        <Link href={"/week-8"} className={btnStyle}>
          Week 8
        </Link>
        <Link href={"/week-9"} className={btnStyle}>
          Week 9
        </Link>
      </ul>
    </main>
  );
}

const btnStyle =
  "px-3 py-2 text-text text-lg hover:text-lg bg-base w-fit hover:bg-pink font-bold";
