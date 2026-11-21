import { Input } from "./MainInput.styles";

const MainInput = ({
  type = "text",
  error = false,
  ...props
}) => {
  return (
    <Input
      type={type}
      $error={error}
      aria-invalid={error || undefined}
      {...props}
    />
  );
};

export default MainInput;