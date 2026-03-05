# 🚀 Démarrage rapide - Système d'Authentification

## Comment tester le système?

### 1️⃣ Lancer l'application
```bash
npm start
```

### 2️⃣ Vous verrez la page d'authentification avec deux options:
- **Connexion** (page par défaut)
- **S'inscrire** (lien en bas)

---

## 📱 Test 1: Créer un compte

1. Cliquez sur "S'inscrire"
2. Remplissez le formulaire:
   ```
   Nom d'utilisateur: demo_user
   Email: demo@example.com
   Mot de passe: demo123456
   Confirmer le mot de passe: demo123456
   ```
3. Cliquez sur "S'inscrire"
4. ✅ Vous êtes maintenant connecté et verrez votre pseudo dans l'en-tête!

---

## 🔑 Test 2: Se déconnecter et se reconnecter

1. Cliquez sur le bouton rouge "Déconnexion" en haut à droite
2. Vous retournez à la page de connexion
3. Entrez vos identifiants précédents:
   ```
   Email: demo@example.com
   Mot de passe: demo123456
   ```
4. ✅ Vous êtes reconnecté!

---

## ⚠️ Messages d'erreur à tester

### Email invalide (inscription):
- Utiliser un email déjà existant

### Mot de passe faible:
- Moins de 6 caractères

### Mots de passe non identiques:
- Saisir deux mots de passe différents

### Identifiants incorrects:
- Email ou mot de passe incorrect

---

## 🗂️ Localisation des données

Les données sont stockées dans le **localStorage** de votre navigateur Electron:
- Consultez les outils de développement (F12, Ctrl+Shift+I sur Windows/Linux, Cmd+Option+I sur Mac)
- Onglet "Application" → "Local Storage"

---

## 🎯 Fonctionnalités implémentées

| Fonctionnalité | ✅ Statut |
|---|---|
| Formulaire d'inscription | ✅ Complet |
| Formulaire de connexion | ✅ Complet |
| Validation des données | ✅ Complet |
| Persistance (localStorage) | ✅ Complet |
| Affichage du pseudo connecté | ✅ Complet |
| Bouton de déconnexion | ✅ Complet |
| Stockage sécurisé** | ❌ Pas encore (localStorage basique) |
| Récupération mot de passe oubli | ❌ À ajouter |
| 2FA | ❌ À ajouter |

** Pour la production, migrez vers une vraie BDD avec hachage de mots de passe!

---

## 💡 Prochaines étapes (optionnel)

- [ ] Connecter à une vraie base de données backend
- [ ] Implémenter l'hachage des mots de passe
- [ ] Ajouter les tokens JWT
- [ ] Ajouter la récupération de mot de passe
- [ ] Ajouter l'authentification Google/GitHub
