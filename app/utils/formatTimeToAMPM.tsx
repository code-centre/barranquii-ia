// export const formatTimeToAMPM = (time: string) => {
//     if (!time) return ""; // Manejar casos donde time esté vacío
//     const [hours, minutes] = time.split(':');
//     const parsedHours = parseInt(hours, 10);
//     const suffix = parsedHours >= 12 ? 'PM' : 'AM';
//     const formattedHours = parsedHours % 12 || 12;
//     return `${formattedHours}:${minutes} ${suffix}`;
// };
// Change to named export instead of default export
export function formatTimeToAMPM(time: string): string {
    if (!time) return "" // Handle empty time
    const [hours, minutes] = time.split(":")
    const parsedHours = Number.parseInt(hours, 10)
    const suffix = parsedHours >= 12 ? "PM" : "AM"
    const formattedHours = parsedHours % 12 || 12
    return `${formattedHours}:${minutes} ${suffix}`
  }
  
  