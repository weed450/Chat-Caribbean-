# 🌴 Chat Caribbean – IRC Web App Moderne

Bienvenue sur **Chat Caribbean**, une application de **chat IRC nouvelle génération**, inspirée de KiwiIRC mais largement enrichie, avec un système de salons dynamiques, des bots intelligents, une économie virtuelle, des profils évolutifs, et une modération puissante.

---

## 📌 Propriétaires & Badge
- **Bertude** (📧 bertudeelius3@gmail.com) – Badge vérifié 🟡 Or – 🛡️ Propriétaire
- **MaiaAdmin** (📧 hello.maia.ai@gmail.com) – Badge vérifié 🟡 Or – 🛡️ Propriétaire

---

## ⚙️ Technologies utilisées

- **Backend** : Node.js (Express), Socket.io, MongoDB (Mongoose)
- **Frontend** : Next.js (React) + Tailwind CSS
- **Bots** : Modules Node.js intégrés dans les salons
- **Déploiement** : Replit, Docker ou autre hébergeur

---

## 🚀 Fonctionnalités principales

### 🔐 Authentification & Profils
- Connexion/Inscription avec email + avatar + pseudo
- Validation d’email, modération manuelle des profils
- Rôles évolutifs : `Nouveau → Bavard → Légende → Ancien`
- Badges visibles : ✅ Vérifié, 🛡️ Modérateur, 🎖️ Ancien, 💖 En couple
- Mode **invité** (lecture seule)

### 💬 Système de salons
- Salons publics, privés, dynamiques (par âge, par thème)
- Salons spéciaux :
  - `#ados-crush` (11-17 ans)
  - `#majeur-crush` (18+)
  - `#jeux`, `#entraide`, `#rp`, `#staff`
- Hall of Fame (messages historiques)
- Commandes IRC supportées : `/join`, `/msg`, `/nick`, etc.

### 🤖 Bots intelligents
| Bot | Fonction | Badge | Salons |
|-----|----------|-------|--------|
| Drise | IA centrale | 🌸 Rose | Tous |
| AntiPubBot | Modération auto | 🔴 Rouge | Tous |
| IRCGuard | Sécurité MP/Spam | 🔴 Rouge | 18+ |
| XPBot | XP & niveaux | 🟡 Jaune | Tous |
| StatsBot | Activité & classement | 🟡 Jaune | Tous |
| DiceBot | Jeux (blackjack, quiz) | 🟡 Jaune | `#jeux` |
| MemeBot | Fun & mèmes | ⚫ Noir | `#ados-crush` |

### 📜 Commandes IRC & Custom
- De base : `/me`, `/msg`, `/join`, `/nick`, `/ignore`, etc.
- Ludiques : `!quiz`, `!roll`, `!blackjack`, `!top`, `!xp`, `!profile`
- Modération : `/mute`, `/ban`, `/warn`, `/modlog`, `/clear`
- Admin : `/broadcast`, `/banip`, `/create #salon`, `/item give`

### 💰 Économie virtuelle
- XP, Gems, Boutique
- Récompenses après jeux
- Inventaire par utilisateur
- Objets spéciaux, badges d’événement
- Système de **missions journalières** & **crafting**

### 📱 Interface moderne (Next.js)
- Design responsive (mobile friendly)
- Réactions aux messages (❤️ 😂 🔥)
- Synthèse vocale (text-to-speech)
- Modules IA intégrés : `!aide`, `!wiki`
- Cartes interactives, tops, mini-profils

---

## 🛡️ Sécurité & Modération
- Filtrage des MP/pub/images/liens pour invités
- Logs automatiques des commandes (`CommandLog.js`)
- MP & salon bloqués selon niveau
- Page `/regles` obligatoire (acceptation des conditions)

---

## 🧑‍💼 Panel Admin
- Dashboard complet (salons, utilisateurs, logs)
- Création/suppression de salons
- Gestion boutique, missions, objets
- Notes modération, alertes, badges manuels

---

## 🗂️ Structure du projet
---

## 🧩 Variables d'environnement (.env)
---

## 💖 Badges dynamiques visibles sur les profils

- ✅ Vérifié (propriétaire / email validé)
- 🛡️ Modérateur
- 💖 En couple
- 🎖️ Ancien / Supporter
- 🎁 Cadeaux (affichés sur le profil)

---

## 🗺️ Exemples de salons

| Salon | Âge requis | Bots | Badge |
|-------|------------|------|--------|
| `#ados-crush` | 11-17 ans | QuizBot, MatchBot | 💖 |
| `#majeur-crush` | 18+ | LoveBot, XPBot | 🔥 |
| `#jeux` | Tous | DiceBot, QuizBot | 🎮 |
| `#staff` | Mod+ | ModBot, IRCGuard | 🛡️ |

---

## ✅ À faire pour tester ou contribuer

1. Clone du projet
```bash
git clone https://github.com/ton-user/chat-caribbean.git
cp .env.example .env
cd backend && npm install && npm run dev
cd ../frontend && npm install && npm run dev
📢 Remerciements

Merci à tous les testeurs, développeurs et modérateurs qui participent à faire évoluer Chat Caribbean !

> Le projet est en constante évolution. Toute aide ou suggestion est la bienvenue.




---

🏝️ Licence

© 2025 - Chat Caribbean
Code sous licence MIT.
Bots, badges, design & IA sous licence Creative Commons Attribution 4.0.