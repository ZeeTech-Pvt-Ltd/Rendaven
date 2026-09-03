// Shared wrapper for the legal pages (template text — needs lawyer review
// before launch).

export default function LegalPage({ title, updated, children }) {
  return (
    <div className="container legal">
      <h1>{title}</h1>
      <p className="legal__updated">Last updated: {updated}</p>
      {children}
    </div>
  )
}
