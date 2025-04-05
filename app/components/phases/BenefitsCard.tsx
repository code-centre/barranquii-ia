interface BenefitsCardProps {
    title: string
    benefits: string[]
    className?: string
  }
  
  export function BenefitsCard({ title, benefits, className = "" }: BenefitsCardProps) {
    return (
      <div className={`relative p-6 bg-[#1a1a3a] rounded-lg border border-[#3CF2F1] ${className}`}>
        <div className="space-y-4">
          <h3 className="text-white text-xl font-medium">{title}</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start pb-3">
                <span className="flex-shrink-0 h-2 w-2 rounded-full bg-[#f72585] mt-0.5"></span>
                <span className="ml-3 text-white">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  