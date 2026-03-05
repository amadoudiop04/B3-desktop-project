# Système d'Authentification Login/Register

## 📋 Fonctionnalités

- ✅ **Inscription** : Créer un nouveau compte avec email/pseudo/mot de passe
- ✅ **Connexion** : Se connecter avec email et mot de passe
- ✅ **Déconnexion** : Bouton de déconnexion dans l'en-tête
- ✅ **Persistance** : Les données sont stockées dans localStorage
- ✅ **Validation** : Vérification des emails en doublon, force du mot de passe
- ✅ **UI Responsive** : Design moderne avec TailwindCSS

## 🏗️ Structure des fichiers

```
src/
├── contexts/
│   └── AuthContext.tsx          # Contexte d'authentification avec hooks
├── components/
│   └── Auth/
│       ├── AuthPage.tsx         # Page principale d'auth
│       ├── LoginForm.tsx        # Formulaire de connexion
│       └── RegisterForm.tsx     # Formulaire d'inscription
└── App.tsx                      # Application principale (modifiée)
```

## 🚀 Utilisation

### Exemple d'utilisation du hook `useAuth()`

```tsx
import { useAuth } from './contexts/AuthContext';

function MyComponent() {
  const { user, login, register, logout, isLoading } = useAuth();

  // user: { id, email, username } ou null
  // login(email, password): Promise
  // register(username, email, password): Promise
  // logout(): void
  // isLoading: boolean
}
```

## 💾 Données stockées

Utilisateurs (localStorage.users):
```json
[
  {
    "id": "1709644800000",
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }
]
```

Utilisateur actuel (localStorage.currentUser):
```json
{
  "id": "1709644800000",
  "username": "john_doe",
  "email": "john@example.com"
}
```

## 📝 Credentials de test

Après inscription, vous pouvez utiliser le compte pour vous connecter directement.

### Créer un compte de test:
1. Cliquez sur "S'inscrire"
2. Remplissez les champs:
   - Nom d'utilisateur: `test_user`
   - Email: `test@example.com`
   - Mot de passe: `password123`
3. Cliquez sur "S'inscrire"
4. Vous êtes automatiquement connecté!

## ⚠️ Notes importantes

- **Sécurité**: Les mots de passe sont stockés en clair dans localStorage (à des fins de démo)
  - En production, il faut migrer vers une vraie base de données avec hachage (bcrypt, argon2, etc.)
- **localStorage**: Les données persistront même après redémarrage de l'app
- **Validation minimale**: Le système inclut des validations basiques

## 🔒 Points d'amélioration pour la production

1. ✅ Remplacer localStorage par une vraie base de données (PostgreSQL, MongoDB, etc.)
2. ✅ Hasher les mots de passe (bcrypt, Argon2)
3. ✅ Ajouter JWT ou sessions pour l'authentification serveur
4. ✅ Implémenter "Remember me" / refresh tokens
5. ✅ Ajouter 2FA (authentification à deux facteurs)
6. ✅ Ajouter email de confirmation
7. ✅ Ajouter "Mot de passe oublié"

## 🎨 Personnalisation

- Couleurs: Modifiez les classes Tailwind dans les composants Auth
- Messages: Modifiez les chaînes de texte dans les formulaires
- Validations: Ajoutez des règles supplémentaires dans les fonctions `login()` et `register()`
