
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Create Account
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Join Homecare today
          </p>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Full name" />
            <Input type="email" placeholder="Email address" />
            <Input type="tel" placeholder="Phone number" />
            <Input type="password" placeholder="Password" />

            <select
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select your city
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Agra">Agra</option>
              <option value="Lucknow">Lucknow</option>
            </select>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
