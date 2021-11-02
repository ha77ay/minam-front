import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Name = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>Hello!!</h2>
      <Link href="/">
        Move to /
      </Link>
    </div>
  );
};

export default Name;