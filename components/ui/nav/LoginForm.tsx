"use client";

import React from "react";
import { Button } from "../button";
import { FaGithub } from "react-icons/fa";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  return (
    <Button variant="outline" className="flex items-center gap-2">
      {" "}
      <FaGithub /> Login
    </Button>
  );
}
