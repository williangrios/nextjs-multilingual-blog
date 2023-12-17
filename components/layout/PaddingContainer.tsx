import React from 'react'

function PaddingContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='px-8 w-full mx-auto max-w-7xl'>
            {children}
        </div>
    )
}

export default PaddingContainer