// 'use client'

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js'
// import { Bar, Doughnut } from 'react-chartjs-2'
// import { UsersIcon, UserIcon, GraduationCapIcon } from 'lucide-react'
// // Register Chart.js components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// )
// // Mock data - replace with your actual data
// const attendanceData = {
//   total: 200,
//   staff: 10,
//   participants: 140,
//   mentors: 30,
//   talleres: 12,
//   temáticas: [' Optimización Empresarial y Productividad', 'Inclusión y Accesibilidad', 'Educación y Aprendizaje', 'Salud y Bienestar', 'Cultura y Creatividad', 'Seguridad y Prevención', 'Sostenibilidad y Medio Ambiente', 'Finanzas y Economía', 'Agentes Inteligentes'],
//   tematicasValores: [6, 5, 4, 4, 4, 3, 2, 2, 1],
//   totalProyectos: 31,
// };

// export const AssistantsGraphics = () => {
//   const chartColors = {
//     purple: 'rgba(147, 51, 234, 0.8)',
//     pink: 'rgba(236, 72, 153, 0.8)',
//     blue: 'rgba(59, 130, 246, 0.8)',
//     green: 'rgba(16, 185, 129, 0.8)', // Nuevo color
//     yellow: 'rgba(234, 179, 8, 0.8)',  // Nuevo color
//     red: 'rgba(239, 68, 68, 0.8)',     // Nuevo color
//     indigo: 'rgba(99, 102, 241, 0.8)', // Nuevo color
//     teal: 'rgba(20, 184, 166, 0.8)',   // Nuevo color
//     orange: 'rgba(249, 115, 22, 0.8)', // Nuevo color
//   };

//   const barChartData = {
//     labels: attendanceData.temáticas,
//     datasets: [
//       {
//         label: `Proyectos por Temática (Total: ${attendanceData.totalProyectos})`,
//         data: attendanceData.tematicasValores,
//         backgroundColor: [
//           chartColors.blue,
//           chartColors.pink,
//           chartColors.purple,
//           chartColors.green,
//           chartColors.yellow,
//           chartColors.red,
//           chartColors.indigo,
//           chartColors.teal,
//           chartColors.orange,
//         ],
//         borderColor: [
//           chartColors.blue,
//           chartColors.pink,
//           chartColors.purple,
//           chartColors.green,
//           chartColors.yellow,
//           chartColors.red,
//           chartColors.indigo,
//           chartColors.teal,
//           chartColors.orange,
//         ],
//         borderWidth: 1,
//       },
//     ],
//   }
//   const doughnutChartData = {
//     labels: ['Estudiantes', 'Profesionales Tech', 'Profesionales No-tech', 'Emprendedores'], // Nuevas etiquetas
//     datasets: [
//       {
//         data: [
//           42.7,
//           30.4,
//           14.0,
//           8.9
//         ],
//         backgroundColor: [
//           chartColors.purple,
//           chartColors.pink,
//           chartColors.blue,
//           chartColors.yellow,
//         ],
//         borderColor: [
//           chartColors.purple,
//           chartColors.pink,
//           chartColors.blue,
//           chartColors.yellow,
//         ],
//         borderWidth: 1,
//       },
//     ],
//   }
//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const, // Mover leyenda a la derecha para mejor visualización
//         labels: {
//           color: '#e9d5ff',
//           boxWidth: 20, // Ajustar ancho de la caja de color
//           padding: 15,    // Ajustar padding de la leyenda
//         },
//       },
//       title: {
//         display: true,
//         text: 'Perfiles de Participantes en el Hackatón',
//         color: '#e9d5ff',
//         padding: {
//           top: 10,
//           bottom: 20 // Más espacio para el título
//         }
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context: any) {
//             let label = context.label || '';
//             if (label) {
//               label += ': ';
//             }
//             if (context.parsed !== null) {
//               label += context.parsed + '%';
//             }
//             return label;
//           }
//         }
//       }
//     },
//     // scales: { // Doughnut charts no usan scales como los bar charts
//     //   y: {
//     //     grid: {
//     //       color: 'rgba(147, 51, 234, 0.1)',
//     //     },
//     //     ticks: {
//     //       color: '#e9d5ff',
//     //     },
//     //   },
//     //   x: {
//     //     grid: {
//     //       color: 'rgba(147, 51, 234, 0.1)',
//     //     },
//     //     ticks: {
//     //       color: '#e9d5ff',
//     //     },
//     //   },
//     // },
//   }
//   const chartOptions2 = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false, // Ocultar leyenda del bar chart ya que se mostrará en la tabla
//       },
//       title: {
//         display: true,
//         text: 'Proyectos por Temática', // Título más genérico para el bar chart
//         color: '#e9d5ff',
//         padding: 20,
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context: any) {
//             return `${context.dataset.label}: ${context.parsed.y} proyectos`
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: 'rgba(147, 51, 234, 0.1)',
//         },
//         ticks: {
//           color: '#e9d5ff',
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           display: false, // Ocultar las etiquetas del eje X
//         },
//       },
//     },
//   }
//   return (
//     <div className="space-y-8">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <StatCard
//           title="Total de Asistentes"
//           value={attendanceData.total}
//           icon={<UsersIcon className="h-8 w-8 text-blue-400" />}
//           color="bg-[#1a103a]"
//         />
//         <StatCard
//           title="Participantes en el Hackatón"
//           value={attendanceData.participants}
//           icon={<UserIcon className="h-8 w-8 text-pink-400" />}
//           color="bg-[#1a103a]"
//         />
//         <StatCard
//           title="Talleres Especializados"
//           value={attendanceData.talleres}
//           icon={<GraduationCapIcon className="h-8 w-8 text-purple-400" />}
//           color="bg-[#1a103a]"
//         />
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Doughnut chart container with responsive height */}
//         <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20 flex flex-col justify-center">
//           <div className="h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
//         <Doughnut options={chartOptions} data={doughnutChartData} />
//           </div>
//         </div>

