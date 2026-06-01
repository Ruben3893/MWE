# M.M. Engineering Works (MEW)

Responsive single-page business site for **M.M. Engineering Works**, built with React, Tailwind CSS, and optional Firebase Firestore logging for contact inquiries.

## Features

- Brand-aligned layout (orange `#E45D25`, blue `#0070BB`) from company materials
- Services grid for all core offerings
- WhatsApp deep links (`https://wa.me/919845398542`) on primary CTAs
- Click-to-call (`tel:+919845398542`)
- Embedded Google Maps for the Hebbagodi, Bangalore address
- Optional Firestore logging for the contact form (`inquiries` collection)

## Setup

```bash
npm install
cp .env.example .env.local   # optional — for Firebase inquiry logging
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Firebase (optional)

1. Create a Firebase project and enable **Firestore**.
2. Add a web app and copy config values into `.env.local`.
3. Example Firestore rule (adjust for production):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inquiries/{docId} {
      allow create: if request.resource.data.keys().hasAll(['name', 'phone', 'message']);
      allow read, update, delete: if false;
    }
  }
}
```

Without Firebase env vars, the site works fully; the contact form shows a local success message and WhatsApp/phone remain the primary channels.

## Project structure

```
src/
  components/   Header, Hero, Services, Contact, LocationMap, Footer, WhatsAppButton
  config/       constants, firebase
  hooks/        useContactForm
```
