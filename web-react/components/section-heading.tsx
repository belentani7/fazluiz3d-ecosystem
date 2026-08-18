export function SectionHeading({
  tag,
  title,
  sub,
  align = 'left',
}: {
  tag: string
  title: string
  sub?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span
        data-reveal
        className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-gold)]"
      >
        {tag}
      </span>
      <h2
        data-reveal
        data-reveal-delay="0.08"
        className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight tracking-tight text-balance"
      >
        {title}
      </h2>
      {sub && (
        <p
          data-reveal
          data-reveal-delay="0.16"
          className="mt-4 text-base leading-relaxed text-[color:var(--color-muted)] text-pretty"
        >
          {sub}
        </p>
      )}
    </div>
  )
}
