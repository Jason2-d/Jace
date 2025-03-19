import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-15 py-5 font-[family-name:var(--font-geist-sans)]">
      <section>
        <nav className="flex items-center gap-7">          
          <div className="flex">
            <img src="/images/logo.svg" alt="logo_image" width={28} height={32} />
          <h2 className="font-semibold text-2xl">Landwind</h2>
          </div>
          <ul className="outline-none flex space-x-[20px]">
            <li><a href="#">Company</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
          <div>
            <Button>Login</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </section>
    </div>
  );
}
