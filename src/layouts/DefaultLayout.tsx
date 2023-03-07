import { Navbar } from '@/components/layouts/navbar/Navbar'
import { FunctionComponent, ReactElement, ReactNode } from 'react'
import Footer from '@/components/layouts/Footer'
import Image from 'next/image'
import PageTransitionWrapper from '@/components/layouts/PageTransitionWrapper'

type DefaultLayoutProps = {
    children: ReactNode,
    image?: string
}

const DefaultLayout: FunctionComponent<DefaultLayoutProps> = ({ children, image }: DefaultLayoutProps): ReactElement => {

    return (
        <main className="font-sans subpixel-antialiased">
            <div className='relative h-screen overflow-auto ring -my-px'>

                <div className="sticky top-0 z-40 backdrop-blur-sm border-b border-gray-900/10 md:mx-8">
                    <Navbar />
                </div>

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

                <Footer />
            </div>
        </main>
    )

}

export default DefaultLayout;