import Link from "next/link";
import React from "react";

const shopAndLearnLinks = [
  { name: "Store", href: "/store" },
  { name: "Mac", href: "/mac" },
  { name: "iPad", href: "/ipad" },
  { name: "iPhone", href: "/iphone" },
  { name: "Watch", href: "/watch" },
  { name: "Vision", href: "/vision" },
  { name: "AirPods", href: "/airpods" },
  { name: "TV & Home", href: "/tv-home" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Accessories", href: "/accessories" },
  { name: "Gift Cards", href: "/gift-cards" },
];

const servicesLinks = [
  { name: "Apple Music", href: "/apple-music" },
  { name: "Apple TV+", href: "/apple-tv-plus" },
  { name: "Apple Fitness+", href: "/apple-fitness-plus" },
  { name: "Apple News+", href: "/apple-news-plus" },
  { name: "Apple Arcade", href: "/apple-arcade" },
  { name: "iCloud", href: "/icloud" },
  { name: "Apple One", href: "/apple-one" },
  { name: "Apple Card", href: "/apple-card" },
  { name: "Apple Books", href: "/apple-books" },
  { name: "Apple Podcasts", href: "/apple-podcasts" },
  { name: "App Store", href: "/app-store" },
];

const accountLinks = [
  { name: "Manage Your Apple ID", href: "/apple-id" },
  { name: "Apple Store Account", href: "/store-account" },
  { name: "iCloud.com", href: "https://www.icloud.com" },
];

const storeLinks = [
  { name: "Find a Store", href: "/retail" },
  { name: "Genius Bar", href: "/retail/geniusbar" },
  { name: "Today at Apple", href: "/today" },
  { name: "Apple Camp", href: "/today/camp" },
  { name: "Apple Store App", href: "/apple-store-app" },
  { name: "Certified Refurbished", href: "/shop/refurbished" },
  { name: "Apple Trade In", href: "/trade-in" },
  { name: "Financing", href: "/financing" },
  { name: "Carrier Deals at Apple", href: "/carrier-deals" },
  { name: "Order Status", href: "/order-status" },
  { name: "Shopping Help", href: "/help" },
];

const businessLinks = [
  { name: "Apple and Business", href: "/business" },
  { name: "Shop for Business", href: "/retail/business" },
];

const educationLinks = [
  { name: "Apple and Education", href: "/education" },
  { name: "Shop for K-12", href: "/education/k12" },
  { name: "Shop for College", href: "/education/college" },
];

const healthcareLinks = [
  { name: "Apple in Healthcare", href: "/healthcare" },
  { name: "Health on Apple Watch", href: "/healthcare/health" },
];

const governmentLinks = [
  { name: "Shop for Government", href: "/r/store/government" },
  { name: "Shop for Veterans and Military", href: "/us/shop/goto/eppstore/veteransandmilitary" },
];

const valuesLinks = [
  { name: "Accessibility", href: "/accessibility" },
  { name: "Education", href: "/education" },
  { name: "Environment", href: "/environment" },
  { name: "Inclusion and Diversity", href: "/diversity" },
  { name: "Privacy", href: "/privacy" },
  { name: "Racial Equity and Justice", href: "/racial-equity-justice-initiative" },
  { name: "Supplier Responsibility", href: "/supplier-responsibility" },
];

const aboutLinks = [
  { name: "Newsroom", href: "/newsroom" },
  { name: "Apple Leadership", href: "/leadership" },
  { name: "Career Opportunities", href: "/careers" },
  { name: "Investors", href: "/investor" },
  { name: "Ethics & Compliance", href: "/compliance" },
  { name: "Events", href: "/apple-events" },
  { name: "Contact Apple", href: "/contact" },
];

type FooterColumnProps = {
  title: string;
  links: { name: string; href: string }[];
};

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col space-y-2">
    <h3 className="font-semibold text-xs text-zinc-900 mb-2">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] pt-4 text-[#86868b]">
      <div className="container-apple py-8">
        <div className="border-b border-zinc-300 pb-8 mb-4">
          <p className="text-xs leading-normal mb-4">
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in-store and online
            trade-in. Some stores may have additional requirements. Apple or its
            trade-in partners reserve the right to refuse or limit quantity of
            any trade-in transaction for any reason. More details are available
            from Apple's trade-in partner for trade-in and recycling of eligible
            devices. Restrictions and limitations may apply.
          </p>
          <p className="text-xs leading-normal">
            Apple Vision Pro has not been authorized as required by the rules of
            the Federal Communications Commission. This device is not, and may
            not be, offered for sale or lease, or sold or leased, until
            authorization is obtained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-zinc-300 pb-8">
          <div className="space-y-8">
            <FooterColumn title="Shop and Learn" links={shopAndLearnLinks} />
            <FooterColumn title="Apple Wallet" links={[
              { name: "Wallet", href: "/wallet" },
              { name: "Apple Card", href: "/apple-card" },
              { name: "Apple Pay", href: "/apple-pay" },
              { name: "Apple Cash", href: "/apple-cash" },
            ]} />
          </div>

          <div className="space-y-8">
            <FooterColumn title="Account" links={accountLinks} />
            <FooterColumn title="Entertainment" links={servicesLinks} />
          </div>

          <div className="space-y-8">
            <FooterColumn title="Apple Store" links={storeLinks} />
          </div>

          <div className="space-y-8">
            <FooterColumn title="For Business" links={businessLinks} />
            <FooterColumn title="For Education" links={educationLinks} />
            <FooterColumn title="For Healthcare" links={healthcareLinks} />
            <FooterColumn title="For Government" links={governmentLinks} />
          </div>

          <div className="space-y-8">
            <FooterColumn title="Apple Values" links={valuesLinks} />
            <FooterColumn title="About Apple" links={aboutLinks} />
          </div>
        </div>

        <div className="py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xs">
              More ways to shop: <a href="/retail" className="text-blue-500 hover:underline">Find an Apple Store</a> or <a href="/retailer" className="text-blue-500 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex space-x-4">
              <Link href="/legal/privacy" className="text-xs text-zinc-500 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-use" className="text-xs text-zinc-500 hover:underline">
                Terms of Use
              </Link>
              <Link href="/legal/sales-policy" className="text-xs text-zinc-500 hover:underline">
                Sales and Refunds
              </Link>
              <Link href="/legal" className="text-xs text-zinc-500 hover:underline">
                Legal
              </Link>
              <Link href="/sitemap" className="text-xs text-zinc-500 hover:underline">
                Site Map
              </Link>
            </div>
            <span className="text-xs">United States</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-xs">Copyright © 2025 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
