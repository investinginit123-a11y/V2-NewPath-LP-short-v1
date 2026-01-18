// components/Section.tsx
import React from "react";

type Props = {
  id?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, desc, children }: Props) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <h2 className="sectionTitle">{title}</h2>
        {desc ? <p className="sectionDesc">{desc}</p> : null}
        {children}
      </div>
    </section>
  );
}
