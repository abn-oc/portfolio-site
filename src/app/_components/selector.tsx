import React, { ReactNode } from 'react';
export default function Selector({ children }: { children: ReactNode } ) {

    return (
        <div className="m-5 flex flex-col sm:flex-row border-neutral-500 border-[1px] rounded-lg p-0 bg-neutral-950 text-white justify-around">
            {children}
        </div>
    )
}