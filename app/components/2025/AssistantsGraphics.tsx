'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
import { UsersIcon, UserIcon, GraduationCapIcon } from 'lucide-react'
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
)
// Mock data - replace with your actual data
const attendanceData = {
  total: 200,
  staff: 10,
  participants: 140,
  mentors: 30,
  talleres: 12,
  temáticas: [' Optimización Empresarial y Productividad', 'Inclusión y Accesibilidad', 'Educación y Aprendizaje', 'Salud y Bienestar', 'Cultura y Creatividad', 'Seguridad y Prevención', 'Sostenibilidad y Medio Ambiente', 'Finanzas y Economía', 'Agentes Inteligentes'],
  tematicasValores: [6, 5, 4, 4, 4, 3, 2, 2, 1],
  totalProyectos: 31,
};

export const AssistantsGraphics = () => {
  const chartColors = {
    purple: 'rgba(147, 51, 234, 0.8)',
    pink: 'rgba(236, 72, 153, 0.8)',
    blue: 'rgba(59, 130, 246, 0.8)',
    green: 'rgba(16, 185, 129, 0.8)', // Nuevo color
    yellow: 'rgba(234, 179, 8, 0.8)',  // Nuevo color
    red: 'rgba(239, 68, 68, 0.8)',     // Nuevo color
    indigo: 'rgba(99, 102, 241, 0.8)', // Nuevo color
    teal: 'rgba(20, 184, 166, 0.8)',   // Nuevo color
    orange: 'rgba(249, 115, 22, 0.8)', // Nuevo color
  };

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
    labels: ['Estudiantes', 'Profesionales Tech', 'Profesionales No-tech', 'Emprendedores'], // Nuevas etiquetas
    datasets: [
      {
        data: [
          42.7,
          30.4,
          14.0,
          8.9
        ],
        backgroundColor: [
          chartColors.purple,
          chartColors.pink,
          chartColors.blue,
          chartColors.yellow,
        ],
        borderColor: [
          chartColors.purple,
          chartColors.pink,
          chartColors.blue,
          chartColors.yellow,
        ],
        borderWidth: 1,
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Mover leyenda a la derecha para mejor visualización
        labels: {
          color: '#e9d5ff',
          boxWidth: 20, // Ajustar ancho de la caja de color
          padding: 15,    // Ajustar padding de la leyenda
        },
      },
      title: {
        display: true,
        text: 'Perfiles de Participantes en el Hackatón',
        color: '#e9d5ff',
        padding: {
          top: 10,
          bottom: 20 // Más espacio para el título
        }
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        }
      }
    },
    // scales: { // Doughnut charts no usan scales como los bar charts
    //   y: {
    //     grid: {
    //       color: 'rgba(147, 51, 234, 0.1)',
    //     },
    //     ticks: {
    //       color: '#e9d5ff',
    //     },
    //   },
    //   x: {
    //     grid: {
    //       color: 'rgba(147, 51, 234, 0.1)',
    //     },
    //     ticks: {
    //       color: '#e9d5ff',
    //     },
    //   },
    // },
  }
  const chartOptions2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Ocultar leyenda del bar chart ya que se mostrará en la tabla
      },
      title: {
        display: true,
        text: 'Proyectos por Temática', // Título más genérico para el bar chart
        color: '#e9d5ff',
        padding: 20,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.dataset.label}: ${context.parsed.y} proyectos`
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(147, 51, 234, 0.1)',
        },
        ticks: {
          color: '#e9d5ff',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Ocultar las etiquetas del eje X
        },
      },
    },
  }
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total de Asistentes"
          value={attendanceData.total}
          icon={<UsersIcon className="h-8 w-8 text-blue-400" />}
          color="bg-[#1a103a]"
        />
        <StatCard
          title="Participantes en el Hackatón"
          value={attendanceData.participants}
          icon={<UserIcon className="h-8 w-8 text-pink-400" />}
          color="bg-[#1a103a]"
        />
        <StatCard
          title="Talleres Especializados"
          value={attendanceData.talleres}
          icon={<GraduationCapIcon className="h-8 w-8 text-purple-400" />}
          color="bg-[#1a103a]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20 h-[600px] md:h-[600px]">
          <Doughnut options={chartOptions} data={doughnutChartData} />
        </div>
        {/* Table for temáticas - removed md:col-span-2 to keep it in its own column */}
        <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20">
          <h3 className="text-lg font-medium mb-4 text-purple-300">
            Proyectos por Temática (Total: {attendanceData.totalProyectos})
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-purple-500/20">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
                    Temática
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
                    % del Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/20">
                {attendanceData.temáticas.map((tematica, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                      {tematica.trim()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
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
}
const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  return (
    <div
      className={`${color} p-4 rounded-lg shadow-lg border border-purple-500/20`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-5">
          <p className="text-sm font-medium text-purple-300">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-purple-100">{value}</p>
        </div>
      </div>
    </div>
  )
}
