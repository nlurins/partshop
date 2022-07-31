import "@fontsource/montserrat";

export const ShopSideBar = () => {
  return (
    <div className="max-w-[15%] flex flex-col font-['Montserrat'] text-white text-4xl font-semibold self-start h-auto">
        <h1 className="mb-[40%] text-6xl">All Products</h1>
        <ul className="gap-5 flex flex-col">
            <li>Parts</li>
            <li>Oils</li>
            <li>Tires</li>
            <li>example</li>
            <li>example</li>
        </ul>
    </div>
  )
}
