import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  mono?: boolean;
}

export default function StatCard({ icon, value, label, mono }: StatCardProps) {
  return (
    <div className="gh-stat fade-up">
      <div className="ico">{icon}</div>
      <div className={`val${mono ? " mono" : ""}`}>{value}</div>
      <div className="lbl">{label}</div>
    </div>
  );
}
