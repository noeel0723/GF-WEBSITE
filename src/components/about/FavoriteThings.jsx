import { favorites } from '../../data/favorites'
import { SectionTitle } from '../common/SectionTitle'

export function FavoriteThings() {
  return <section className="section-wrap"><SectionTitle eyebrow="Her little universe" title="Favorite Things" /><div className="tag-list">{favorites.map((favorite) => <span key={favorite}>{favorite}</span>)}</div></section>
}
