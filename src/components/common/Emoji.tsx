interface EmojiProps {
  symbol: string;
  label: string;
}

export default function Emoji({ symbol, label }: EmojiProps) {
  return (
    <span
      role="img"
      aria-label={label ?? ""}
      area-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
}
