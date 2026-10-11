# लक्ष्मी पूजा तारचुआँ — वेबसाइट प्रोजेक्ट

## टोलों की सीमा
- पुरवारी टोला: 70
- पच्छियारी टोला: 60
- दक्षिण टोला: 50
- बिचला टोला: 30
- मोती टोला: 30
- पाहनटोली: 40
कुल 280 नाम।

## लाइव करने के लिए
1. Firebase Console (https://console.firebase.google.com/) पर नया project बनाएँ।
2. Project settings में Web App बनाएँ और `index.html` के `firebaseConfig` placeholders बदलें।
3. Authentication में Email/Password enable करें।
4. Firestore Database बनाएँ और `firestore.rules` publish करें।
5. Authentication → Users में admin account बनाएँ: `admin@tarachua-app.com` और मजबूत पासवर्ड।
6. Firestore `users` collection में admin Auth UID को document ID रखें और data `{ "username":"admin", "role":"admin" }` लिखें।
7. Node.js और Firebase CLI install करें: `npm install -g firebase-tools`
8. Project folder में `firebase login`, `firebase use --add`, `cd functions && npm install && cd ..`, फिर `firebase deploy` चलाएँ।
9. Firebase Hosting आपको live URL देगा। उसे यूज़र के साथ साझा करें।

वेबसाइट पर Login ID `user1` जैसी लिखी जाएगी और ऐप internally `user1@tarachua-app.com` उपयोग करेगा। यूज़र अकाउंट केवल Admin dashboard से बनाए जाएँगे। Cloud Functions deploy करने के लिए Firebase billing/Blaze plan की जरूरत पड़ सकती है।

यह project अभी आपके खाते पर deploy नहीं हुआ है; आपके Firebase खाते में सेटअप करके ही लाइव किया जा सकता है। Deploy से पहले मजबूत पासवर्ड और security rules जाँचें।
