import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import Header from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Secure Authentication
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience seamless and secure authentication with our modern, responsive design system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/signup">
              <Button size="lg" className="flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/auth/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Secure by Design</CardTitle>
              <CardDescription>
                Built with security best practices and modern encryption standards.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Optimized for performance with instant loading and smooth interactions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>User Friendly</CardTitle>
              <CardDescription>
                Intuitive interface designed for the best user experience possible.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="mb-6 opacity-90">
              Join thousands of users who trust our authentication system.
            </p>
            <Link to="/auth/signup">
              <Button size="lg" variant="secondary">
                Create Your Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
