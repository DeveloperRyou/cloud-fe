import Icon from ".";

const exchangeToIcon = (exchange: ExchangeType | undefined): string => {
  switch (exchange) {
    case "upbit":
      return "/icons/exchange/upbit.png";
    case "okx":
      return "/icons/exchange/okx.png";
    default:
      return "";
  }
};

interface ExchangeIconProps {
  exchange: ExchangeType | undefined;
  size?: number;
}

export default function ExchangeIcon({
  exchange,
  size = 24,
}: ExchangeIconProps) {
  return <Icon src={exchangeToIcon(exchange)} size={size} />;
}
