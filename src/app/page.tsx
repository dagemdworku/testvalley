import BannerMain from "@/components/banner-main";
import DiscountPaginated from "@/components/discount-paginated";
import Footer from "@/components/footer";
import ShortcutMain from "@/components/shortcut-main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <BannerMain />
      <ShortcutMain />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <DiscountPaginated />
      <Footer />
    </main>
  );
}
