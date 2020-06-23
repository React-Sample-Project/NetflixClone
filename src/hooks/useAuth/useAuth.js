import { useState, useEffect } from "react";
import auth from "../../services/Auth";

function useAuth() {
  const [isLogged, setIsLogged] = useState(null);
  useEffect(() => {
    let mounted = true;
    async function checkAuth() {
      const logged = await auth.isAuthenticated();
      if (mounted && logged !== isLogged) {
        setIsLogged(logged);
      }
    }
    checkAuth();
    return () => (mounted = false);
  }, [isLogged]);
  return [isLogged, setIsLogged];
}

export default useAuth;
