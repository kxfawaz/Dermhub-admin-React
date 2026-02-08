export function AdminLogin(username, password) {
  const storedUser = import.meta.env.VITE_ADMIN_USER;
  const storedPass = import.meta.env.VITE_ADMIN_PASS;

  if (username === storedUser && password === storedPass) {
    localStorage.setItem("adminAuth", "true");
    return true;
  }
  return false;
}

export function adminLogout() {
  localStorage.removeItem("adminAuth");
}

export function isAdminLoggedIn() {
  return localStorage.getItem("adminAuth") === "true";
}
