import ProductDetails from "@/components/product-category/product-details";

function Page({ params }: { params: { id: string } }) {
  return (
    <main>
      <ProductDetails pid={params.id} />
    </main>
  );
}

export default Page;