//         {/* Table container with responsive design */}
//         <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20">
//           <h3 className="text-lg font-medium mb-4 text-purple-300 text-center lg:text-left">
//         Proyectos por Temática (Total: {attendanceData.totalProyectos})
//           </h3>
//           <div className="overflow-x-auto">
//         <table className="w-full divide-y divide-purple-500/20">
//           <thead>
//             <tr>
//           <th className="px-2 sm:px-4 md:px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
//             Temática
//           </th>
//           <th className="px-2 sm:px-4 md:px-6 py-3 text-right text-xs font-medium text-purple-300 uppercase tracking-wider">
//             % del Total
//           </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-purple-500/20">
//             {attendanceData.temáticas.map((tematica, index) => (
//               <tr key={index}>
//                 <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-xs sm:text-sm font-medium text-purple-200">
//                   {tematica.trim()}
//                 </td>
//                 <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 text-xs sm:text-sm text-right text-purple-200">
//                   {Math.round((attendanceData.tematicasValores[index] / attendanceData.totalProyectos) * 100)}%
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// interface StatCardProps {
//   title: string
//   value: number
//   icon: React.ReactNode
//   color: string
// }
// const StatCard = ({ title, value, icon, color }: StatCardProps) => {
//   return (
//     <div
//       className={`${color} p-4 rounded-lg shadow-lg border border-purple-500/20`}
//     >
//       <div className="flex items-center">
//         <div className="flex-shrink-0">{icon}</div>
//         <div className="ml-5">
//           <p className="text-sm font-medium text-purple-300">{title}</p>
//           <p className="mt-1 text-3xl font-semibold text-purple-100">{value}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import type React from "react"

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { UsersIcon, UserIcon, GraduationCapIcon } from "lucide-react"
import { useEffect, useState } from "react"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

// Mock data - replace with your actual data
const attendanceData = {
  total: 200,
  staff: 10,
  participants: 140,
  mentors: 30,
  talleres: 12,
  temáticas: [
    " Optimización Empresarial y Productividad",
    "Inclusión y Accesibilidad",
    "Educación y Aprendizaje",
    "Salud y Bienestar",
    "Cultura y Creatividad",
    "Seguridad y Prevención",
    "Sostenibilidad y Medio Ambiente",
    "Finanzas y Economía",
    "Agentes Inteligentes",
  ],
  tematicasValores: [6, 5, 4, 4, 4, 3, 2, 2, 1],
  totalProyectos: 31,
}

