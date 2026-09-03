import FaqList from '../components/FaqList'

export default function FaqSection() {
  return (
    <section className="section section--mint" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="kicker" data-reveal>
            FAQ
          </span>
          <h2 data-reveal>Frequently Asked Questions</h2>
          <p data-reveal>Everything you need to know about trading with Rendaven.</p>
        </div>
        <div data-reveal>
          <FaqList />
        </div>
      </div>
    </section>
  )
}
