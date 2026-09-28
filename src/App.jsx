import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Solutions analysis",
    detail:
      "Business analysis and process improvement for business and technology projects.",
  },
  {
    number: "02",
    title: "Development",
    detail:
      "Digital strategy, user experience, content, web development, and SEO.",
  },
  {
    number: "03",
    title: "Branding",
    detail:
      "A distinctive identity that reflects what you stand for and connects with customers.",
  },
  {
    number: "04",
    title: "Product sourcing",
    detail:
      "Find quality products and build a cost-effective path from idea to market.",
  },
  {
    number: "05",
    title: "Digital marketing",
    detail:
      "Plan and support campaigns across search, email, social, and display.",
  },
  {
    number: "06",
    title: "Project management",
    detail:
      "Bring stakeholders and delivery teams together from first brief to launch.",
  },
];

const principles = [
  [
    "Stay organized",
    "Clear ownership and responsive support make every interaction easier.",
  ],
  [
    "Make it personal",
    "Help each customer feel understood with service that fits their needs.",
  ],
  [
    "Make it convenient",
    "Give people quick answers and useful self-service when they need it.",
  ],
  [
    "Keep listening",
    "Use customer feedback to keep improving the buying experience.",
  ],
];

const partners = [
  { name: "ILSC", type: "Language education", href: "https://www.ilsc.com/" },
  {
    name: "NextRec",
    type: "Recreation software",
    href: "https://www.nextrec.com/",
  },
  {
    name: "Global Relay",
    type: "Financial data protection",
    href: "https://www.globalrelay.com/",
  },
  {
    name: "Hardy Capital",
    type: "Capital investment",
    href: "https://hardycapital.com/",
  },
  { name: "Clearly", type: "Optical retail", href: "https://www.clearly.ca/" },
];

