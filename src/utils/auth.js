import { jwtDecode } from 'jwt-decode';

class Auth {
  // Save token to localStorage
  login(token, redirect = true) {
    localStorage.setItem('id_token', token);
    if (redirect) {
      window.location.assign('/dashboard');
    }
  }
  // Remove token and reload
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/'); // or wherever
  }
  // Check if user is logged in and token is not expired
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }
  // Check if token is expired
  isTokenExpired(token) {
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch {
      return true;
    }
  }
  // Get raw token
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Get decoded profile
  getProfile() {
    try {
      return jwtDecode(this.getToken());
    } catch {
      return null;
    }
  }

  // Get user id from token
  getUserId() {
    const profile = this.getProfile();
    return profile?.data?.id || null;
  }

  // Get user name initials
  getInitials() {
    const profile = this.getProfile();
    if (!profile?.data) return '??';
    const { name, lastName } = profile.data;
    const initials = `${name?.[0] || ''}${lastName?.[0] || ''}`.trim();
    return initials ? initials.toUpperCase() : '??';
  }
};

export default new Auth();
