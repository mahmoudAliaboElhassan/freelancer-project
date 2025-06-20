import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Info, Mail, Phone } from "lucide-react";

interface SignupFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  mobile: string;
  password: string;
  emailTips: boolean;
  agreeTerms: boolean;
  captchaVerified: boolean;
}

const Signup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showUsernameTooltip, setShowUsernameTooltip] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    emailTips: false,
    agreeTerms: false,
    captchaVerified: false,
  });

  const handleInputChange = (
    field: keyof SignupFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.agreeTerms) {
      alert("Please agree to the terms & conditions and privacy policy");
      return;
    }
    if (!formData.captchaVerified) {
      alert("Please complete the captcha verification");
      return;
    }
    console.log("Signup attempt with:", formData);
    // Handle signup logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialSignup = (provider: string) => {
    console.log(`${provider} signup clicked`);
    // Handle social signup logic here
  };

  const handleCaptchaChange = () => {
    setFormData((prev) => ({
      ...prev,
      captchaVerified: !prev.captchaVerified,
    }));
  };

  return (
    <div
      style={{ flexDirection: "column" }}
      className="min-h-screen bg-gray-50 flex items-center justify-center p-4"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-600 tracking-wider mb-2">
          SIGNUP
        </h1>
        <p className="text-gray-600">Create Your Free Account & Get Started.</p>
      </div>
      <Card className="w-full max-w-lg shadow-lg">
        <CardContent className="p-8">
          {/* Header */}

          {/* Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "email" | "mobile")}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
              <TabsTrigger
                value="email"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Address
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-orange-500 data-[state=active]:text-white flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Mobile Number
              </TabsTrigger>
            </TabsList>

            <div className="space-y-4 mt-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="border-2 focus:border-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="border-2 focus:border-green-500"
                  />
                </div>
              </div>

              {/* Username Field */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="username"
                    className="text-sm font-medium text-gray-700"
                  >
                    Username *
                  </Label>
                  <div className="relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto w-auto"
                      onMouseEnter={() => setShowUsernameTooltip(true)}
                      onMouseLeave={() => setShowUsernameTooltip(false)}
                    >
                      <Info className="w-4 h-4 text-gray-400" />
                    </Button>
                    {showUsernameTooltip && (
                      <div className="absolute bottom-full left-0 mb-2 p-2 bg-gray-800 text-white text-xs rounded max-w-xs z-10">
                        Only letters and the dot (.) character, followed by a
                        space, are allowed.
                      </div>
                    )}
                  </div>
                </div>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter a username"
                  value={formData.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  className="border-2 focus:border-green-500"
                  required
                />
              </div>

              {/* Email/Mobile Tab Content */}
              <TabsContent value="email" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-2 focus:border-green-500"
                    required
                  />
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <Label
                    htmlFor="mobile"
                    className="text-sm font-medium text-gray-700"
                  >
                    Mobile Number *
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
                  Password *
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

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="emailTips"
                    checked={formData.emailTips}
                    onCheckedChange={(checked) =>
                      handleInputChange("emailTips", checked as boolean)
                    }
                    className="data-[state=checked]:bg-orange-500"
                  />
                  <Label htmlFor="emailTips" className="text-sm text-gray-700">
                    Send me emails with tips & news
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("agreeTerms", checked as boolean)
                    }
                  />
                  <Label htmlFor="agreeTerms" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 underline"
                    >
                      terms & conditions
                    </Button>{" "}
                    and the{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 underline"
                    >
                      privacy policy
                    </Button>
                  </Label>
                </div>
              </div>

              {/* Captcha */}
              <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg bg-gray-50">
                <Checkbox
                  id="captcha"
                  checked={formData.captchaVerified}
                  onCheckedChange={handleCaptchaChange}
                />
                <Label htmlFor="captcha" className="text-sm text-gray-700">
                  I'm not a robot
                </Label>
                <div className="ml-auto">
                  <div className="w-8 h-8 bg-blue-500 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      reCAPTCHA
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-semibold"
                disabled={!formData.agreeTerms || !formData.captchaVerified}
              >
                Send Verification Code
              </Button>
            </div>
          </Tabs>

          {/* Login Link */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
              <Button
                type="button"
                variant="link"
                className="text-gray-800 hover:text-gray-900 p-0 h-auto font-semibold"
              >
                Login
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

          {/* Social Signup Buttons */}
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
                className={`w-12 h-12 rounded-md border-2 hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${social.color}`}
                onClick={() => handleSocialSignup(social.name)}
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

export default Signup;
