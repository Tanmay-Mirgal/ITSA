export default function SectionHeader({ meta, title, children }) {
  return (
    <header className="section-header reveal">
      <div className="section-meta">{meta}</div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </header>
  );
}
