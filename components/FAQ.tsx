const faqs = [
  {
    q: "How fast will someone follow up?",
    a: "Typically same day or next business day. If you submit after hours, it may be the next day."
  },
  {
    q: "Do I have to explain everything perfectly?",
    a: "No. Just give the basics. We’ll ask what we need in the follow-up."
  },
  {
    q: "Is this credit repair?",
    a: "No. This is next-step planning and routing."
  },
  {
    q: "What happens after I submit?",
    a: "Your info is sent into our CRM and routed based on what you select."
  }
];

export default function FAQ() {
  return (
    <div className="split">
      {faqs.map((f) => (
        <div className="item" key={f.q}>
          <h3 className="itemTitle">{f.q}</h3>
          <p className="itemBody">{f.a}</p>
        </div>
      ))}
    </div>
  );
}

