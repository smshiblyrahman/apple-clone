import { HeroSection } from "@/components/home/HeroSection";
import { ProductGrid } from "@/components/home/ProductGrid";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Home() {
  // Sample data for demonstration
  // In a real app, this would come from an API or CMS
  const heroData = {
    title: "Apple Watch Series 10",
    subtitle: "Thinstant classic.",
    links: [
      { label: "Learn more", href: "/apple-watch-series-10", isPrimary: true },
      { label: "Buy", href: "/shop/buy_watch/apple_watch_series_10" },
    ],
    productImage: "https://ext.same-assets.com/2729233420/2169552714.png",
    backgroundColor: "#000000",
    textColor: "light" as const,
  };

  const secondHeroData = {
    title: "iPad Pro",
    subtitle: "Unbelievably thin. Incredibly powerful.",
    additionalText: "Built for Apple Intelligence.",
    links: [
      { label: "Learn more", href: "/ipad-pro", isPrimary: true },
      { label: "Buy", href: "/shop/buy_ipad/ipad_pro" },
    ],
    backgroundColor: "#000000",
    textColor: "light" as const,
    productImage: "/images/ipad-pro.jpg",
  };

  const thirdHeroData = {
    title: "iPhone",
    subtitle: "Meet the iPhone 16 family.",
    additionalText: "Built for Apple Intelligence.",
    links: [
      { label: "Learn more", href: "/iphone", isPrimary: true },
      { label: "Shop iPhone", href: "/shop/buy_iphone" },
    ],
    backgroundColor: "#f5f5f7",
    textColor: "dark" as const,
    productImage: "/images/iphone-16.jpg",
  };

  // Product grid data
  const productsData = [
    {
      title: "Mother's Day",
      subtitle: "Find the perfect gift for Mom.",
      image: "/images/mothers-day.jpg",
      backgroundColor: "#f5f5f7",
      links: [
        { label: "Shop", href: "/us/shop/goto/store", isPrimary: true },
      ],
    },
    {
      title: "MacBook Air",
      subtitle: "Sky high performance with M4.",
      additionalText: "Built for Apple Intelligence.",
      image: "/images/macbook-air.jpg",
      backgroundColor: "#f5f5f7",
      links: [
        { label: "Learn more", href: "/macbook-air", isPrimary: true },
        { label: "Buy", href: "/shop/buy_mac/macbook_air" },
      ],
    },
  ];

  const secondProductsData = [
    {
      title: "Mac does that.",
      subtitle: "See how easy it is to switch to Mac.",
      image: "/images/mac-does-that.jpg",
      backgroundColor: "#f5f5f7",
      links: [
        { label: "Learn more", href: "/mac/mac-does-that", isPrimary: true },
      ],
    },
    {
      title: "Apple Trade In",
      subtitle: "Get $170-$630 in credit when you trade in iPhone 12 or higher.",
      image: "/images/trade-in.jpg",
      backgroundColor: "#f5f5f7",
      links: [
        { label: "See your estimate", href: "/shop/trade_in", isPrimary: true },
      ],
    },
  ];

  const thirdProductsData = [
    {
      title: "Carrier deals at Apple",
      subtitle: "Get up to $1000 in credit on a new iPhone. Trade-in may be required.",
      image: "/images/carrier-deals.jpg",
      backgroundColor: "#f5f5f7",
      links: [
        { label: "Find your deal", href: "/shop/buy_iphone/carrier_offers", isPrimary: true },
      ],
    },
    {
      title: "Apple Card",
      subtitle: "Get up to 3% Daily Cash back with every purchase.",
      image: "/images/apple-card.jpg",
      backgroundColor: "#f5f5f7",
      links: [
        { label: "Learn more", href: "/apple-card", isPrimary: true },
        { label: "Apply now", href: "/apple-card/apply" },
      ],
    },
  ];

  return (
    <MainLayout>
      <HeroSection {...heroData} />
      <HeroSection {...secondHeroData} />
      <HeroSection {...thirdHeroData} />
      <ProductGrid products={productsData} columns={2} />
      <ProductGrid products={secondProductsData} columns={2} />
      <ProductGrid products={thirdProductsData} columns={2} />
    </MainLayout>
  );
}
