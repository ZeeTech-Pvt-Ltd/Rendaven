'use client'

// Replaces the old ChunkErrorBoundary: shown if a route chunk fails to load
// (or a render error escapes); auto-resets on the next navigation.
export default function Error({ reset }) {
  return (
    <div className="page-loading" role="alert">
      <p style={{ color: 'var(--muted)', marginBottom: 18 }}>
        Something went wrong loading this page.
      </p>
      <button className="btn btn--gold" type="button" onClick={() => reset()}>
        Reload page
      </button>
    </div>
  )
}
