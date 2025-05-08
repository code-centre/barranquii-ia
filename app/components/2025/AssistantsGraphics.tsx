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
  total: 250,
  staff: 30,
  participants: 200,
  mentors: 20,
}
export const AssistantsGraphics = () => {
  const chartColors = {
    purple: 'rgba(147, 51, 234, 0.8)',
    pink: 'rgba(236, 72, 153, 0.8)',
    blue: 'rgba(59, 130, 246, 0.8)',
  }
  const barChartData = {
    labels: ['Staff', 'Participantes', 'Mentores'],
    datasets: [
      {
        label: 'Número de asistentes',
        data: [
          attendanceData.staff,
          attendanceData.participants,
          attendanceData.mentors,
        ],
        backgroundColor: [
          chartColors.blue,
          chartColors.pink,
          chartColors.purple,
        ],
        borderColor: [chartColors.blue, chartColors.pink, chartColors.purple],
        borderWidth: 1,
      },
    ],
  }
  const doughnutChartData = {
    labels: ['Staff', 'Participantes', 'Mentores'],
    datasets: [
      {
        data: [
          attendanceData.staff,
          attendanceData.participants,
          attendanceData.mentors,
        ],
        backgroundColor: [
          chartColors.blue,
          chartColors.pink,
          chartColors.purple,
        ],
        borderColor: [chartColors.blue, chartColors.pink, chartColors.purple],
        borderWidth: 1,
      },
    ],
  }
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#e9d5ff',
        },
      },
      title: {
        display: true,
        text: 'Distribución de Asistentes',
        color: '#e9d5ff',
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(147, 51, 234, 0.1)',
        },
        ticks: {
          color: '#e9d5ff',
        },
      },
      x: {
        grid: {
          color: 'rgba(147, 51, 234, 0.1)',
        },
        ticks: {
          color: '#e9d5ff',
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
          title="Participantes"
          value={attendanceData.participants}
          icon={<UserIcon className="h-8 w-8 text-pink-400" />}
          color="bg-[#1a103a]"
        />
        <StatCard
          title="Staff y Mentores"
          value={attendanceData.staff + attendanceData.mentors}
          icon={<GraduationCapIcon className="h-8 w-8 text-purple-400" />}
          color="bg-[#1a103a]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20">
          <Bar options={chartOptions} data={barChartData} />
        </div>
        <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20">
          <Doughnut options={chartOptions} data={doughnutChartData} />
        </div>
      </div>
      <div className="bg-[#1a103a] p-4 rounded-lg shadow-lg border border-purple-500/20">
        <h3 className="text-lg font-medium mb-4 text-purple-300">
          Detalles de Asistencia
        </h3>
        <table className="min-w-full divide-y divide-purple-500/20">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
                Cantidad
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-purple-300 uppercase tracking-wider">
                Porcentaje
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-500/20">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                Staff
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                {attendanceData.staff}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                {Math.round(
                  (attendanceData.staff / attendanceData.total) * 100,
                )}
                %
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                Participantes
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                {attendanceData.participants}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                {Math.round(
                  (attendanceData.participants / attendanceData.total) * 100,
                )}
                %
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                Mentores
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                {attendanceData.mentors}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-200">
                {Math.round(
                  (attendanceData.mentors / attendanceData.total) * 100,
                )}
                %
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                Total
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                {attendanceData.total}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-200">
                100%
              </td>
            </tr>
          </tbody>
        </table>
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
