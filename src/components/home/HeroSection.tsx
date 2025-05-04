import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  links?: {
    label: string;
    href: string;
    isPrimary?: boolean;
  }[];
  backgroundImage?: string;
  productImage?: string;
  textColor?: "dark" | "light";
  backgroundColor?: string;
  logoImage?: string;
  additionalText?: string;
}

export function HeroSection({
  title,
  subtitle,
  links,
  backgroundImage,
  productImage,
  textColor = "dark",
  backgroundColor,
  logoImage,
  additionalText,
}: HeroSectionProps) {
  const textColorClass = textColor === "dark" ? "text-zinc-900" : "text-white";

  return (
    <section
      className={`relative flex flex-col items-center justify-center w-full py-16 overflow-hidden ${
        backgroundImage ? "min-h-[580px]" : "min-h-[490px]"
      }`}
      style={{
        backgroundColor: backgroundColor || "",
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      )}

      <div className="container-apple relative z-10 text-center">
        {logoImage ? (
          <div className="mb-4 flex justify-center">
            <Image
              src={logoImage}
              alt={title}
              width={200}
              height={50}
              className="h-auto"
            />
          </div>
        ) : (
          <h2
            className={`text-4xl md:text-5xl font-semibold tracking-tight ${textColorClass} mb-1`}
          >
            {title}
          </h2>
        )}

        {subtitle && (
          <h3 className={`text-xl md:text-2xl ${textColorClass} mb-4 tracking-tight`}>
            {subtitle}
          </h3>
        )}

        {additionalText && (
          <p className={`text-base ${textColorClass} mb-4`}>{additionalText}</p>
        )}

        {links && links.length > 0 && (
          <div className="flex justify-center items-center space-x-6 mt-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-base md:text-xl font-medium ${
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

        {productImage && (
          <div className="mt-8 flex justify-center">
            <Image
              src={productImage}
              alt={title}
              width={1000}
              height={600}
              className="max-w-full h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
