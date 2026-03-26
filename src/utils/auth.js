import { jwtDecode } from "jwt-decode";

class AuthService {
  getToken() {
    return localStorage.getItem("id_token");
  }
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    // re-directs to homepage/booking
    window.location.assign("/");
  }
  //Get user data from the saved token
  getProfile() {
    return jwtDecode(this.getToken());
  }
  //check if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  //Check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      return true;
    }
  }
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

const Auth = new AuthService();
export default Auth;
