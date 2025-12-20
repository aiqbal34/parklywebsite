import { NextRequest, NextResponse } from 'next/server';
import admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  try {
    // Option 1: Use service account from environment variable (recommended for Vercel)
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } 
    // Option 2: Use individual environment variables
    else if (process.env.FIREBASE_PROJECT_ID) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
    }
    // Option 3: Use default credentials (for local development with gcloud)
    else {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Store email in Firestore
    try {
      const db = admin.firestore();
      const timestamp = new Date();
      
      // Add email to 'subscribers' collection
      await db.collection('subscribers').add({
        email: email.toLowerCase().trim(),
        subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
        source: 'website',
        status: 'pending',
      });

      return NextResponse.json(
        { message: 'Email submitted successfully! We will send you a download link soon.' },
        { status: 200 }
      );
    } catch (firebaseError: any) {
      console.error('Firestore error:', firebaseError);
      
      // If Firebase is not configured, fall back to logging
      if (firebaseError.code === 'app/no-app' || firebaseError.message?.includes('initializeApp')) {
        console.log('Firebase not configured. Email logged:', email);
        return NextResponse.json(
          { message: 'Email submitted successfully!', note: 'Firebase not configured - email logged to console' },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to save email. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing subscription:', error);
    return NextResponse.json(
      { error: 'Failed to process subscription. Please try again.' },
      { status: 500 }
    );
  }
}
