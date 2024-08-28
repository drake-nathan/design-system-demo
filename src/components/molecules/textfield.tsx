import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { cn } from "@/utils/cn";

export const TextfieldComposable = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element => {
  return <div className={cn("grid gap-2", className)} {...props} />;
};

export interface TextfieldBuiltInProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const TextfieldAbstracted = ({
  className,
  id,
  label,
  ...props
}: TextfieldBuiltInProps): React.JSX.Element => {
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder="m@example.com" required type="email" />
    </div>
  );
};
