"use client";
import { auth } from "@/util/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode, type FC } from "react";

type ClientComponentProps = {
  children: ReactNode;
};

export const ClientComponent: FC<ClientComponentProps> = ({ children }) => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isLoggedIn = user !== null;
      if (isLoggedIn && path === "/auth/login") {
        redirect("/admin");
      }
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, [path]);

  if (!isAuthReady) return <></>;

  return children;
};
