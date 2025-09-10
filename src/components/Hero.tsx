import Image from "next/image";

type HeroProps = {
  name?: string;
  titleLines?: string[];
  description?: string;
  ctaHref?: string;
  ctaText?: string;
};

export default function Hero({
  name = "Franklin",
  titleLines = ["Building digital", "products, brands, and experience."],
  description = "A Frontend Developer and Visual Designer with experience in web design, brand identity and product design.",
  ctaHref = "https://github.com/CommunityPro/portfolio-html",
  ctaText = "Connect With Me",
}: HeroProps) {
  return (
    <header id="hero">
      <section className="header-container">
        <Image className="profile-image" src="/svg/profile-image.svg" alt="Profile" width={150} height={150} />
        <h1>Hi I'm {name}</h1>
        <div className="content-text">
          {titleLines.map((line, idx) => (
            <h2 key={idx}>{line}</h2>
          ))}
          <p>{description}</p>
        </div>
        <a href={ctaHref} className="btn btn-secondary" target="_blank" rel="noreferrer">
          {ctaText}
        </a>
      </section>
    </header>
  )
}