import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concoursVote';

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDNFkPKSiZ4vgmZLW_2rUbeBzUeoj1Ecyk",
      authDomain: "concours-vote.firebaseapp.com",
      projectId: "concours-vote",
      storageBucket: "concours-vote.appspot.com",
      messagingSenderId: "941192646293",
      appId: "1:941192646293:web:c57a0186968bb8aff0159c",
      measurementId: "G-PQJGRTZC8L"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
