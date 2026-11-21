import { Card } from "./MainCard.styles";

const MainCard = ({
  children,
  variant = "default",
  ...props
}) => {
  return (
    <Card $variant={variant} {...props}>
      {children}
    </Card>
  );
};

export default MainCard;