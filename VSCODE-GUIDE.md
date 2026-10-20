# 🖥️ VS Code Me Website Kaise Chalayein? (Blank Page Fix)

## ❓ Live Server Par Khali Page Kyun Aata Hai?

Aapki website **React + Vite** me bani hai (simple HTML nahi).

- `index.html` ke andar yeh line hai: `<script src="/src/main.tsx">`
- **Live Server** `.tsx` / React code ko samajhta hi nahi, is liye page **khali (blank)** dikhta hai.
- Live Server sirf simple HTML/CSS/JS ke liye hota hai.

> ✅ **Hal:** Live Server use NA karein. Neeche wala sahi tarika use karein.

---

## ✅ SAHI TARIKA — Step by Step (Sirf Pehli Baar Setup)

### Step 1: Node.js Install Karein (agar nahi hai)
1. Google me likhein: `nodejs download`
2. `nodejs.org` se **LTS version** download karke install karein
3. VS Code band karke dobara kholein

Check karne ke liye VS Code me terminal kholein (`Ctrl + ~`) aur likhein:

```bash
node --version
npm --version
```

Agar version number aajaye (jaise `v20.x`) to sab OK hai ✅

---

### Step 2: Project Folder VS Code Me Kholein
1. Downloaded folder ko **Extract** karein (agar ZIP hai)
2. VS Code → `File` → `Open Folder` → woh folder select karein
3. Terminal kholein: `Ctrl + ~` (ya menu: `Terminal` → `New Terminal`)

---

### Step 3: Pehli Baar Yeh Command Chalayein (sirf 1 baar)

```bash
npm install
```

⏳ 1–2 minute lagega. Yeh saari zaroori files download karega.

---

### Step 4: Website Chalayein 🚀

```bash
npm run dev
```

Aapko kuch aisa nazar aayega:

```
➜  Local:   http://localhost:5173/
```

- `Ctrl + Click` karein us link par — website khul jayegi ✅
- Code me koi change karein → browser me **foran** update ho jayega

### ⛔ Band Karne Ke Liye
Terminal me `Ctrl + C` dabayein.

---

## 📦 Dusra Tarika — Bina `npm run dev` Ke (dist wala)

Agar aapko sirf **bani hui website** dekhni hai:

```bash
npm run build
```

- Yeh `dist` naam ka folder banayega
- Ab `dist` folder par **Live Server** chalayein (`dist/index.html` par right-click → Open with Live Server)
- ✅ Ab khali page NAHI aayega — poori website chalegi

> ⚠️ Note: `dist` wali file me change karne ke liye `src` me change karke `npm run build` dobara chalana parta hai. Roz ke kaam ke liye `npm run dev` best hai.

---

## 🖼️ Apni Photo Lagana

1. Apni background-removed photo ka naam rakhein: `taimur.png`
2. `public` folder ke andar daal dein → `public/taimur.png`
3. Browser refresh karein — photo lag jayegi ✅
4. (`.jpg` / `.jpeg` / `.webp` bhi chalega)

---

## 🆘 Common Problems

| Problem | Hal |
|---|---|
| `'npm' is not recognized` | Node.js install nahi hai → Step 1 dobara karein, phir VS Code restart |
| `npm install` me error | Internet check karein, phir `npm install` dobara chalayein |
| Port busy / already in use | Terminal me `Ctrl+C`, phir `npm run dev -- --port 3000` |
| Phir bhi blank page | Confirm karein aap `npm run dev` wala link khol rahe hain, Live Server wala nahi |

---

**Taimur Khan | Python Developer** 🐍