export const AssistantsGraphics = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1200)

  // Track window size for responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const chartColors = {
    purple: "rgba(147, 51, 234, 0.8)",
    pink: "rgba(236, 72, 153, 0.8)",
    blue: "rgba(59, 130, 246, 0.8)",
    green: "rgba(16, 185, 129, 0.8)",
    yellow: "rgba(234, 179, 8, 0.8)",
    red: "rgba(239, 68, 68, 0.8)",
    indigo: "rgba(99, 102, 241, 0.8)",
    teal: "rgba(20, 184, 166, 0.8)",
    orange: "rgba(249, 115, 22, 0.8)",
  }

  const barChartData = {
    labels: attendanceData.temáticas,
    datasets: [
      {
        label: `Proyectos por Temática (Total: ${attendanceData.totalProyectos})`,
        data: attendanceData.tematicasValores,
        backgroundColor: [
          chartColors.blue,
          chartColors.pink,
          chartColors.purple,
          chartColors.green,
          chartColors.yellow,
          chartColors.red,
          chartColors.indigo,
          chartColors.teal,
          chartColors.orange,
        ],
        borderColor: [
          chartColors.blue,
          chartColors.pink,
          chartColors.purple,
          chartColors.green,
          chartColors.yellow,
          chartColors.red,
          chartColors.indigo,
          chartColors.teal,
          chartColors.orange,
        ],
        borderWidth: 1,
      },
    ],
  }

  const doughnutChartData = {
    labels: ["Estudiantes", "Profesionales Tech", "Profesionales No-tech", "Emprendedores"],
    datasets: [
      {
        data: [42.7, 30.4, 14.0, 8.9],
        backgroundColor: [chartColors.purple, chartColors.pink, chartColors.blue, chartColors.yellow],
        borderColor: [chartColors.purple, chartColors.pink, chartColors.blue, chartColors.yellow],
        borderWidth: 1,
      },
    ],
  }

  // Responsive chart options for doughnut chart
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: windowWidth < 640 ? ("bottom" as const) : ("top" as const),
        align: "center" as const,
        labels: {
          color: "#e9d5ff",
          boxWidth: windowWidth < 640 ? 12 : 20,
          padding: windowWidth < 640 ? 10 : 15,
          font: {
            size: windowWidth < 640 ? 10 : 12,
          },
        },
      },
      title: {
        display: true,
        text: "Perfiles de Participantes en el Hackatón",
        color: "#e9d5ff",
        font: {
          size: windowWidth < 640 ? 14 : 16,
        },
        padding: {
          top: 10,
          bottom: windowWidth < 640 ? 10 : 20,
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            let label = context.label || ""
            if (label) {
              label += ": "
            }
            if (context.parsed !== null) {
              label += context.parsed + "%"
            }
            return label
          },
        },
      },
    },
  }

  // Responsive chart options for bar chart
  const chartOptions2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Proyectos por Temática",
        color: "#e9d5ff",
        font: {
          size: windowWidth < 640 ? 14 : 16,
        },
        padding: windowWidth < 640 ? 10 : 20,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.parsed.y} proyectos`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(147, 51, 234, 0.1)",
        },
        ticks: {
          color: "#e9d5ff",
          font: {
            size: windowWidth < 640 ? 10 : 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  }

  // // Get abbreviated labels for small screens
  // const getAbbreviatedLabel = (label: string) => {
  //   if (windowWidth < 360) {
  //     // Very small screens - show first 10 chars + ...
  //     return label.trim().substring(0, 10) + (label.length > 10 ? "..." : "")
  //   } else if (windowWidth < 640) {
  //     // Small screens - show first 15 chars + ...
  //     return label.trim().substring(0, 15) + (label.length > 15 ? "..." : "")
  //   }
  //   return label.trim()
  // }

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4">
      {/* Stat Cards - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <StatCard
          title="Total de Asistentes"
          value={attendanceData.total}
          icon={<UsersIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-400" />}
          color="bg-[#1a103a]"
        />
        <StatCard
          title="Participantes en el Hackatón"
          value={attendanceData.participants}
          icon={<UserIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-pink-400" />}
          color="bg-[#1a103a]"
        />
        <StatCard
          title="Talleres Especializados"
          value={attendanceData.talleres}
          icon={<GraduationCapIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-400" />}
          color="bg-[#1a103a]"
          className="sm:col-span-2 lg:col-span-1"
        />
      </div>

      {/* Charts and Table - Responsive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Doughnut chart container with responsive height */}
        <div className="bg-[#1a103a] p-3 sm:p-4 rounded-lg shadow-lg border border-purple-500/20 flex flex-col justify-center">
          <div className="h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px]">
            <Doughnut options={chartOptions} data={doughnutChartData} />
          </div>
        </div>

        {/* Table container with responsive design */}
        <div className="bg-[#1a103a] p-3 sm:p-4 rounded-lg shadow-lg border border-purple-500/20">
          <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4 text-purple-300 text-center lg:text-left">
            Proyectos por Temática (Total: {attendanceData.totalProyectos})
          </h3>
          <div className="overflow-x-auto -mx-3 sm:mx-0">
            <table className="w-full divide-y divide-purple-500/20">
              <thead>
                <tr>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
                    Temática
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-right text-xs font-medium text-purple-300 uppercase tracking-wider">
                    % del Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/20">
                {attendanceData.temáticas.map((tematica, index) => (
                  <tr key={index}>
                    <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-purple-200">
                      {tematica}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-right text-purple-200">
                      {Math.round((attendanceData.tematicasValores[index] / attendanceData.totalProyectos) * 100)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: number
  icon: React.ReactNode
  color: string
  className?: string
}

const StatCard = ({ title, value, icon, color, className = "" }: StatCardProps) => {
  return (
    <div className={`${color} p-3 sm:p-4 rounded-lg shadow-lg border border-purple-500/20 ${className}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3 sm:ml-4">
          <p className="text-xs sm:text-sm font-medium text-purple-300">{title}</p>
          <p className="mt-0.5 sm:mt-1 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-100">{value}</p>
        </div>
      </div>
    </div>
  )
}
