import React from 'react';

export default function TicketPurchase() {
    return (
        <section className="py-16 text-white relative overflow-hidden">
            {/* Background grid pattern */}
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Background glow elements */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Adquiere tu entrada
                        </span>
                    </h2>
                </div>

                {/* Ticket Stages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Primera etapa */}
                    <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/50 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-purple-400 mb-4">Primera etapa</h3>
                        <p className="text-4xl font-extrabold text-white mb-2">$120,000 COP</p>
                        <p className="text-gray-300 mb-6">5 de Febrero al 28 de Febrero</p>
                        <button className="bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors duration-300">
                            Compra tu boleto
                        </button>
                    </div>

                    {/* Segunda etapa */}
                    <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-purple-400 mb-4">Segunda etapa</h3>
                        <p className="text-4xl font-extrabold text-white mb-2">$150,000 COP</p>
                        <p className="text-gray-300 mb-6">1 de Marzo al 15 de Abril</p>
                        <button className="bg-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full cursor-not-allowed opacity-70">
                            Próximamente
                        </button>
                    </div>

                    {/* Tercera etapa */}
                    <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-purple-400 mb-4">Tercera etapa</h3>
                        <p className="text-4xl font-extrabold text-white mb-2">$180,000 COP</p>
                        <p className="text-gray-300 mb-6">16 de Abril al 30 de Abril</p>
                        <button className="bg-gray-600 text-gray-300 font-bold py-3 px-8 rounded-full cursor-not-allowed opacity-70">
                            Próximamente
                        </button>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-12">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">¿Qué incluye tu boleto?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300">Acceso a todas las áreas del evento</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300">Participación en talleres y mentorías</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300">Alimentación durante el evento</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300">Kit de participante exclusivo</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300">Certificado de participación</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-gray-300">Oportunidad de ganar premios</p>
                        </div>
                    </div>
                </div>

                {/* Motivational Message */}
                <div className="text-center">
                    <p className="text-2xl font-semibold text-purple-300 mb-4">
                        ¡No te quedes fuera!
                    </p>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Las cupos son limitados y los precios aumentan en cada etapa. 
                        Aprovecha la primera etapa para obtener el mejor precio y asegura tu lugar en el hackatón más grande de la costa.
                    </p>
                </div>
            </div>
        </section>
    );
}