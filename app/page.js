"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <main className="flex flex-col items-center">
        <Button variant="outlined" onClick={() => router.push("/users")}>Go to users page</Button>
      </main>
    </div >
  );
}
