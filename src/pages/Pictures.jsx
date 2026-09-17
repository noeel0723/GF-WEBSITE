import { Gallery } from '../components/pictures/Gallery'
import { GalleryFilter } from '../components/pictures/GalleryFilter'

export function Pictures() {
  return <>
    <section className="page-intro"><p className="eyebrow">A little album</p><h1>Our Memories</h1><p>Small moments, kept close.</p></section>
    <GalleryFilter />
    <Gallery />
  </>
}
