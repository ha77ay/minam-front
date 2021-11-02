import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Name = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h2>Hello!! {query.name} </h2>
      <Link href="/">
        Move to /
      </Link>
    </div>
  );
};

export default Name;