import { timeline } from '../../data/timeline'
import { SectionTitle } from '../common/SectionTitle'

export function Timeline() {
  return <section className="section-wrap"><SectionTitle eyebrow="Us, so far" title="Relationship Timeline" /><div className="timeline">{timeline.map((item) => <div className="timeline-item" key={item.id}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div></section>
}
