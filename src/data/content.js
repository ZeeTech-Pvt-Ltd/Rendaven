/**
 * All site copy lives here so it can be edited in one place.
 *
 * NOTE: testimonials, rating counts and any performance claims are
 * placeholder marketing copy (mirroring the reference site) — confirm
 * numbers and wording before launch. Legal pages are template text.
 */

export const SITE_NAME = 'Rendaven'
export const SITE_URL = 'https://rendaven.com/'
export const SUPPORT_EMAIL = 'support@rendaven.com'

// Registration forms POST JSON to this CORS-open endpoint.
export const FORM_ENDPOINT = 'https://apexai-experts.com/homeMailAction.php'
export const OFFER_NAME = 'Rendaven-Site'

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faq' },
]

export const HERO = {
  badge: 'Now live across Australia',
  title: ['Rendaven — the', 'AI-powered', 'trading platform'],
  // `title` is [before, highlighted, after] — the highlighted word gets gold.
  lead: 'Buy, trade and manage Bitcoin, Ethereum and 300+ assets with an 85%-accuracy AI engine, 256-bit encryption and round-the-clock professional support.',
  trust: ['256-bit SSL encryption', '98% cold storage', '24/7 support'],
  formTitle: 'Create your free account',
  formSubtitle: 'Join thousands of Australian traders on Rendaven — registration takes under two minutes.',
}

export const ABOUT_PAGE = {
  story: {
    kicker: 'Our story',
    title: 'Built by traders, engineered for everyone',
    paragraphs: [
      'Rendaven was founded on a simple frustration: world-class trading tools were locked behind complicated platforms, hidden fees and jargon. We believed Australian traders deserved better — so we built it.',
      'Today, Rendaven combines an advanced AI-driven trading engine with institutional-grade security and an interface anyone can master in minutes. From your first Bitcoin to a diversified multi-asset portfolio, everything you need lives in one place.',
    ],
    facts: ['Founded 2019', 'Sydney HQ', '300+ instruments', '24/7 human support'],
    image: '/images/about-1280.jpg',
  },
  values: {
    kicker: 'What we stand for',
    title: 'The principles behind Rendaven',
    items: [
      {
        icon: 'shield',
        title: 'Security by default',
        text: '256-bit encryption, 98% cold storage and two-factor authentication on every account — before anything else.',
      },
      {
        icon: 'scale',
        title: 'Transparency first',
        text: 'Clear fees, honest risk disclosure and no fine-print surprises. What you see on the platform is what you get.',
      },
      {
        icon: 'sparkle',
        title: 'Simplicity',
        text: 'Powerful tools, human language. If a first-time trader cannot understand it, we redesign it.',
      },
      {
        icon: 'headset',
        title: 'Human support',
        text: 'A real person answers 24/7 — not a bot loop. Every client gets a dedicated account manager from day one.',
      },
    ],
  },
  difference: {
    kicker: 'The Rendaven difference',
    title: 'What sets us apart',
    items: [
      {
        title: 'AI that works while you sleep',
        text: 'Our engine scans global markets around the clock and delivers signals with an 85% accuracy rate — so opportunities never pass you by.',
      },
      {
        title: 'Bank-grade custody, not promises',
        text: 'Client funds are held in segregated accounts, and 98% of digital assets sit in offline cold wallets — unreachable by anyone but you.',
      },
      {
        title: 'Built for the way Australians trade',
        text: 'Local funding methods, AUD-friendly onboarding and support that understands your timezone and your questions.',
      },
    ],
  },
}

export const PRODUCT_PAGE = {
  hero: {
    title: "Take your trading further with Rendaven's analytics platform",
    lead: "Track live market movements, follow AI-driven signals and grow your portfolio with tools designed for traders at every level — from first-timers to pros.",
  },
  intro: {
    kicker: 'Built for you',
    title: 'Everything a personal trader needs, in one app',
  },
  features: [
    {
      img: '/images/ecosystem-1-320.png',
      title: 'Manage Your Crypto',
      text: 'Buy, hold and trade Bitcoin, Ethereum and more from a single, easy-to-navigate dashboard.',
    },
    {
      img: '/images/ecosystem-2-320.png',
      title: 'Every Asset, One Portfolio',
      text: 'See crypto, equities, forex and commodities together in one place — no more juggling multiple apps.',
    },
    {
      img: '/images/ecosystem-3-320.png',
      title: 'Live Market Insights',
      text: 'Real-time prices, clear charts and AI-driven signals, updated around the clock.',
    },
    {
      img: '/images/ecosystem-4-320.png',
      title: 'Trade From Anywhere',
      text: 'Your portfolio goes where you go — desktop, tablet or mobile, synced instantly.',
    },
    {
      icon: 'chart',
      title: 'Stats at a Glance',
      text: 'Performance, risk and allocation tracked live, so you always know where your money stands.',
    },
    {
      icon: 'lock',
      title: 'Secure & Private',
      text: 'Every session is protected with 256-bit SSL encryption, and 98% of assets are held in offline cold storage.',
    },
  ],
  experience: {
    kicker: 'The trading experience',
    title: 'The Rendaven Trading Experience',
    text: 'Everything you need to trade with confidence, engineered into one platform.',
    image: '/images/benefits-640.avif',
    points: [
      'Live portfolio tracking — watch every position and allocation update in real time',
      'Pro-grade charts with 80+ indicators to help time your entries',
      'Instant orders on Bitcoin, Ethereum and 300+ other markets',
      'Secure custody with 98% cold storage and two-factor protection',
    ],
  },
}

