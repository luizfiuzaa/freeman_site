import { ReactNode } from "react";

interface FlagCardProps {
  name: string;
  alias?: string;
  desc: ReactNode;
}

export default function FlagCard({ name, alias, desc }: FlagCardProps) {
  return (
    <div className="flag fade-up">
      <div>
        <div className="flag-name">{name}</div>
        {alias && <div className="flag-alias">{alias}</div>}
      </div>
      <p className="flag-desc">{desc}</p>
    </div>
  );
}
