const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/aboutme", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/project", changefreq: "weekly", priority: 0.9 },
  { url: "/timeline", changefreq: "monthly", priority: 0.7 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://www.pieter-jandelie.be/" });
  const writeStream = createWriteStream("./public/sitemap.xml");

  // Schrijf de sitemap naar het bestand
  sitemap.pipe(writeStream);

  // Voeg de links toe
  links.forEach((link) => sitemap.write(link));

  // Sluit de sitemap af
  sitemap.end();

  // Wacht tot de stream klaar is
  await streamToPromise(sitemap);

  console.log("Sitemap gegenereerd en opgeslagen!");
}

generateSitemap().catch((error) => {
  console.error("Fout bij genereren van sitemap:", error);
});
