import { Button } from "./MainButton.styles";

const MainButton = ({
  children,
  variant = "primary",
  type = "button",
  ...props
}) => {
  return (
    <Button $variant={variant} type={type} {...props}>
      {children}
    </Button>
  );
};

export default MainButton;