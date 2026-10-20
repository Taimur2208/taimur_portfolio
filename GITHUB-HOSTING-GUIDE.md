# 🚀 GitHub Par Website Host Karna — Mukammal Guide (Free)

Aapki website **GitHub Pages** par bilkul FREE host hogi.
Is project me auto-deploy pehle se laga hua hai (`.github/workflows/deploy.yml`) —
aapko bas code GitHub par push karna hai, baqi GitHub khud kar dega ✅

⏱️ Total time: ~10 minute (pehli baar)

---

## PART 1: Ek Chhoti Setting (Bohat Zaroori ⚠️)

GitHub Pages par site `username.github.io/repo-name/` jaise address par chalti hai,
is liye Vite ko batana parta hai ke files **relative path** se load hon.

### Kya Karna Hai:
1. VS Code me `vite.config.ts` file kholein
2. `defineConfig({` ke andar sab se pehli line yeh add karein:

```ts
base: "./",
```

### Final file aisi lagegi:

```ts
export default defineConfig({
  base: "./",   // ⬅️ yeh line add ki hai
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

3. File save karein (`Ctrl + S`)
4. Terminal me test karein:

```bash
npm run build
```

Agar `✓ built` likha aaye to perfect ✅

> 💡 Yeh ek baar karna hai, phir kabhi nahi.

---

## PART 2: GitHub Par Repo Banana

1. https://github.com kholein aur **login** karein (account nahi hai to free bana lein)
2. Upar right side **+** → **New repository** par click karein
3. Settings:
   - **Repository name:** `taimur-portfolio` (ya jo marzi)
   - ✅ **Public** select karein (Private par free Pages nahi milta)
   - ❌ **NO README / .gitignore / license** add karein (sab khali rakhein)
4. **Create repository** dabayein
5. Agle page par aapko repo ka link milega, jaise:
   ```
   https://github.com/TAIMURUSERNAME/taimur-portfolio.git
   ```
   Isay copy karke rakhein 📋

---

## PART 3: Code GitHub Par Push Karna

### Option A: GitHub Desktop (Sab Se Aasan — Beginners Ke Liye ⭐)

1. https://desktop.github.com se **GitHub Desktop** install karein
2. Login karein apne GitHub account se
3. `File` → `Add local repository` → apna project folder select karein
   - Agar puche "create a repository?" to **Create** dabayein
4. Neeche summary me likhein: `my portfolio website`
5. **Commit to main** dabayein
6. Upar **Publish repository** → repo name confirm → **Publish**
7. Ho gaya! ✅ Code GitHub par chala gaya

### Option B: VS Code Terminal Se (Git Commands)

Pehle https://git-scm.com se **Git** install karein, phir VS Code terminal me:

```bash
git init
git add .
git commit -m "my portfolio website"
git branch -M main
git remote add origin https://github.com/TAIMURUSERNAME/taimur-portfolio.git
git push -u origin main
```

> ⚠️ `TAIMURUSERNAME/taimur-portfolio` ki jagah apna username aur repo name likhein (PART 2 wala link).

---

## PART 4: GitHub Pages ON Karna (2 Minute)

1. GitHub par apne repo ke andar jayein
2. Upar **Settings** tab kholein
3. Left side me **Pages** par click karein
4. **Build and deployment** → **Source:** me **`GitHub Actions`** select karein
5. Bas! 🎉 Ab GitHub khud website banayega (1–2 minute lagega)

### Apna Live Link Kaise Dekhein?
1. Repo me **Actions** tab kholein
2. `Deploy to GitHub Pages` wala run **green ✅** ho jaye to us par click karein
3. Wahan aapka link hoga, jaise:
   ```
   https://TAIMURUSERNAME.github.io/taimur-portfolio/
   ```
4. Yeh link kholein — **aapki website LIVE hai!** 🌍
5. Yeh link WhatsApp bio, CV, har jagah share kar sakte hain

---

## PART 5: Baad Me Kuch Change Karna Ho To?

1. VS Code me change karein (photo, text, number waghera)
2. Terminal / GitHub Desktop se dobara push karein:

```bash
git add .
git commit -m "updated photo"
git push
```

3. 1–2 minute me website **khud update** ho jayegi — kuch aur karne ki zaroorat nahi ✅

---

## 🆘 Common Problems

| Problem | Hal |
|---|---|
| Pages me `GitHub Actions` option nahi dikh raha | Thodi der wait karein / page refresh karein. Repo **Public** hona chahiye |
| Actions me ❌ red error | Us par click karke error parhein. Aksar `vite.config.ts` wali `base` line missing hoti hai → PART 1 check karein |
| Site khul rahi hai lekin **photo nahi** dikh rahi | `public/taimur.png` file push hui hai? Check: repo me `public` folder kholein. Phir PART 5 se dobara push karein |
| 404 Page Not Found | Deploy complete hone me 1–2 min lagte hain. Actions tab me green ✅ ka wait karein |
| `git push` me login error | Password ki jagah **Personal Access Token** use hota hai. Aasan hal: **GitHub Desktop (Option A)** use karein |

---

## 🎁 BONUS: Apni Photo GitHub Par Bhi Lagana

1. `public/taimur.png` file apne project me rakhein (VSCODE-GUIDE dekhein)
2. Push karein (PART 5 wala tarika)
3. 2 minute wait — photo live site par aa jayegi ✅

---

**Taimur Khan | Python Developer** 🐍 — Good luck, aapki site jald live hogi!
