import Product from "../product-preview"

export default async function RelatedProducts({
  product,
}: any) {

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          Related products
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          You might also want to check out these products.
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {/* {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} />
          </li>
        ))} */}

        <li key={product.id}>
          <Product region={null} product={product} />
        </li>
      </ul>
    </div>
  )
}
