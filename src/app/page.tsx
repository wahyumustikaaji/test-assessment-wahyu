"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignUpModal } from "./auth/components/sign-up-modal";
import { SignInModal } from "./auth/components/sign-in-modal";

export default function LandingPage() {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <Button
            onClick={() => setSignUpOpen(true)}
            className="w-full text-lg py-6"
            size="lg"
          >
            Sign Up
          </Button>
          <Button
            onClick={() => setSignInOpen(true)}
            variant="outline"
            className="w-full text-lg py-6"
            size="lg"
          >
            Sign In
          </Button>
        </div>
      </div>

      <SignUpModal open={signUpOpen} onOpenChange={setSignUpOpen} />
      <SignInModal open={signInOpen} onOpenChange={setSignInOpen} />
    </div>
  );
}
