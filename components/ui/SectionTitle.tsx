interface SectionTitleProps {
  children: React.ReactNode
  extra?: React.ReactNode
}

export default function SectionTitle({ children, extra }: SectionTitleProps) {
  return (
    <div
      className="flex items-center justify-between pb-2 mb-3"
      style={{ borderBottom: '2px solid var(--border)' }}
    >
      <h2
        style={{
          fontSize: '10px',
          color: 'var(--gold)',
          textShadow: '1px 1px 0 #000',
          letterSpacing: 2,
        }}
      >
        {children}
      </h2>
      {extra}
    </div>
  )
}
