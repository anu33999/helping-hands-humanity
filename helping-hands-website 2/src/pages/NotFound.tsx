import { useSeo } from '../lib/useSeo'
import { PageHero } from '../components/Blocks'
import { ButtonLink } from '../components/ui'

export default function NotFound() {
  useSeo('Page not found', 'The page you were looking for could not be found.')
  return (
    <PageHero eyebrow="404" title="We couldn’t find that page." lede="It may have moved, or the link may be mistyped. Let’s get you back on track.">
      <ButtonLink to="/" variant="light" icon="arrow">Back to home</ButtonLink>
      <ButtonLink to="/stories" variant="outline-light" icon="arrow">Read our stories</ButtonLink>
    </PageHero>
  )
}
