import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Menu as MenuIcon, X } from "lucide-react";

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

.zara-root {
  --bg: #14110f;
  --surface: #1e1a16;
  --surface-2: #262019;
  --gold: #b08d57;
  --gold-light: #d9bc8a;
  --wine: #6b2737;
  --ivory: #f1e9dc;
  --muted: #9c8f80;
  --hairline: rgba(176,141,87,0.28);
  background: var(--bg);
  color: var(--ivory);
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  min-height: 100vh;
  position: relative;
}

.zr-serif { font-family: 'Cormorant Garamond', serif; }

/* NAV */
.zr-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(20,17,15,0.92);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--hairline);
}
.zr-nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.zr-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  background: none;
  border: none;
}
.zr-brand-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  letter-spacing: 3px;
  color: var(--ivory);
  font-weight: 500;
}
.zr-links {
  display: flex;
  gap: 36px;
  list-style: none;
}
.zr-link {
  background: none;
  border: none;
  color: var(--muted);
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  padding: 6px 0;
  border-bottom: 1px solid transparent;
  transition: color 0.25s, border-color 0.25s;
}
.zr-link:hover, .zr-link.active {
  color: var(--gold-light);
  border-color: var(--gold);
}
.zr-burger {
  display: none;
  background: none;
  border: none;
  color: var(--ivory);
  cursor: pointer;
}
.zr-mobile-menu {
  display: none;
  flex-direction: column;
  padding: 8px 28px 20px;
  gap: 4px;
  border-top: 1px solid var(--hairline);
}
.zr-mobile-menu button {
  background: none;
  border: none;
  color: var(--muted);
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: left;
  padding: 12px 0;
  border-bottom: 1px solid var(--hairline);
  cursor: pointer;
}
.zr-mobile-menu button.active { color: var(--gold-light); }

/* CREST */
.zr-crest { display:block; margin: 0 auto; }

/* HERO */
.zr-hero {
  position: relative;
  text-align: center;
  padding: 90px 24px 110px;
  overflow: hidden;
}
.zr-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center top, rgba(176,141,87,0.10), transparent 60%);
  pointer-events: none;
}
.zr-hero-eyebrow {
  font-size: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--gold);
  margin: 28px 0 18px;
}
.zr-hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: clamp(52px, 9vw, 92px);
  letter-spacing: 6px;
  line-height: 1.05;
  margin: 0 0 22px;
}
.zr-hero-tagline {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(18px, 2.4vw, 24px);
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 36px;
  line-height: 1.6;
}
.zr-divider {
  width: 64px;
  height: 1px;
  background: var(--gold);
  margin: 0 auto 36px;
}
.zr-cta-row {
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
}
.zr-btn {
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 32px;
  cursor: pointer;
  transition: all 0.25s;
  border-radius: 2px;
}
.zr-btn-primary {
  background: var(--gold);
  color: var(--bg);
  border: 1px solid var(--gold);
}
.zr-btn-primary:hover { background: var(--gold-light); border-color: var(--gold-light); }
.zr-btn-outline {
  background: transparent;
  color: var(--ivory);
  border: 1px solid var(--hairline);
}
.zr-btn-outline:hover { border-color: var(--gold); color: var(--gold-light); }

/* SECTION GENERAL */
.zr-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 70px 28px;
}
.zr-section-label {
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold);
  text-align: center;
  margin-bottom: 14px;
}
.zr-section-title {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  font-size: clamp(30px, 4vw, 42px);
  text-align: center;
  margin: 0 0 28px;
  letter-spacing: 1px;
}
.zr-philosophy-text {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
  color: var(--muted);
  line-height: 1.9;
  font-size: 16px;
  font-weight: 300;
}

/* HOURS STRIP */
.zr-hours-strip {
  border-top: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  padding: 36px 0;
  display: flex;
  justify-content: center;
  gap: 64px;
  flex-wrap: wrap;
  text-align: center;
}
.zr-hours-item-label {
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}
.zr-hours-item-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: var(--ivory);
}

/* MENU PAGE */
.zr-menu-page { padding-top: 20px; }
.zr-menu-category { margin-bottom: 56px; }
.zr-menu-category-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--gold-light);
  text-align: center;
  margin-bottom: 6px;
}
.zr-menu-category-sub {
  text-align: center;
  font-size: 12px;
  color: var(--muted);
  letter-spacing: 2px;
  margin-bottom: 30px;
}
.zr-menu-item { margin-bottom: 26px; max-width: 720px; margin-left: auto; margin-right: auto; }
.zr-menu-item-header {
  display: flex;
  align-items: baseline;
  gap: 10px;
}
.zr-menu-item-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 21px;
  font-weight: 500;
  color: var(--ivory);
  white-space: nowrap;
}
.zr-menu-item-leader {
  flex: 1;
  border-bottom: 1px dotted var(--hairline);
  transform: translateY(-4px);
}
.zr-menu-item-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: var(--gold-light);
  white-space: nowrap;
}
.zr-menu-item-desc {
  color: var(--muted);
  font-size: 14px;
  font-weight: 300;
  margin-top: 6px;
  line-height: 1.6;
}

