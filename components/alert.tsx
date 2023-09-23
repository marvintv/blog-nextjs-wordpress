import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert() {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-10 border-accent-7 text-white': '',
        'bg-accent-10 border-accent-5': '',
      }, 'p-2')}
    >
      <Container>
        {/* <div className="py-2 text-center text-sm 	">
            <p className={'text-base'}>New Newsletter will be coming out soon. Stay tuned! ☀️</p>
        </div> */}
      </Container>
    </div>
  )
}