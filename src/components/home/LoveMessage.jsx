import { SectionTitle } from '../common/SectionTitle'
import { messages } from '../../data/messages'

export function LoveMessage() {
  return <section className="section-wrap split-section"><SectionTitle eyebrow="A note for you" title="Love Message" /><blockquote>“{messages[0].text}”</blockquote></section>
}
