export const tokenStorage = {
  get() {
    if (typeof window === "undefined") {
      return null;
    }

    return window.localStorage.getItem("access_token");
  },
  set(token: string) {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("access_token", token);
  },
  clear() {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem("access_token");
  },
};

