import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Cakeshop() {
  return (
    <div className="flex flex-col bg-orange-100 min-h-[100dvh]">
      {/* <header className="px-4 lg:px-6 h-14 flex items-center bg-red-950 text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CakeIcon className="h-8 w-8" />
          <span className="px-3 text-xl font-semibold">Bakiezza</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/image/cakebanner.jpg"
                width="550"
                height="550"
                alt="Delicious Cakes"
                className="ml-40 mr-10 aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter py-2 text-red-900 sm:text-5xl xl:text-6xl/none">
                    Indulge in the Sweetest Treats
                  </h1>
                  <p className="max-w-[600px] text-black md:text-xl"> 
                    Discover the art of baking at Bakiezza, where every bite is a delightful experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/menu"
                    className="inline-flex h-10 items-center justify-center hover:bg-red-950 rounded-md bg-amber-900 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Menu
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Place Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-red-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-xl font-semibold text-orange-200">Our Cakes</div>
                <h2 className="text-3xl font-bold py-2 align-middle tracking-tighter text-slate-200 sm:text-5xl">Indulge in Our Delectable Creations</h2>
                <p className="max-w-[900px] text-orange-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From classic flavors to unique and innovative designs, our cakes are made with the finest ingredients
                  and baked with love.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/image/cakemenu.jpg"
                width="1200"
                height="800"
                alt="Cake Menu"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl  text-slate-200 font-bold">Classic Flavors</h3>
                      <p className="text-orange-200">
                        Indulge in our timeless vanilla, chocolate, and red velvet cakes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl  text-slate-200 font-bold">Specialty Cakes</h3>
                      <p className="text-orange-200">
                        Explore our unique and creative cake designs, perfect for any occasion.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl  text-slate-200 font-bold">Custom Orders</h3>
                      <p className="text-orange-200">
                        Let us bring your vision to life with a custom-designed cake.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-red-900 md:text-4xl/tight">
                Baking with Passion and Tradition
              </h2>
              <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Bakiezza, we're dedicated to creating the perfect balance of flavors and artistry in every
                cake we bake. Our family-owned business has been serving the community for over 20 years, and we take
                pride in using only the freshest, high-quality ingredients.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="/ordernow"
                className="inline-flex h-10 items-center hover:bg-red-950 justify-center rounded-md bg-red-900 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Order Now
              </Link>
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3 ">
              <h2 className="text-3xl font-bold tracking-tighter text-red-900 md:text-4xl/tight">Let's Bake Something Together</h2>
              <p className="mx-auto max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to place your order or inquire about our custom cake options.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Name" className="max-w-lg" />
                <Input type="email" placeholder="Email" className="max-w-lg" />
                <Textarea placeholder="Message" className="max-w-lg" rows={4} />
                <Button type="submit" className="bg-red-900 hover:bg-red-950">Submit</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-red-950 text-muted-foreground">
        <p className="text-xs text-white"> 2024 Bakiezza . All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs text-white hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs text-white hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CakeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h0.01" />
      <path d="M12 4h0.01" />
      <path d="M17 4h0.01" />
    </svg>
  )
}
