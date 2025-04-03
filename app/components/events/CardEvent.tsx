// import HTMLReactParser from "html-react-parser";
// import Image from "next/image";
// import { Clock } from "lucide-react";
// import { MapPin } from "lucide-react";
// import { formatTimeToAMPM } from "../../utils/formatTimeToAMPM";
// import { THEME_LANDINGS } from "@/app/utils/theme";

// interface EventData {
//   id: string;
//   title: string;
//   subtitle: string;
//   heroImage: string | null;
//   type: string;
//   date: string;
//   status: string | null;
//   cost: string;
//   tickets?: any[];
//   price?: number;
//   startHour: string;
//   location?: {
//     title: string;
//     mapUrl: string;
//   };
// }

// interface CardEventProps {
//   eventData: EventData;
//   landing?: string;
// }

// export default function CardEvent({ eventData, landing = 'default' }: CardEventProps) {
//   // Get the theme colors for the current landing
//   const themeColors = THEME_LANDINGS[landing] || THEME_LANDINGS['default'];

//   // Create gradient styles using the theme colors
//   const gradientStyle = {
//     background: `linear-gradient(to right, ${themeColors.gradient.from}, ${themeColors.gradient.via}, ${themeColors.gradient.to})`,
//   };

//   const getPriceDisplay = () => {
//     if (
//       eventData?.cost?.toLowerCase() === 'gratis' ||
//       eventData?.cost?.toLowerCase() === 'free' ||
//       eventData?.cost?.toLowerCase() === 'entrada gratuita'
//     ) {
//       return "Entrada gratuita";
//     }

//     const ticketsPrice = eventData.tickets ? eventData.tickets.map(ticket => ticket.price) : [];

//     if (Array.isArray(ticketsPrice) && ticketsPrice.length > 0) {
//       const minPrice = Math.min(...ticketsPrice.filter(price => typeof price === 'number'));

//       if (minPrice === 0) {
//         return "Entrada gratuita";
//       }

//       if (minPrice > 0) {
//         return `Aporte $${minPrice.toLocaleString('es-CO')}`;
//       }
//     }
//     return "Precio no disponible";
//   };

//   return (
//     <div className="flex">
//       <article className="w-[350px] h-[400px] rounded-xl shadow-sm overflow-hidden group border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//         <div className="h-1/2 relative">
//           <Image
//             src={eventData?.heroImage || "/default-hero-image.jpg"}
//             alt={`Hero image for ${eventData?.title || "event"}`}
//             fill
//             className="object-cover"
//             unoptimized
//           />
//           <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
//             <p className="bg-gray-400 text-black backdrop-blur-md px-4 py-1 rounded-lg text-sm">
//               {eventData?.type ? eventData.type.charAt(0).toUpperCase() + eventData.type.slice(1) : ""}
//             </p>
//             {/* Use inline style for the price tag gradient based on theme */}
//             <p 
//               className="text-black font-semibold backdrop-blur-md px-4 py-1 rounded-lg text-sm"
//               style={gradientStyle}
//             >
//               {getPriceDisplay()}
//             </p>
//           </div>
//         </div>

//         <div className="h-1/2 bg-white flex flex-col p-3">
//           {/* Título del evento */}
//           <div className="mb-2">
//             <p className="text-lg text-black font-semibold font-[League Spartan] line-clamp-2">
//               {eventData?.title ? HTMLReactParser(eventData.title) : ""}
//             </p>
//           </div>

//           {/* Información de hora y ubicación */}
//           <div className="flex flex-wrap items-center text-gray-500 text-sm mb-3 gap-x-4">
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
//               <span>{formatTimeToAMPM(eventData.startHour)}</span>
//             </div>
//             {eventData.location && (
//               <div className="flex items-center">
//                 <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
//                 <span className="truncate max-w-[200px]">{eventData.location.title || eventData.location.mapUrl}</span>
//               </div>
//             )}
//           </div>

//           <div className="grid gap-2 grid-cols-[1fr_2fr] mt-auto">
//             {/* Use inline style for the date box gradient based on theme */}
//             <div className="w-24 h-20 flex flex-col items-center justify-center text-center font-bold relative rounded-lg overflow-hidden">
//               <div className="absolute inset-0" style={gradientStyle}>
//                 <div 
//                   className="w-full text-black text-xs font-semibold"
//                   style={{ backgroundColor: themeColors.principal + '40' }} // Add 40 for 25% opacity
//                 >
//                   {new Date(eventData?.date).toLocaleDateString("es-ES", {
//                     month: "long",
//                     timeZone: "UTC",
//                   }).toUpperCase()}
//                 </div>
//               </div>
//               <p className="text-2xl relative text-black z-10 pt-2 ">
//                 {new Date(eventData?.date).toLocaleDateString("es-ES", {
//                   day: "numeric",
//                   timeZone: "UTC",
//                 })}
//               </p>
//               <p className="text-sm relative text-black z-10 ">
//                 {new Date(eventData?.date)
//                   .toLocaleDateString("es-ES", {
//                     year: "numeric",
//                     timeZone: "UTC",
//                   })}
//               </p>
//             </div>
//             <p className="text-sm line-clamp-3 text-black">{eventData?.subtitle ? HTMLReactParser(eventData.subtitle) : ""}</p>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// }

