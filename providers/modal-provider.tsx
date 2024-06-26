'use client'

import { useEffect, useState } from 'react'

import PreviewModal from '@/components/preview-modal'

export default function ModalProvider() {

    // Prevent from Hydration error
    const [ isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) {
        return null
    }

    return (
        <>
            <PreviewModal />
        </>
    )
}

