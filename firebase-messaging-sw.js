// firebase-messaging-sw.js
// Give the service worker access to Firebase SDK.
// The Firebase SDK is not available in a service worker directly,
// so you need to import it.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// the messagingSenderId.
// Replace with your project's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWjeZwrqCwe5NWN-Pdm5GPkp1_qJrCuSU",
    authDomain: "bloodlink-278a4.firebaseapp.com",
    databaseURL: "https://bloodlink-278a4-default-rtdb.firebaseio.com",
    projectId: "bloodlink-278a4",
    storageBucket: "bloodlink-278a4.firebasestorage.app",
    messagingSenderId: "88657445618",
    appId: "1:88657445618:web:90999baf48e9718ff5466b",
    measurementId: "G-XQGB69C3TP"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.jpg' // You might want to use a smaller, square icon here
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
