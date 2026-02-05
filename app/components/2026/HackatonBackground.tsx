import React from 'react';

export default function HackatonBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 
                    className="text-[20vw] font-black tracking-wider select-none"
                    style={{
                        transform: 'rotate(180deg)',
                        WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
                        WebkitTextFillColor: 'transparent',
                        fill: 'transparent',
                    }}
                >
                    HACKATON
                </h1>
            </div>
        </div>
    );
}