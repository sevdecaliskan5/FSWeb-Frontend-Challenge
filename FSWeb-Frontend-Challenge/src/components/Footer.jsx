export default function Footer() {
  return (
    <footer className="px-10 py-10 md:px-40 md:py-20 grid md:grid-cols-3 gap-10 items-center">
      <p className="col-span-2 text-3xl md:text-4xl tracking-wide leading-normal font-medium text-right md:pl-20 pr-10">
        Let’s work together on your next product.
      </p>

      <div className="flex justify-center md:justify-start md:flex-col gap-4 font-medium">
        {[
          {
            name: "GitHub",
            url: "https://github.com/sevdecaliskan5",
            color: "text-sky-600",
          },
          { name: "Personal Blog", url: "#", color: "text-black" },
          { name: "LinkedIn", url: "#", color: "text-cyan-800" },
          {
            name: "Email",
            url: "mailto:ssevdecaliskan@gmail.com",
            color: "text-pink-500",
          },
        ].map((link, index) => (
          <a
            key={index}
            href={link.url}
            className={`${link.color} hover:underline`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