/* ABOUT PAGE */
.zr-about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.zr-about-image {
  aspect-ratio: 4/5;
  background: linear-gradient(135deg, var(--surface-2), var(--surface), #100d0b);
  border: 1px solid var(--hairline);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}
.zr-about-image::after {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid var(--hairline);
}
.zr-about-text p {
  color: var(--muted);
  line-height: 1.9;
  font-size: 15.5px;
  margin-bottom: 18px;
  font-weight: 300;
}
.zr-about-signature {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: var(--gold-light);
  font-size: 18px;
  margin-top: 22px;
}

/* CONTACT PAGE */
.zr-contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
}
.zr-contact-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 30px;
}
.zr-contact-icon {
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 3px;
}
.zr-contact-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 4px;
}
.zr-contact-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  color: var(--ivory);
  line-height: 1.5;
}
.zr-social-row { display: flex; gap: 16px; margin-top: 8px; }
.zr-social-icon {
  width: 38px; height: 38px;
  border: 1px solid var(--hairline);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold-light);
  border-radius: 50%;
  transition: border-color 0.25s, color 0.25s;
}
.zr-social-icon:hover { border-color: var(--gold); color: var(--gold-light); }

.zr-map {
  border: 1px solid var(--hairline);
  background: var(--surface);
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* FOOTER */
.zr-footer {
  border-top: 1px solid var(--hairline);
  text-align: center;
  padding: 36px 28px 44px;
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .zr-links { display: none; }
  .zr-burger { display: block; }
  .zr-mobile-menu.open { display: flex; }
  .zr-about-grid, .zr-contact-grid { grid-template-columns: 1fr; }
  .zr-hours-strip { gap: 32px; }
}
`;

const CATEGORIES = [
  {
    title: "Starters",
    sub: "To begin",
    items: [
      { name: "Coming Soon", price: "00", desc: "Coming soon" }
    ],
  },
  {
    title: "Mains",
    sub: "The heart of the table",
    items: [
      { name: "Coming Soon", price: "00", desc: "Coming soon" }
    ],
  },
  {
    title: "Desserts",
    sub: "To finish",
    items: [
      { name: "Coming Soon", price: "00", desc: "Coming soon" }
    ],
  },
  {
    title: "To Drink",
    sub: "Curated by our sommelier",
    items: [
      { name: "Reds by the Glass", price: "16–24", desc: "Rotating selection, ask your server for tonight's pours" }
    ],
  },
];

function Crest({ size = 56 }) {
  return (
    <svg className="zr-crest" width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" stroke="#b08d57" strokeWidth="1" />
      <circle cx="50" cy="50" r="38" stroke="#b08d57" strokeWidth="0.6" opacity="0.6" />
      <text x="50" y="63" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="42" fill="#d9bc8a">Z</text>
      <path d="M28 30 Q20 50 28 70" stroke="#b08d57" strokeWidth="0.7" opacity="0.5" fill="none" />
      <path d="M72 30 Q80 50 72 70" stroke="#b08d57" strokeWidth="0.7" opacity="0.5" fill="none" />
    </svg>
  );
}

function NavBar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const pages = ["home", "menu", "about", "contact"];
  const labels = { home: "Home", menu: "Menu", about: "About", contact: "Contact" };

  const go = (p) => {
    setPage(p);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="zr-nav">
      <div className="zr-nav-inner">
        <button className="zr-brand" onClick={() => go("home")}>
          <Crest size={34} />
          <span className="zr-brand-name">ZARA</span>
        </button>
        <ul className="zr-links">
          {pages.map((p) => (
            <li key={p}>
              <button className={`zr-link ${page === p ? "active" : ""}`} onClick={() => go(p)}>
                {labels[p]}
              </button>
            </li>
          ))}
        </ul>
        <button className="zr-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      <div className={`zr-mobile-menu ${open ? "open" : ""}`}>
        {pages.map((p) => (
          <button key={p} className={page === p ? "active" : ""} onClick={() => go(p)}>
            {labels[p]}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <section className="zr-hero">
        <Crest size={64} />
        <div className="zr-hero-eyebrow">Est. Dallas</div>
        <h1 className="zr-hero-title">ZARA</h1>
        <p className="zr-hero-tagline">
          Seasonal ingredients, quiet craft, and a room built for the long dinner.
        </p>
        <div className="zr-divider" />
        <div className="zr-cta-row">
          <button className="zr-btn zr-btn-primary" onClick={() => setPage("menu")}>View Menu</button>
          <button className="zr-btn zr-btn-outline" onClick={() => setPage("contact")}>Find Us</button>
        </div>
      </section>

      <div className="zr-hours-strip">
        <div>
          <div className="zr-hours-item-label">Hours</div>
          <div className="zr-hours-item-value">Monday – Sun, 9:00 – 9:00pm</div>
        </div>
        <div>
          <div className="zr-hours-item-label">Location</div>
          <div className="zr-hours-item-value">Downtown Dallas</div>
        </div>
        <div>
          <div className="zr-hours-item-label">Reservations</div>
          <div className="zr-hours-item-value">(214) 555-0142</div>
        </div>
      </div>

      <section className="zr-section">
        <div className="zr-section-label">Our Philosophy</div>
        <h2 className="zr-section-title">Set by the Season</h2>
        <p className="zr-philosophy-text">
          Every dish begins with what the season allows, not what a printed menu demands.
          Our kitchen works closely with local growers and purveyors, changing course
          selections often so that what arrives at your table is close to its source
          and true to the moment.
        </p>
      </section>
    </>
  );
}

function MenuPage() {
  return (
    <section className="zr-section zr-menu-page">
      <div className="zr-section-label">The Menu</div>
      <h2 className="zr-section-title">A Table Set for the Season</h2>
      {CATEGORIES.map((cat) => (
        <div className="zr-menu-category" key={cat.title}>
          <div className="zr-menu-category-title">{cat.title}</div>
          <div className="zr-menu-category-sub">{cat.sub}</div>
          {cat.items.map((item) => (
            <div className="zr-menu-item" key={item.name}>
              <div className="zr-menu-item-header">
                <span className="zr-menu-item-name">{item.name}</span>
                <span className="zr-menu-item-leader" />
                <span className="zr-menu-item-price">{item.price}</span>
              </div>
              <div className="zr-menu-item-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

function AboutPage() {
  return (
    <section className="zr-section">
      <div className="zr-section-label">Our Story</div>
      <h2 className="zr-section-title">About Zara</h2>
      <div className="zr-about-grid">
        <div className="zr-about-image" />
        <div className="zr-about-text">
          <p>
            Zara opened its doors with a simple idea: that fine dining should feel
            unhurried. The dining room was designed to hold conversation as carefully
            as it holds a glass of wine — low light, warm materials, and enough space
            between tables that every dinner feels like the only one in the room.
          </p>
          <p>
            Our kitchen is led by a small team who trained across coastal seafood
            houses and countryside kitchens before settling here in Dallas. That
            mix shows up on the plate: technique borrowed from the classics, applied
            to whatever is best that week.
          </p>
          <p>
            We are open six nights a week, and we still believe the best night out
            is one where nobody is watching the clock.
          </p>
          <div className="zr-about-signature">— The Zara Kitchen</div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="zr-section">
      <div className="zr-section-label">Visit</div>
      <h2 className="zr-section-title">Find Your Table</h2>
      <div className="zr-contact-grid">
        <div>
          <div className="zr-contact-item">
            <MapPin className="zr-contact-icon" size={20} />
            <div>
              <div className="zr-contact-label">Address</div>
              <div className="zr-contact-value">9780 Lyndon B Johnson Fwy suite 106<br />TX 75243</div>
            </div>
          </div>
          <div className="zr-contact-item">
            <Phone className="zr-contact-icon" size={20} />
            <div>
              <div className="zr-contact-label">Phone</div>
              <div className="zr-contact-value">Coming Soon</div>
            </div>
          </div>
          <div className="zr-contact-item">
            <Mail className="zr-contact-icon" size={20} />
            <div>
              <div className="zr-contact-label">Email</div>
              <div className="zr-contact-value">Coming Soon</div>
            </div>
          </div>
          <div className="zr-contact-item">
            <Clock className="zr-contact-icon" size={20} />
            <div>
              <div className="zr-contact-label">Hours</div>
              <div className="zr-contact-value">Coming soon</div>
            </div>
          </div>
          <div className="zr-social-row">
            <div className="zr-social-icon"><Send size={17} /></div>
            <div className="zr-social-icon"><MessageCircle size={17} /></div>
          </div>
        </div>
        <div className="zr-map">
          <Crest size={72} />
        </div>
      </div>
    </section>
  );
}

export default function ZaraSite() {
  const [page, setPage] = useState("home");

  return (
    <div className="zara-root">
      <style>{STYLES}</style>
      <NavBar page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "menu" && <MenuPage />}
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      <div className="zr-footer">© {new Date().getFullYear()} Zara Cafe &amp; Restaurant</div>
    </div>
  );
}
