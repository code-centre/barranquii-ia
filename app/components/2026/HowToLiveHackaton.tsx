import React from 'react';

export default function HowToLiveHackaton() {
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
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                            ¿Cómo se vive un hackatón?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300">Prepárate para una experiencia única.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Schedule Section */}
                    <div className="space-y-8">
                        {/* Friday */}
                        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">Viernes</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Exposición de retos</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Creación de equipos</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Talleres especializados</p>
                                </div>
                            </div>
                        </div>

                        {/* Saturday */}
                        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">Sábado</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Trabajo en el proyecto</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Mentorías con expertos</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">
                                        <span className="text-purple-300 font-semibold">Recomendación:</span> venir preparado para quedarte trabajando durante la noche
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sunday */}
                        <div className="bg-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">Domingo</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Presentación de proyectos</p>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                    <p className="text-gray-300">Premiación</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="space-y-6">
                        <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden border border-purple-500/30">
                            {/* Video placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Video overlay text */}
                            <div className="absolute top-4 right-4 text-white/60 text-sm font-medium">
                                Canva
                            </div>
                            
                            {/* Video controls */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 bg-white/20 rounded-full h-1">
                                        <div className="bg-purple-400 h-1 rounded-full w-1/3"></div>
                                    </div>
                                    <span className="text-white/60 text-sm">2:45</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-lg text-purple-300 hover:text-purple-200 cursor-pointer transition-colors">
                                Ver Documental completo de la primera edición
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}