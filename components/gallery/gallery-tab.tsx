import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { Image as ImageType } from '@/types'
import { cn } from '@/lib/utils'

interface GalleryTabProps {
    image: ImageType
}

export default function GalleryTab({ image }: GalleryTabProps) {

    return (
        <Tab className='relative flex aspect-square cursor-pointer
        items-center justify-center rounded-md bg-white'>
            {({ selected }) =>
                <div>
                    <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                        <Image
                            src={image.url}
                            alt=''
                            fill
                            className='object-cover object-center'
                        />
                    </span>
                    <span
                        className={cn(
                        'absolute inset-0 rounded-md ring-2 ring-offset-2',
                            selected ? 'ring-black' : 'ring-transparent'
                        )}
                    />
                </div>
            }
        </Tab>
    )
}

