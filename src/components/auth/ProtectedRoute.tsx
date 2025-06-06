
import { ReactNode } from "react";
import AuthGuard from "./AuthGuard";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  return (
    <AuthGuard requireAuth={true}>
      {children}
    </AuthGuard>
  );
};

export default ProtectedRoute;
