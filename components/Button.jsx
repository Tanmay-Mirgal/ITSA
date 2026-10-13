export default function Button({ href, variant = 'line', cursor = 'GO', external = false, children }) {
  const externalProps = external ? { target: '_blank', rel: 'noreferrer' } : {};

  return (
    <a className={`button button-${variant}`} href={href} data-cursor={cursor} {...externalProps}>
      <span>{children}</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}
