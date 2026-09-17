import { ArrowDown } from 'lucide-react'
import { Button } from '../common/Button'

export function Hero() {
  return <section className="hero section-wrap"><div className="hero-copy"><p className="eyebrow">A tiny corner of the internet</p><h1>For My<br /><em>Favorite Person</em></h1><p className="hero-text">A little place on the internet<br />made especially for you.</p><Button to="/pictures">Explore Our Story</Button></div><div className="hero-note"><span>01</span><span>scroll to wander</span><ArrowDown size={16} /></div></section>
}
