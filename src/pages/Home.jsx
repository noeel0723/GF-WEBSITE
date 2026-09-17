import { FeaturedMemory } from '../components/home/FeaturedMemory'
import { Hero } from '../components/home/Hero'
import { LoveMessage } from '../components/home/LoveMessage'
import { RelationshipCounter } from '../components/home/RelationshipCounter'

export function Home() {
  return <>
    <Hero />
    <LoveMessage />
    <RelationshipCounter />
    <FeaturedMemory />
  </>
}
