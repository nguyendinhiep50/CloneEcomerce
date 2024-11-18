import { Metadata } from "next"
import CollectionTemplate from "@modules/collections/templates"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

type Props = {
  params: { handle: string; countryCode: string }
  searchParams: {
    page?: string
    sortBy?: SortOptions
  }
}

export const PRODUCT_LIMIT = 12


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata: Metadata = {
    title: `Page for `,  // Example dynamic title based on params
    description: 'This is a sample page description',  // Example description
  };

  return metadata;
}