export const STATS = [
  { value: '85%', label: 'AI signal accuracy' },
  { value: '98%', label: 'of assets held in cold storage' },
  { value: '4.7/5', label: 'rated by 189 traders', gold: true },
  { value: '24/7', label: 'professional assistance' },
]

export const ABOUT = {
  kicker: 'Meet Rendaven',
  title: 'One secure platform for all of your trading',
  text: 'Rendaven brings together an advanced AI-driven trading engine, institutional-grade security and an intuitive interface — so whether you are trading your first Bitcoin or diversifying across 300+ instruments, everything you need is in one place.',
  points: [
    'AI-assisted market signals with 85% accuracy',
    'Beginner-friendly, with no prior trading experience required',
    'Regulated-grade security with 256-bit encryption',
    'Full control — deposit, trade and withdraw at any time',
  ],
}

export const ASSETS = {
  kicker: 'Global markets, one account',
  title: 'Trade the biggest crypto markets in the world from one simple account',
  text: 'Trade the coins traders trust most, alongside equities, forex, commodities and precious metals — all from a single Rendaven account.',
  list: [
    { icon: '/images/coins/btc.svg', name: 'Bitcoin', tag: 'BTC · the original digital asset' },
    { icon: '/images/coins/eth.svg', name: 'Ethereum', tag: 'ETH · smart contracts & DeFi' },
    { icon: '/images/coins/sol.svg', name: 'Solana', tag: 'SOL · high-speed network' },
    { icon: '/images/coins/xrp.svg', name: 'Ripple', tag: 'XRP · cross-border payments' },
    { icon: '/images/coins/ada.svg', name: 'Cardano', tag: 'ADA · research-driven chain' },
    { icon: '/images/coins/doge.svg', name: 'Dogecoin', tag: 'DOGE · the community coin' },
  ],
  note: '…plus 300+ equities, forex pairs, commodities, precious metals and CFDs.',
}

export const STEPS = {
  kicker: 'How Rendaven works',
  title: 'Three simple steps to start trading with Rendaven',
  steps: [
    {
      title: 'Create your free account',
      text: 'Sign up in under two minutes with your name, email and phone number. No trading experience needed — our team guides you from day one.',
      img: '/images/process-1-360.png',
    },
    {
      title: 'Fund your account',
      text: 'Deposit securely by major credit card, bank transfer or PayPal. Your funds are protected the moment they arrive.',
      img: '/images/process-2-360.png',
    },
    {
      title: 'Start trading with AI support',
      text: 'Follow AI-generated market signals, copy seasoned traders or build your own portfolio — on desktop or mobile, whenever you like.',
      img: '/images/process-3-360.png',
    },
  ],
}

export const JOIN = {
  kicker: 'Start today',
  title: 'Open Your Account and Start Trading Today',
  text: 'Opening an account takes less than two minutes. Explore the market with AI-powered insights and see for yourself why traders across Australia are choosing Rendaven.',
  points: [
    'Free registration — no hidden fees to open an account',
    'AI-driven signals with an 85% accuracy rate',
    'Withdraw your funds whenever you want',
  ],
}

export const CALCULATOR = {
  title: 'Earnings calculator',
  subtitle: 'See your estimated potential',
  depositLabel: 'Deposit amount',
  balanceLabel: 'Potential future balance',
  monthlyLabel: 'Estimated monthly earnings',
  disclaimer:
    'Illustrative projection based on an 8.5% monthly rate over 12 months. Trading involves significant risk — projections are not a guarantee of profit.',
}

