import { ArrowUpRight } from 'lucide-react'

export function Button({ children, to = '#' }) {
  return <a className="button" href={to}>{children}<ArrowUpRight size={16} /></a>
}
