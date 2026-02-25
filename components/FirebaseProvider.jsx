'use client';

import { useEffect } from 'react';

export default function FirebaseProvider() {
  useEffect(() => {
    // Initialize Firebase on client side
    const initFirebase = async () => {
      try {
        const { app, analytics } = await import('@/lib/firebase');
        console.log('Firebase initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Firebase:', error);
      }
    };

    initFirebase();
  }, []);

  return null;
}
