import Icon from './Icon'
import { FAQS } from '../data/content'

export default function FaqList() {
  return (
    <div className="faq-list">
      {FAQS.map((item) => (
        <details className="faq-item" key={item.q}>
          <summary>
            {item.q}
            <Icon name="plus" size={18} />
          </summary>
          <p className="faq-item__answer">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
