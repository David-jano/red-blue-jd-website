import Link from "next/link";

const shortLinks = [
  [
    { href: "/ibyegeranyo", label: "Ibyegeranyo" },
    { href: "/amateka", label: "Amateka" },
    { href: "/siyanse", label: "Siyanse" },
    { href: "/ibitabo", label: "Ibitabo" },
  ],
  [
    { href: "/ubuzima", label: "Ubuzima" },
    { href: "/ubumenyamuntu", label: "Ubumenya-muntu" },
    { href: "/philosoph", label: "Philosoph" },
  ],
];

const ShortLinksSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="flex flex-col items-center gap-4">
        {shortLinks.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-2">
            {row.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="border border-blue-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
              >
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortLinksSection;
