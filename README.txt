NATURO PHARMA — Prototype Android hors ligne

Contenu:
- app/src/main/assets/index.html : application locale fonctionnelle
- app/src/main/assets/logo.jpg : logo fourni
- app/src/main/res/mipmap-* : icône Android dérivée du logo
- Projet Android Studio (wrapper WebView) pour compiler un APK.

Données:
- Les 50 articles de l'onglet ARTICLES du fichier Excel fourni ont été importés.
- Le fichier Excel ne contient pas de catégorie explicite pour ces lignes; elles sont donc initialisées avec "Tsy voasokajy".
- Les ventes et mouvements enregistrés dans l'application sont stockés localement sur le téléphone.
- Export de sauvegarde JSON et export CSV des ventes disponibles dans Plus.

Compiler:
1. Ouvrir le dossier NaturoPharma dans Android Studio.
2. Laisser Gradle synchroniser le projet (Android Gradle Plugin 8.6.1, SDK 35).
3. Build > Build Bundle(s) / APK(s) > Build APK(s).
4. L'APK de test sera dans app/build/outputs/apk/debug/.

Important:
Ceci est un prototype fonctionnel de départ et le projet source Android, pas encore un APK compilé/signé. Tester les calculs et la sauvegarde avec une copie des données avant toute utilisation de production. Les données locales ne se synchronisent pas avec d'autres téléphones.