export const BENEFITS = {
  kicker: 'Why traders choose us',
  title: 'What Makes Rendaven the Smart Choice for Crypto Trading?',
  text: 'From AI-powered precision to beginner-friendly tools, Rendaven is built to give every trader an edge.',
  items: [
    {
      icon: 'bolt',
      title: 'AI-Powered Market Engine',
      text: 'Our AI engine scans global markets around the clock, surfacing signals with an 85% accuracy rate.',
    },
    {
      icon: 'copy',
      title: 'Copy Trading',
      text: 'Mirror the moves of experienced, profitable traders — automatically, with a single click.',
    },
    {
      icon: 'pie',
      title: 'Fractional Shares',
      text: 'Start small. Own fractions of high-value assets and grow your position over time.',
    },
    {
      icon: 'book',
      title: 'Educational Resources',
      text: 'From beginner guides to advanced strategy, learn at your own pace with the Rendaven academy.',
    },
    {
      icon: 'device',
      title: 'Mobile App & Multi-Device',
      text: 'Trade seamlessly across desktop, tablet and mobile — your account stays in sync everywhere.',
    },
    {
      icon: 'headset',
      title: '24/7 Human Support',
      text: 'Real people, real answers — our support team is available around the clock, every day of the year.',
    },
  ],
}

export const OVERVIEW = {
  kicker: 'Platform overview',
  title: 'The Platform at a Glance',
  text: 'Everything you need to know about Rendaven at a glance.',
  rows: [
    { label: 'Technology', value: 'AI-powered trading engine' },
    { label: 'Accuracy', value: '85%' },
    { label: 'Security', value: '256-bit SSL encryption · 98% cold storage' },
    { label: 'Funding methods', value: 'Credit cards, bank transfers and PayPal' },
    { label: 'Trading instruments', value: 'Equities, forex, commodities, precious metals, CFDs and crypto' },
    { label: 'Account setup', value: 'Fast, guided onboarding' },
    { label: 'Compatibility', value: 'Desktop, tablet and mobile' },
    { label: 'Support', value: '24/7 support from real people' },
  ],
}

export const RATING = { score: '4.7', stars: 5, meta: 'based on 189 reviews' }

export const TESTIMONIALS = {
  kicker: 'Testimonials',
  title: 'Real Words from Real Traders',
  text: 'Hear from traders across Australia who made the switch to Rendaven.',
  items: [
    {
      name: 'Liam H.',
      place: 'Sydney, Australia',
      text: "I'd never traded crypto before signing up. The AI signals did the heavy lifting and my account manager walked me through my first deposit. Six months in, my portfolio is actually growing — I still can't quite believe how easy Rendaven made it.",
      stars: 5,
    },
    {
      name: 'Ethan W.',
      place: 'Melbourne, Australia',
      text: 'The copy trading is what hooked me. I mirror two experienced traders, check in on my phone during my commute, and withdrawals land within a couple of days. Clean, fast, no drama.',
      stars: 5,
    },
    {
      name: 'Charlotte R.',
      place: 'Brisbane, Australia',
      text: 'Security was my number one concern — 98% cold storage and 2FA on every withdrawal was what convinced me to sign up. Eight months of trading on Rendaven and not a single moment of worry.',
      stars: 5,
    },
    {
      name: 'Sarah M.',
      place: 'Perth, Australia',
      text: 'I started from zero with their free courses and a $250 deposit. The mobile app is genuinely pleasant to use, and the educational library got me comfortable with charts within a few weeks.',
      stars: 4,
    },
    {
      name: 'Daniel K.',
      place: 'Adelaide, Australia',
      text: 'I contacted support at 2am with a funding question and a real person replied in minutes. That is when I knew I would stay. The platform is smooth, but the human support is what sets Rendaven apart.',
      stars: 5,
    },
    {
      name: 'Ava L.',
      place: 'Gold Coast, Australia',
      text: 'The AI accuracy claims sounded too good to be true, so I started small. My results tracked the projections closely enough that I have since moved a proper portfolio over. The calculator on the site is surprisingly realistic.',
      stars: 5,
    },
  ],
}

export const SECURITY = {
  kicker: 'Security first',
  title: 'Bank-Grade Protection for Your Funds',
  text: 'We built Rendaven on one principle: your assets and your data deserve bank-grade protection — at every step, every day.',
  bigStat: '98%',
  bigStatLabel: 'of assets held in offline cold wallets with no internet connection',
  items: [
    {
      icon: 'lock',
      title: '256-bit SSL encryption',
      text: 'Every connection and transaction is protected with the same encryption standard used by global banks.',
    },
    {
      icon: 'shield',
      title: 'Two-factor authentication',
      text: 'An extra layer of protection on every login and every withdrawal request.',
    },
    {
      icon: 'scale',
      title: 'KYC & AML compliant',
      text: 'We verify every account to keep the platform free of fraud and financial crime.',
    },
    {
      icon: 'wallet',
      title: 'Segregated accounts',
      text: 'Client funds are held separately from company operating funds, always.',
    },
  ],
}

