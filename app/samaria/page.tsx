import { tree } from "next/dist/build/templates/app-page";
import { Title } from "../components/hero/HeroTitle";

export default function Test() {
    return (
<div className="p-10 space-y-10 bg-white">
      <h2 className="text-2xl font-bold mb-8">Prueba de todos los temas</h2>

      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Default Theme" theme="default" size="xl" />
      </div>

      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Caribe-IA" theme="caribeia" size="xl" />
      </div>

      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Barranqui-IA" theme="barranquiia" size="xl" />
      </div>

      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Samar-IA" theme="samaria" size="xl" gradient={true}/>
      </div>

      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Cartageni-A" theme="cartagenia" size="xl" />
      </div>

      {/* Prueba con colores sólidos */}
      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Samar-IA (sin gradiente)" theme="samaria" size="xl" gradient={false} />
      </div>

      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Cartageni-A (sin gradiente)" theme="cartagenia" size="xl" gradient={false} />
      </div>

      {/* Prueba con colores personalizados */}
      <div className="p-6 bg-gray-900 rounded-lg">
        <Title title="Color personalizado" customTextColor="text-greenApp" size="xl" gradient={false} />
      </div>
    </div>
    )
}