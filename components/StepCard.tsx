import { ReactNode } from "react";

interface StepCardProps {
  num: string;
  title: string;
  cmd: string;
  desc: ReactNode;
  optional?: boolean;
}

export default function StepCard({ num, title, cmd, desc, optional }: StepCardProps) {
  return (
    <article className="step fade-up">
      <div className="step-num">
        <span>{num}</span>
        {optional && <span className="opt">opcional</span>}
      </div>
      <h3 className="step-title">{title}</h3>
      <code className="step-cmd">{cmd}</code>
      <p className="step-desc">{desc}</p>
    </article>
  );
}
