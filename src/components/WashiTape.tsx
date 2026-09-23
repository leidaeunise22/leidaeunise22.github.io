type WashiTapeProps = {
  className?: string;
  rotate?: number;
  tone?: "rose" | "sage" | "gold";
};

const stripes: Record<NonNullable<WashiTapeProps["tone"]>, string> = {
  rose: "repeating-linear-gradient(45deg, var(--rose) 0 8px, var(--blush) 8px 16px)",
  sage: "repeating-linear-gradient(45deg, var(--sage-deep) 0 8px, var(--sage) 8px 16px)",
  gold: "repeating-linear-gradient(45deg, var(--gold) 0 8px, var(--blush) 8px 16px)",
};

// Decorative diagonal-stripe tape strip with faux-torn notched ends.
export default function WashiTape({ className = "", rotate = -4, tone = "rose" }: WashiTapeProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-7 w-20 opacity-70 ${className}`}
      style={{
        background: stripes[tone],
        transform: `rotate(${rotate}deg)`,
        clipPath:
          "polygon(0% 20%, 5% 0%, 95% 0%, 100% 20%, 100% 80%, 95% 100%, 5% 100%, 0% 80%)",
      }}
    />
  );
}
