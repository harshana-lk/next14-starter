"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavigationTestPage = () => {
  // Client side Navigation
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  const handleClick = () => {
    console.log("Clicked");
    router.push("/");
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here
      </Link>
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
};

export default NavigationTestPage;
