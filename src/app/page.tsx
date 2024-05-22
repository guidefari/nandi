import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <ul className="flex flex-col gap-8 m-4">
      <li>
        <Link href={"/one"}>Option one</Link>
      </li>
      <li>
        <Link href={"/two"}>Option two</Link>
      </li>
      <li>
        <Link href={"/three"}>Option three</Link>
      </li>
    </ul>
  )
}
