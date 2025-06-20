import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";

interface LoginFormData {
  email?: string;
  mobile?: string;
  password: string;
}

const Login: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mobile" | "email">("mobile");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Login attempt with:", formData);
    // Handle login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`${provider} login clicked`);
    // Handle social login logic here
  };

  return (
    <div
      style={{ flexDirection: "column" }}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600 tracking-wider mb-2">
          LOGIN
        </h1>
        <p className="text-gray-600">Welcome Back!</p>
      </div>
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-8">
          {/* Header */}

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "mobile" | "email")}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-100">
              <TabsTrigger
                value="email"
                className="data-[state=active]:bg-white data-[state=active]:text-gray-900"
              >
                Email Address
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
              >
                Mobile Number
              </TabsTrigger>
            </TabsList>

            <div className="space-y-4">
              {/* Email Tab Content */}
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-2 focus:border-green-500"
                    required
                  />
                </div>
              </TabsContent>

              {/* Mobile Tab Content */}
              <TabsContent value="mobile" className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="mobile"
                    className="text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </Label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-gray-100 border-2 border-r-0 rounded-l-md border-gray-200">
                      <div className="w-5 h-4 bg-green-600 rounded-sm mr-2"></div>
                      <span className="text-sm font-medium text-gray-700">
                        +966
                      </span>
                    </div>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="--- ---"
                      value={formData.mobile}
                      onChange={(e) =>
                        handleInputChange("mobile", e.target.value)
                      }
                      className="border-2 rounded-l-none focus:border-green-500 border-l-0"
                      required
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="border-2 focus:border-green-500 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Button
                  type="button"
                  variant="link"
                  className="text-sm text-gray-600 hover:text-gray-800 p-0 h-auto"
                >
                  Forgot your password?
                </Button>
              </div>

              {/* Login Button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-semibold"
              >
                Login
              </Button>
            </div>
          </Tabs>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Button
                type="button"
                variant="link"
                className="text-gray-800 hover:text-gray-900 p-0 h-auto font-semibold"
              >
                Create a new account
              </Button>
            </span>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">
                Or signup using
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center space-x-4">
            {[
              { name: "Google", symbol: "G", color: "text-red-500" },
              { name: "Apple", symbol: "🍎", color: "text-black" },
              { name: "Twitter", symbol: "𝕏", color: "text-blue-500" },
              { name: "Facebook", symbol: "f", color: "text-blue-600" },
            ].map((social) => (
              <Button
                key={social.name}
                type="button"
                variant="outline"
                size="sm"
                className={`w-12 h-12 rounded-full border-2 hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${social.color}`}
                onClick={() => handleSocialLogin(social.name)}
              >
                <span className="text-lg font-bold">{social.symbol}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
