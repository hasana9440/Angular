import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth,private router:Router) { }

  async signup(email: string, password: string) {
    try {
      const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      // Optionally, store additional user data in Firestore using firestore service
      return userCredential;
    } catch (error:any) {
      console.error(error);
      //console.error('sign up error :'. error.message);
      throw error; // Re-throw for handling in components
    }
  }
  
  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
 
  
  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }
}
