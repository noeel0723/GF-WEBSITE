import { photos } from '../../data/photos'
import { PhotoCard } from './PhotoCard'

export function Gallery() {
  return <section className="gallery" aria-label="Photo gallery">{photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)}</section>
}