function MapleLeafIcon() {
  return (
    <svg
      className="maple-leaf"
      viewBox="2400 0 4800 4800"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M4890 4430l-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"
      />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header" id="top">
        <nav
          className="navbar navbar-expand-lg container"
          aria-label="Main navigation"
        >
          <a
            className="brand-lockup"
            href="#top"
            onClick={closeMenu}
            aria-label="The Pacific Rice Co. home"
          >
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-name">The Pacific Rice Co.</span>
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-handle">thePacificRiceCo</span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <div
            className={`navbar-collapse ${menuOpen ? "show" : ""}`}
            id="primary-navigation"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link" href="#approach" onClick={closeMenu}>
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#partners" onClick={closeMenu}>
                  Project partners
                </a>
              </li>
              <li className="nav-item nav-contact">
                <a
                  className="button button-dark"
                  href="#contact"
                  onClick={closeMenu}
                >
                  Get started <ArrowUpRight size={16} strokeWidth={1.8} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-rule" /> Digital footprint, built around you
              </p>
              <h1>
                A gateway to your{" "}
                <span className="text-highlight">digital prescence solution.</span>
              </h1>
              <p className="hero-intro">
                We open the doors to your ideas with the people, products, and
                digital experience to bring them to life.
              </p>
              <div className="hero-actions">
                <a className="button button-accent" href="#contact">
                  Get started <ArrowRight size={17} />
                </a>
                <a className="text-link" href="#work">
                  Explore our services <ArrowDownRight size={17} />
                </a>
              </div>
              <div className="hero-aside">
                <span>Ideas, meet opportunity.</span>
                <span>
                  <MapleLeafIcon />
                  VANCOUVER, BC
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <img
                className="hero-image"
                src="/hero_image.jpg"
                alt="A team collaborating on an e-commerce website design, with code visible on their laptops"
              />
              <div className="image-caption">
                <span>Designing and building together</span>
                <span>01 — 06</span>
              </div>
              <div className="hero-stamp" aria-hidden="true">
                P<br />R<br />C
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Strategy to storefront</span>
            <a href="#approach" aria-label="Scroll to about us">
              <ArrowDownRight size={19} />
            </a>
            <span>Founded in Vancouver, 2015</span>
          </div>
        </section>

        <section className="proof-strip" aria-label="PRC at a glance">
          <div className="container proof-grid">
            <p className="proof-lead">
              Pacific Rice Company
              <br />
              <span>Digital ideas, brought to market.</span>
            </p>
            <div className="proof-stat">
              <strong>2015</strong>
              <span>founded in Vancouver</span>
            </div>
            <div className="proof-stat">
              <strong>
                20<span>+</span>
              </strong>
              <span>years in the world of web development</span>
            </div>
            <div className="proof-stat">
              <strong>6</strong>
              <span>connected service lines</span>
            </div>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container approach-grid">
            <div className="section-intro">
              <p className="eyebrow">
                <span className="eyebrow-rule" /> A better buying experience
              </p>
              <h2>
                Bring the consumer
                <br />
                <span className="text-highlight">to your business.</span>
              </h2>
            </div>
            <div className="approach-copy">
              <p className="lead-copy">
                Online customers expect fast, convenient, personal service. We
                help you build the experience that earns trust and keeps people
                coming back.
              </p>
              <a className="text-link" href="#about">
                See how we help <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="container principle-list">
            {principles.map(([title, detail], index) => (
              <article className="principle-row" key={title}>
                <span className="principle-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <ArrowUpRight
                  className="principle-arrow"
                  size={20}
                  strokeWidth={1.5}
                />
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="container">
            <div className="work-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-rule" /> Services
                </p>
                <h2>
                  Everything you need
                  <br />
                  to{" "}
                  <span className="text-highlight">
                    bring an idea to market.
                  </span>
                </h2>
              </div>
              <p className="work-heading-note">
                We’re a full-stack team, bringing the right disciplines together
                to create effective digital solutions.
              </p>
            </div>
            <div className="capability-list">
              {capabilities.map(({ number, title, detail }) => (
                <a className="capability-row" href="#contact" key={number}>
                  <span className="capability-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                  <span className="capability-arrow">
                    <ArrowUpRight size={20} strokeWidth={1.6} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="feature-title">
          <div className="feature-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=85"
              alt="A team collaborating around a table"
              loading="lazy"
            />
            <span className="feature-image-note">Ideas into products.</span>
          </div>
          <div className="feature-copy">
            <p className="eyebrow">
              <span className="eyebrow-rule" /> About Pacific Rice Company
            </p>
            <h2 id="feature-title">
              We bring your{" "}
              <span className="text-highlight">product to life.</span>
            </h2>
            <p>
              Founded in Vancouver in 2015, Pacific Rice Company brings
              e-retail, software, and product development experience together to
              build a strong platform for products and brands.
            </p>
            <a className="button button-dark" href="#about">
              Our mission <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container about-grid">
            <div className="about-title">
              <p className="eyebrow">
                <span className="eyebrow-rule" /> About us
              </p>
              <h2>
                Built for the
                <br />
                <span className="text-highlight">world wide web.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p className="lead-copy">
                Pacific Rice Company provides the experience and building blocks
                to bring your ideas to life.
              </p>
              <p>
                Our team combines software and product development with
                effective branding, product sourcing, and digital marketing. We
                build strong platforms for products and brands, with customer
                satisfaction and trust at the center of the work.
              </p>
              <a className="text-link" href="#contact">
                Talk about your idea <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="container values-bar">
            <span>Founded 2015</span>
            <span>
              <MapleLeafIcon />
              Vancouver, Canada
            </span>
            <span>Built around the customer</span>
          </div>
        </section>

        <section className="partners-section section-pad" id="partners">
          <div className="container">
            <div className="work-heading">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-rule" /> Project partners
                </p>
                <h2>
                  Good work is
                  <br />
                  <span className="text-highlight">better together.</span>
                </h2>
              </div>
              <p className="work-heading-note">
                A few of the teams and brands we’ve had the pleasure of building
                alongside.
              </p>
            </div>
            <div className="partner-grid">
              {partners.map(({ name, type, href }) => (
                <a
                  className="partner-item"
                  href={href}
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="partner-name">{name}</span>
                  <span className="partner-type">{type}</span>
                  <ArrowUpRight size={18} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-rule" />
                <span>
                  <MapleLeafIcon />
                  Vancouver, British Columbia
                </span>
              </p>
              <h2>
                Bring your idea
                <br />
                <span className="text-highlight">to market.</span>
              </h2>
            </div>
            <div className="contact-action">
              <p>
                Let’s talk about your product, your brand, or the online
                experience you want to build.
              </p>
              <a
                className="button button-light"
                href="mailto:info@pacificricecompany.com"
              >
                Get started <ArrowUpRight size={17} />
              </a>
              <a
                className="contact-email"
                href="mailto:info@pacificricecompany.com"
              >
                info@pacificricecompany.com
              </a>
            </div>
          </div>
          <div className="contact-orbit" aria-hidden="true">
            PACIFIC RICE · PACIFIC RICE ·
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a
            className="brand-lockup"
            href="#top"
            aria-label="The Stash Card Co. home"
          >
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-name">The Pacific Rice Co.</span>
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-handle">thePacificRiceCo</span>
          </a>
          <p>
            Digital Footprint solutions.
            <br />
            Ideas to market.
          </p>
          <div className="footer-links">
            <a href="#approach">About us</a>
            <a href="#work">Services</a>
            <a href="#partners">Project partners</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="back-to-top" href="#top" aria-label="Back to top">
            <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Pacific Rice Company. All rights
            reserved.
          </span>
          <span>
            <MapleLeafIcon />
            Vancouver, BC, Canada
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
