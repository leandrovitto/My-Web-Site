import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { FunctionComponent, ReactElement, useState } from 'react'
import BtnIcon from '../atoms/icon/BtnIcon'

type ImageViewerProps = {
    img: string,
    alt: string
}

const ImageViewer: FunctionComponent<ImageViewerProps> = ({ img, alt = "" }: ImageViewerProps): ReactElement => {
    const [open, setOpen] = useState(false)

    return <div className='my-2' >
        <Image
            alt={alt} onClick={() => setOpen(true)}
            className='border-2 border-gray-300 rounded-md cursor-pointer hover:border-2 hover:border-indigo-400'
            src={img}
            style={{ objectFit: 'cover' }}
            width={100}
            height={100}
        />

        <Dialog as="div" className="relative z-40 " onClose={setOpen} open={open}>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="fixed inset-0 z-10">
                <div className="flex md:min-h-full min-h-screen items-center justify-center text-center sm:items-center md:p-8 p-4 md:m-10">
                    <Dialog.Panel as="div" className="relative flex h-full transform overflow-hidden rounded-lg bg-white shadow-xl justify-center">
                        <div>
                            <div className='flex justify-end'>
                                <div className="inline-flex items-center justify-end rounded-md bg-white dark:bg-gray-800 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <BtnIcon id="close" icon="close" onClick={() => setOpen(false)} />
                                </div>
                            </div>
                            <div>
                                <Image
                                    src={img}
                                    alt="modal"
                                    style={{ objectFit: 'cover' }}
                                    width={1000}
                                    height={500}
                                />
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    </div>
}

export default ImageViewer;