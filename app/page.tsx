import { Cakeshop } from '@/components/component/cakeshop';
import Menu from '@/components/component/menu';
import { authOptions } from '@/lib/auth';
import { CakeIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const Home = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  if (session?.user) {
    return (
      <div>
        <header className="px-4 lg:px-6 h-14 flex items-center bg-red-950 text-primary-foreground">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <CakeIcon className="h-8 w-8" />
            <span className="px-3 text-xl font-semibold">Bakiezza</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <span className="px-96 text-xl font-thin">Welcome {session?.user.username}</span>
            <Link href="/menu" className="text-sm font-medium hover:underline underline-offset-4 " prefetch={false}>
              Menu
            </Link>
            <Link href="/signin" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Sign-out
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </header>
        <Cakeshop />
      </div>
    );
  }
  else {
    return (
      <div>
        <header className="px-4 lg:px-6 h-14 flex items-center bg-red-950 text-primary-foreground">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <CakeIcon className="h-8 w-8" />
            <span className="px-3 text-xl font-semibold">Bakiezza</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <span className="px-96 text-xl font-thin">Please Login</span>
            <Link href="/menu" className="text-sm font-medium hover:underline underline-offset-4 " prefetch={false}>
              Menu
            </Link>
            <Link href="/signin" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Sign-in
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </header>
        <Cakeshop />
      </div>
    );

  }
};

export default Home;