export const CAPABILITIES = {
  kicker: 'Inside the toolkit',
  title: 'Inside the Rendaven Toolkit',
  text: 'A full toolkit, engineered for performance.',
  items: [
    {
      icon: 'chart',
      title: 'Advanced charting',
      text: 'Professional-grade charts with live data and 80+ indicators.',
    },
    {
      icon: 'bolt',
      title: 'Real-time AI signals',
      text: 'Entry and exit signals delivered the moment opportunities appear.',
    },
    {
      icon: 'copy',
      title: 'One-click copy trading',
      text: 'Replicate top-performing strategies automatically.',
    },
    {
      icon: 'device',
      title: 'Multi-device sync',
      text: 'Start on desktop, finish on mobile — perfectly in sync.',
    },
    {
      icon: 'pie',
      title: 'Portfolio analytics',
      text: 'Track performance, risk and allocation in one dashboard.',
    },
    {
      icon: 'globe',
      title: '300+ global markets',
      text: 'Crypto, equities, forex, commodities and more in one place.',
    },
  ],
}

export const FINAL_CTA = {
  title: 'Start Your Journey with Rendaven',
  text: 'Create your free account today and see why traders across Australia are choosing Rendaven.',
  trust: '256-bit SSL encryption · Free registration · Withdraw anytime',
}

export const FAQS = [
  {
    q: 'What is Rendaven?',
    a: 'Rendaven is an AI-powered trading platform where you can trade Bitcoin, Ethereum and 300+ other assets — including equities, forex, commodities and CFDs — from one secure account. It is designed for beginners and experienced traders alike.',
  },
  {
    q: 'How do I get started with Rendaven?',
    a: 'Simply create a free account with your name, email and phone number. After your account is verified, you can fund it by credit card, bank transfer or PayPal and start trading right away.',
  },
  {
    q: 'Is Rendaven safe?',
    a: 'Yes. Rendaven protects your assets with 256-bit SSL encryption, two-factor authentication and cold storage — 98% of assets are held in offline wallets with no internet connection. We are also fully KYC/AML compliant.',
  },
  {
    q: 'What assets can I trade on Rendaven?',
    a: 'You can trade major cryptocurrencies like Bitcoin, Ethereum, Solana and Dogecoin, as well as equities, forex pairs, commodities, precious metals and CFDs — over 300 instruments in total.',
  },
  {
    q: 'Do I need trading experience to use Rendaven?',
    a: 'Not at all. The platform is built for beginners — AI signals, copy trading and educational resources do the heavy lifting while you learn at your own pace.',
  },
  {
    q: 'How do I withdraw my funds?',
    a: 'You can request a withdrawal at any time from your account dashboard. Withdrawals are processed quickly and sent back to your registered payment method.',
  },
]

export const FOOTER = {
  blurb:
    'Rendaven is an AI-powered multi-asset trading platform offering cryptocurrencies, equities, forex and more — with 256-bit encryption and 98% cold storage.',
  navTitle: 'Company',
  legalTitle: 'Legal',
  contactTitle: 'Contact',
  contact: [
    { icon: 'mail', text: SUPPORT_EMAIL },
    { icon: 'clock', text: 'Support available 24/7' },
    { icon: 'globe', text: 'Now available in Australia' },
  ],
  risk: [
    'Risk Disclosure: Trading cryptocurrencies, forex, CFDs and other leveraged instruments involves substantial risk of loss and is not suitable for every investor. The value of digital assets can be highly volatile, and you may lose more than your initial investment. Past performance and AI projections are not indicative of future results. You should carefully consider your objectives, level of experience and risk appetite before trading, and never trade with funds you cannot afford to lose. Rendaven does not provide investment advice — nothing on this website constitutes a solicitation, recommendation or offer to buy or sell any financial instrument. Consult an independent financial advisor if you have any doubts. 85% accuracy, earnings projections and testimonials are illustrative marketing material, not guarantees.',
    'Trading services described on this website may not be available in all jurisdictions. It is your responsibility to ensure that your use of the platform complies with the laws and regulations applicable in your country of residence.',
  ],
  legalLinks: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Use', to: '/terms' },
    { label: 'Risk Disclosure', to: '/risk-disclosure' },
  ],
  copyright: 'Copyright 2026 © Rendaven. All rights reserved.',
}
