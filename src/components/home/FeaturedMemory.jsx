import { SectionTitle } from '../common/SectionTitle'
import { photos } from '../../data/photos'

export function FeaturedMemory() {
  const memory = photos[0]
  return <section className="section-wrap"><SectionTitle eyebrow="From the album" title="Featured Memory" /><article className="memory-placeholder"><div className="image-placeholder">{memory.title}</div><div><p className="eyebrow">{memory.date}</p><h3>{memory.title}</h3><p>{memory.description}</p></div></article></section>
}