import HTMLReactParser from "html-react-parser";
import Image from "next/image";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { formatTimeToAMPM } from "../../utils/formatTimeToAMPM";
import { THEME_LANDINGS } from "@/app/utils/theme";

interface EventData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string | null;
  type: string;
  date: string;
  status: string | null;
  cost: string;
  tickets?: any[];
  price?: number;
  startHour: string;
  location?: {
    title: string;
    mapUrl: string;
  };
}

interface CardEventProps {
  eventData: EventData;
  landing?: string;
}

export default function CardEvent({ eventData, landing }: CardEventProps) {

  const getPriceDisplay = () => {
    if (
      eventData?.cost?.toLowerCase() === 'gratis' ||
      eventData?.cost?.toLowerCase() === 'free' ||
      eventData?.cost?.toLowerCase() === 'entrada gratuita'
    ) {
      return "Entrada gratuita";
    }

    const ticketsPrice = eventData.tickets ? eventData.tickets.map(ticket => ticket.price) : [];

    if (Array.isArray(ticketsPrice) && ticketsPrice.length > 0) {
      const minPrice = Math.min(...ticketsPrice.filter(price => typeof price === 'number'));

      if (minPrice === 0) {
        return "Entrada gratuita";
      }

      if (minPrice > 0) {
        return `Aporte $${minPrice.toLocaleString('es-CO')}`;
      }
    }
    return "Precio no disponible";
  };

  return (
    <div className="flex">
      <article className="w-[350px] h-[400px] rounded-xl shadow-sm overflow-hidden group border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="h-1/2 relative">
          <Image
            src={eventData?.heroImage || "/default-hero-image.jpg"}
            alt={`Hero image for ${eventData?.title || "event"}`}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end gap-3">
            <p className="bg-gray-400 text-black backdrop-blur-md px-4 py-1 rounded-lg text-sm">
              {eventData?.type ? eventData.type.charAt(0).toUpperCase() + eventData.type.slice(1) : ""}
            </p>
            <p
              className="text-black font-semibold backdrop-blur-md px-4 py-1 rounded-lg text-sm"
              style={{ backgroundColor: THEME_LANDINGS[landing || 'default'].principal }} // Add 40 for 25% opacity
            >
              {getPriceDisplay()}
            </p>
          </div>
        </div>

        <div className="h-1/2 bg-white flex flex-col p-3">
          {/* Título del evento */}
          <div className="mb-2">
            <p className="text-lg text-black font-semibold font-[League Spartan] line-clamp-2">
              {eventData?.title ? HTMLReactParser(eventData.title) : ""}
            </p>
          </div>

          {/* Información de hora y ubicación */}
          <div className="flex flex-wrap items-center text-gray-500 text-sm mb-3 gap-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{formatTimeToAMPM(eventData.startHour)}</span>
            </div>
            {eventData.location && (
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="truncate max-w-[200px]">{eventData.location.title || eventData.location.mapUrl}</span>
              </div>
            )}
          </div>

          <div className="grid gap-2 grid-cols-[1fr_2fr] mt-auto">
            <div className="w-24 h-20 flex flex-col items-center justify-center text-center font-bold relative rounded-lg overflow-hidden" style={{ border: `3px solid ${THEME_LANDINGS[landing || 'default'].principal}` }}>
              <div className="absolute inset-0 ">
                <div
                  className="w-full text-black text-xs font-semibold"
                  style={{ backgroundColor: THEME_LANDINGS[landing || 'default'].principal }} 
                >
                  {new Date(eventData?.date).toLocaleDateString("es-ES", {
                    month: "long",
                    timeZone: "UTC",
                  }).toUpperCase()}
                </div>
              </div>
              <p className="text-2xl relative text-black z-10 pt-2 ">
                {new Date(eventData?.date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </p>
              <p className="text-sm relative text-black z-10 ">
                {new Date(eventData?.date)
                  .toLocaleDateString("es-ES", {
                    year: "numeric",
                    timeZone: "UTC",
                  })}
              </p>
            </div>
            <p className="text-sm line-clamp-3 text-black">{eventData?.subtitle ? HTMLReactParser(eventData.subtitle) : ""}</p>
          </div>
        </div>
      </article>
    </div>
  );
}