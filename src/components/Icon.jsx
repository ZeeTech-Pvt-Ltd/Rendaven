// Lightweight stroke icon set (24×24 viewBox, currentColor).
const PATHS = {
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2.5" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />
      <path d="M9.3 12l1.9 1.9 3.6-3.9" />
    </>
  ),
  bolt: <path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z" />,
  chart: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  coins: (
    <>
      <circle cx="8.5" cy="8.5" r="6" />
      <path d="M16.8 7.6a6 6 0 1 1-9.2 9.2" />
      <path d="M14.8 11.2a6 6 0 1 1-3.6 6" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h14v14H5a2 2 0 0 1-2-2V7z" />
      <path d="M15.5 12h3" />
    </>
  ),
  device: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2z" />
      <path d="M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z" />
      <path d="M19 19a3 3 0 0 1-3 3h-3" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  star: <path d="M12 2.7l2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3 1.2-6.3L2.8 9.4l6.4-.8L12 2.7z" />,
  'arrow-right': (
    <>
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </>
  ),
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  x: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7.5l8.5 6 8.5-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.6 4 5.8 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.8-4-9s1.3-6.4 4-9z" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22.5v-17z" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    </>
  ),
  pie: (
    <>
      <path d="M12 3a9 9 0 1 0 9 9h-9V3z" />
      <path d="M15 3.5A9 9 0 0 1 20.5 9H15V3.5z" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M8 21h8M6.5 7h11" />
      <path d="M4 7l2.5-3.5L9 7a2.5 2.5 0 0 1-5 0z" />
      <path d="M15 7l2.5-3.5L20 7a2.5 2.5 0 0 1-5 0z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3L2.5 20h19L12 3z" />
      <path d="M12 10v4.5" />
      <path d="M12 17.5v.5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      <path d="M19 16l.9 2.6L22.5 19.5l-2.6.9L19 23l-.9-2.6-2.6-.9 2.6-.9L19 16z" />
    </>
  ),
}

export default function Icon({ name, size = 20, strokeWidth = 2, filled = false, className, style }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
