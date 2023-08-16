
import CategoryPage from "@/components/product-category/category-page"

function Page({params}:{params:{genres:string}}) {
  
    return (
      <main>
        <CategoryPage params={params} />
      </main>
    )
  }
  
  export default Page
  