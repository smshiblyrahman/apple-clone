import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  backgroundColor?: string;
  textColor?: "dark" | "light";
  links?: {
    label: string;
    href: string;
    isPrimary?: boolean;
  }[];
  logoImage?: string;
  additionalText?: string;
}

function ProductCard({
  title,
  subtitle,
  description,
  image,
  backgroundColor = "#f5f5f7",
  textColor = "dark",
  links,
  logoImage,
  additionalText,
}: ProductCardProps) {
  const textColorClass = textColor === "dark" ? "text-zinc-900" : "text-white";

  return (
    <div
      className="flex flex-col items-center justify-center rounded-2xl overflow-hidden"
      style={{ backgroundColor }}
    >
      <div className="w-full p-6 md:p-10 text-center">
        {logoImage ? (
          <div className="mb-4 flex justify-center">
            <Image
              src={logoImage}
              alt={title}
              width={140}
              height={40}
              className="h-auto"
            />
          </div>
        ) : (
          <h3
            className={`text-3xl font-semibold tracking-tight ${textColorClass}`}
          >
            {title}
          </h3>
        )}

        {subtitle && (
          <h4 className={`text-xl ${textColorClass} mt-1`}>{subtitle}</h4>
        )}

        {description && (
          <p className={`text-sm ${textColorClass} mt-2`}>{description}</p>
        )}

        {additionalText && (
          <p className={`text-sm ${textColorClass} mt-2`}>{additionalText}</p>
        )}

        {links && links.length > 0 && (
          <div className="flex justify-center items-center space-x-6 mt-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base font-medium ${
                  link.isPrimary
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-blue-500 hover:text-blue-600"
                } flex items-center`}
              >
                {link.label}
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto w-full">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

interface ProductGridProps {
  products: ProductCardProps[];
  columns?: 1 | 2 | 3;
}

export function ProductGrid({ products, columns = 2 }: ProductGridProps) {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
  }[columns];

  return (
    <section className="w-full py-4">
      <div className="container-apple">
        <div className={`grid ${gridClass} gap-4`}>
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
