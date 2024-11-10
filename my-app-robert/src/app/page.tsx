import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Nav from "@modules/layout/templates/nav"
import Footer from "@modules/layout/templates/footer"

export const metadata: Metadata = {
    title: "Robert Next.js Starter Template",
    description:
        "A performant frontend ecommerce starter template with Next.js 14 and Robert.",
}

export default async function Home() {
    return (
        <>
            <Nav />
            <Hero />
            <div className="py-12">
                <ul className="flex flex-col gap-x-6">
                    <FeaturedProducts />
                </ul>
            </div>
            <Footer />

        </>
    )
}
