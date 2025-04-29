"use client";
import { SignedIn, SignedOut, SignInButton, SignOutButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
    Homepage
    <SignedOut>
      <SignInButton />
    </SignedOut>

    <SignedIn>
      <SignOutButton />
    </SignedIn>
    </div>
  );
}
