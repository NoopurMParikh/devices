import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  defaultUser: any = {
    username: 'JohnMiller',
    password: 'password123',
  }

  constructor(private location: Location) { }

  //Replace this functin with one calling the API to retrieve the user
  getUser() {
    //Replace with actual API request
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    //Replace this user with the API call
    localStorage.setItem('user', JSON.stringify(user))
  }

  setLoggIn() {
    localStorage.setItem('loggedIn', 'true');
  }

  setLoggedOut() {
    localStorage.setItem('loggedIn', 'false');
  }

  logUserOut() {
    localStorage.removeItem('user');
    this.setLoggedOut();
    location.reload();
  }

  isLoggedIn() {
    return localStorage.getItem('loggedIn') == 'true';
  }

  logUserIn(user: any) {
    if(this.isValidUser(user)) {
      this.setUser(user);
      this.setLoggIn();
      return true;
    }
    return false;
  }

  isValidUser(user: any) {
    //For this case, compare to the default user. Normally, you'd compare to the database
    //Also, compraring the password as a string is not a good practice at all, but it'll do for this case
    return user.username == this.defaultUser.username && user.password == this.defaultUser.password
  }
}
