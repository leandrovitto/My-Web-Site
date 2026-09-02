import { FunctionComponent, ReactElement, ReactNode } from 'react'
import Image from 'next/image'
import PageTransitionWrapper from '@/components/layouts/PageTransitionWrapper'
import SiteShell from '@/components/layouts/SiteShell'

type DefaultLayoutProps = {
    children: ReactNode,
    image?: string
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children, image }: DefaultLayoutProps): ReactElement => {

    return (
        <SiteShell>
            <div className='relative h-screen overflow-auto ring -my-px'>
                <PageTransitionWrapper>
                    <section className="mx-auto mb-48">
                        {image && <div>
                            <Image alt="background" className="h-32 w-full object-cover lg:h-64" src={image} width="1200" height="1200" />
                        </div>}
                        <div className='max-w-7xl mx-auto px-8 lg:px-8' >
                            {children}
                        </div>
                    </section>
                </PageTransitionWrapper>
            </div>
        </SiteShell>
    )

}

export default DefaultLayout;
