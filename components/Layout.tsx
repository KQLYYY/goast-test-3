import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="p-5 space-y-5">
      <nav className="space-x-10 flex justify-center">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/table-basic">Basic Table</NavItem>
        <NavItem href="/table-grouped">w/ getGroupedRowModel</NavItem>
      </nav>
      {children}
    </div>
  );
}

function NavItem({ href, children }: { href: string } & PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Link
      className={`cursor-pointer text-blue-500 ${
        pathname === href && "underline"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
