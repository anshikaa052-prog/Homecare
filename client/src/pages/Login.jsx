
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Welcome Back
          </CardTitle>

          <p className="text-center text-muted-foreground">
            Login to your Homecare account
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              required
            />

            <Input
              type="password"
              placeholder="Password"
              required
            />

            {/* Demo Login */}
            <div className="space-y-2">
              <p className="text-sm text-center text-muted-foreground">
                Demo Login
              </p>

              <div className="grid grid-cols-2 gap-2">
                <Button type="button" variant="outline">
                  Customer Demo
                </Button>

                <Button type="button" variant="outline">
                  Professional Demo
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
