import "server-only";
import { cert, getApps, initializeApp as initAdminApp } from "firebase-admin/app";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { getFirestore as getAdminDb } from "firebase-admin/firestore";
import { getStorage as getAdminStorage } from "firebase-admin/storage";

const apps = getApps();
export const adminApp = apps.length
    ? apps[0]
    : initAdminApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            // Replace escaped \n in env with real newlines if needed:
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        }),
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });

export const adminAuth = getAdminAuth(adminApp);
export const adminDb = getAdminDb(adminApp);
export const adminStorage = getAdminStorage(adminApp);