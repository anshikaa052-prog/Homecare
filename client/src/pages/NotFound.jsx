
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
      <h1 className="text-6xl font-bold text-primary">404</h1>

      <h2 className="text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>

      <Button asChild>
        <Link to="/login">Go to Login</Link>
      </Button>
    </div>
  );
}

export default NotFound;
