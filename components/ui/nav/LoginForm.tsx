"use client";

import React from "react";
import { Button } from "../button";
import { FaGithub } from "react-icons/fa";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

export default function LoginForm() {
  const pathname = usePathname()
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const handLogin = () =>{
    supabase.auth.signInWithOAuth({
      provider:"github",
      options:{
        redirectTo:location.origin + "/auth/callback?next="+ pathname,
      }
    })
  }
  return (

    <Button variant="outline" className="flex items-center gap-2" onClick={handLogin}>
      <FaGithub />
       Signin
    </Button>
  );
}
