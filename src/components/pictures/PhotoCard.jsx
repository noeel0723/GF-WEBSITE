export function PhotoCard({ photo }) {
  return <article className="photo-card"><div className="photo-placeholder"><span>{photo.category}</span></div><div className="photo-caption"><h3>{photo.title}</h3><p>{photo.date}</p></div></article>
}
