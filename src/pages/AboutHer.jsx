import { AboutProfile } from '../components/about/AboutProfile'
import { FavoriteThings } from '../components/about/FavoriteThings'
import { ThingsILove } from '../components/about/ThingsILove'
import { Timeline } from '../components/about/Timeline'

export function AboutHer() {
  return <>
    <section className="page-intro"><p className="eyebrow">The main character</p><h1>About Her</h1><p>The person who somehow became<br />my favorite part of every day.</p></section>
    <AboutProfile />
    <FavoriteThings />
    <ThingsILove />
    <Timeline />
  </>
}
