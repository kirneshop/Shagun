# 🪷 Shagun (शगुन) — Indian Wedding Goal-Funding & Digital Registry

> *"Don't just celebrate their beginning. Be a part of their dreams."*

A full-fledged Indian-themed wedding invitation and dream-goal crowdfunding web application. Built to transform traditional token shagun and expensive travel dilemmas into meaningful, life-changing gifts (honeymoon, home down payment, first car, etc.).

---

## 🌟 Key Features

* **🎨 Indian Wedding Royal Aesthetic:** Rich Burgundy/Maroon (`#8B1A2B`), Royal Gold (`#D4A853`), Ivory, and Warm Cream with mandala borders, auspicious *॥ शुभ विवाह ॥* typography, and floating floral accents.
* **⚡ Zero-Build, Instant Deploy:** Pure HTML5, CSS3, and JavaScript — no Node.js/npm or build steps required. Deploys to Netlify in seconds.
* **🔄 Reactive State Management (`js/store.js`):** Unified `ShagunStore` with persistent `localStorage`. Any contribution made on `wedding.html` immediately updates progress bars, milestone counters, and reflects in `dashboard.html`.
* **💳 Dynamic UPI QR Engine (`js/upi.js`):**
  * Generates real UPI intent URLs (`upi://pay?pa=...&pn=...&am=...&cu=INR`).
  * Live scannable QR Code that works with Google Pay, PhonePe, and Paytm.
  * Deep links for mobile 1-tap checkout.
  * Traditional Indian Shagun presets with auspicious **`+ ₹1`** shagun rule (₹501, ₹1,101, ₹2,101, ₹5,101, ₹11,001, ₹21,001).
* **🎶 Ambient Wedding Shehnai & Sitar Harmony:** Built-in Web Audio API synthesizer for meditative Raag Yaman/Bhupali raga harmony (100% offline, zero audio file dependencies).
* **🎊 Celebratory Confetti Engine:** Pure Canvas-based particle burst upon shagun contribution.
* **💌 Guest RSVP System:** Complete RSVP workflow (Guest count, Dietary preference, Veg/Non-Veg, WhatsApp contact) saved directly into the couple's database.
* **📊 Couple Control Dashboard (`dashboard.html`):** Real-time analytics, recent contributions feed, milestone status toggles, shareable links, and conversion metrics.
* **✍️ 3-Step Setup Wizard (`create.html`):** Allows any engaged couple to configure their date, venue, custom goals, and launch a registry in under 3 minutes.

---

## 🚀 How to Deploy to GitHub & Netlify (2-Minute Guide)

### Option 1: Deploy with Netlify Drop (Fastest — No Git required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`d:\Projects\Antigravity\Wedding`) directly into the browser.
3. Done! Netlify will immediately give you a live HTTPS URL (e.g. `https://shagun-wedding.netlify.app`).

---

### Option 2: Deploy via GitHub & Netlify

#### Step 1: Push to GitHub
Open your terminal / PowerShell in `d:\Projects\Antigravity\Wedding`:
```bash
git init
git add .
git commit -m "Initial commit: Full-fledged Shagun wedding webapp"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/shagun-wedding.git
git push -u origin main
```

#### Step 2: Connect to Netlify
1. Log in to [Netlify](https://app.netlify.com).
2. Click **Add new site** &rarr; **Import an existing project**.
3. Choose **GitHub** and select your `shagun-wedding` repository.
4. Settings are automatically pre-configured via `netlify.toml`:
   * **Build command:** *(leave empty)*
   * **Publish directory:** `.`
5. Click **Deploy Site**.

Your clean URLs are automatically handled by `netlify.toml` and `_redirects`:
* `/` &rarr; Landing Page
* `/wedding` &rarr; Pradyut & Jigyasa's Wedding Page & Registry
* `/dashboard` &rarr; Couple Dashboard
* `/create` &rarr; 3-Step Registry Creator

---

## 📂 Project Structure

```text
├── index.html          # Platform Landing Page (Vision, How it works, Social proof)
├── wedding.html        # Couple's Wedding Invite & Goal Registry (Star Page)
├── dashboard.html      # Couple's Analytics & Management Dashboard
├── create.html         # 3-Step Registry Setup Wizard
├── netlify.toml        # Netlify routing, clean URLs & security headers
├── _redirects          # Netlify static redirect rules
├── .gitignore          # Git ignore rules
├── css/
│   └── styles.css      # Complete Indian Wedding Design System & Utilities
├── js/
│   ├── store.js        # Reactive central state store (Couples, Goals, TXs, RSVPs)
│   ├── upi.js          # UPI URI generator, QR code API, Audio synth & Confetti FX
│   └── utils.js        # Scroll reveal, toasts, modal handlers, counter animations
└── assets/             # Images and media placeholders
```

---

## 💑 Pre-configured Couple Data
* **Couple:** Pradyut Panda & Jigyasa Sharma
* **Date:** January 18, 2027
* **Venue:** Mayfair Heritage Beach Resort, Puri, Odisha
* **Active Goals:**
  1. 🌍 **European Honeymoon** — ₹1,85,000 / ₹3,50,000 (53%)
  2. 🏠 **Dream Home Down Payment** — ₹4,20,000 / ₹10,00,000 (42%)
  3. 🚗 **First Car Together** — ₹2,10,000 / ₹6,00,000 (35%)
  4. 📸 **Cinematic Wedding Film** — ₹65,000 / ₹80,000 (81%)
  5. 🍳 **Kitchen & Smart Living Setup** — ₹95,000 / ₹1,50,000 (63%)

---

Built with ❤️ for Indian weddings.
