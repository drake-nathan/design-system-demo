import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import {
  TextfieldAbstracted,
  TextfieldComposable,
} from "@/components/molecules/textfield";

export const LoginCard = (): React.JSX.Element => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle className="text-2xl">Login</CardTitle>

      <CardDescription>
        Enter your email below to login to your account.
      </CardDescription>
    </CardHeader>

    <CardContent className="grid gap-4">
      <TextfieldAbstracted id="email" label="Email" />

      <TextfieldComposable>
        <Label htmlFor="password">Password</Label>
        <Input id="password" required type="password" />
      </TextfieldComposable>
    </CardContent>

    <CardFooter>
      <Button className="w-full">Sign in</Button>
    </CardFooter>
  </Card>
);
