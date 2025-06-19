"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginForm() {
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Login
          </CardTitle>
          <p className="text-blue-600 font-semibold">Welcome Back!</p>
          <p className="text-blue-600 text-sm">طلب وصول</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Login Method Toggle */}
          <div className="flex gap-2 mb-4">
            <Button
              variant={loginMethod === "email" ? "default" : "outline"}
              size="sm"
              onClick={() => setLoginMethod("email")}
              className="flex-1"
            >
              Email Address
              <span className="text-xs mr-2">طلب وصول</span>
            </Button>
            <Button
              variant={loginMethod === "phone" ? "default" : "outline"}
              size="sm"
              onClick={() => setLoginMethod("phone")}
              className="flex-1"
            >
              Mobile number
              <span className="text-xs mr-2">طلب وصول</span>
            </Button>
          </div>

          {/* Email/Phone Input */}
          <div className="space-y-2">
            <Label htmlFor="contact">
              {loginMethod === "email" ? "Email Address" : "Phone Number"}
            </Label>
            <div className="flex">
              {loginMethod === "phone" && (
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                  +966
                </span>
              )}
              <Input
                id="contact"
                type={loginMethod === "email" ? "email" : "tel"}
                placeholder={
                  loginMethod === "email" ? "Enter your email" : "-- --- ----"
                }
                className={loginMethod === "phone" ? "rounded-l-none" : ""}
              />
            </div>
            <p className="text-xs text-gray-500">Helper Text</p>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">Helper Text</p>
              <Button
                variant="link"
                size="sm"
                className="text-blue-600 p-0 h-auto"
              >
                Forgot your password?
              </Button>
            </div>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Login
            <span className="text-xs mr-2">طلب وصول</span>
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Button variant="link" className="text-blue-600 p-0 h-auto">
              Create a new account
            </Button>
          </p>

          {/* Social Login */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">Or signup using</p>
            <div className="flex justify-center gap-2">
              <Button variant="outline" size="sm">
                Google
              </Button>
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Twitter
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
