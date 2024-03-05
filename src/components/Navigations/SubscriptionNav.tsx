import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const SubscriptionNav = () => {
    return (
        <BaseNav links={pages.subscription.children || []} main={pages.subscription}/>
    )
}