
import BlogSection from "@/components/blogs/blog-section";
import Entertainment from "@/components/entertainment/entertainment";
import Explore from "@/components/explore-more/explore";
import Banner from "@/components/home-banner/banner";
import NewListing from "@/components/new-physical-listing/new-listing";

export default function Page() {
  return (
    <main>
      <Banner />
      <NewListing />
      <Entertainment />
      <Explore />
      <BlogSection />
    </main>
  )
}
