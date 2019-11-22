export const fakeAuth = {
  isAuthenticated: false,
  // user: "",
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    //   fakeAuth.user = "ega";
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
