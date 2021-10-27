// console.log(process.env);
/* const firebaseConfig = {
    apiKey: "AIzaSyA-1uQRBxzdZeQQstFp_AGin4qrJknONFM",
    authDomain: "genius-car-mechanic-fb2e7.firebaseapp.com",
    projectId: "genius-car-mechanic-fb2e7",
    storageBucket: "genius-car-mechanic-fb2e7.appspot.com",
    messagingSenderId: "715104517453",
    appId: "1:715104517453:web:8bc8fce149255afdeb4b04"
}; */
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;