import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

function Table({ data }: TableProps) {
  let headers = data.headers.map((header, index) => (
    <th key={index} scope="col">{header}</th>
  ));
  
  let rows = data.rows.map((row, rowIndex) => (
    <tr key={rowIndex}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} role="cell">{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table role="grid">
      <thead>
        <tr role="row">{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  // Determine if the link has visible text content
  const hasVisibleText = React.Children.toArray(children).some(
    child => typeof child === 'string' && child.trim().length > 0
  );
  
  // Create a descriptive aria-label if there's no visible text
  const ariaLabel = !hasVisibleText ? `Navigate to ${href}` : undefined;
  
  if (href.startsWith("/")) {
    return (
      <Link 
        href={href}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a 
        href={href}
        aria-label={ariaLabel || `Jump to section: ${href.slice(1)}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      {...props}
    >
      {children}
      {/* Add screen reader text for external links */}
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

interface ImageProps extends React.ComponentProps<typeof Image> {
  alt: string;
}

function RoundedImage({ alt, ...props }: ImageProps) {
  if (!alt) {
    console.warn('Image is missing alt text');
  }
  
  return (
    <Image 
      alt={alt}
      className="rounded-lg"
      {...props}
    />
  );
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

interface HeadingProps {
  children: React.ReactNode;
}

function createHeading(level: number) {
  const Heading = ({ children }: HeadingProps) => {
    const slug = slugify(children as string);
    const ariaLabel = `${children} section`;

    return React.createElement(
      `h${level}`,
      { 
        id: slug,
        role: "heading",
        "aria-level": level,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
          "aria-label": `Link to ${children} section`,
          role: "button",
        }),
        children
      ]
    );
  };

  Heading.displayName = `Heading${level}`;
  return Heading;
}

export const globalComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Table,
};