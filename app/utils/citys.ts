/**
 * Utility functions for city-based filtering
 */

// Determine if city filtering should be applied based on landing name
export function shouldApplyCityFiltering(landing?: string): boolean {
    if (!landing) return false
  
    // Only apply city filtering for these specific landings
    return landing.includes("samar") || landing.includes("cartagen")
  }
  
  // Get keywords for city filtering based on landing
  export function getCityKeywords(landing?: string): string[] {
    if (!landing) return []
  
    if (landing.includes("samar")) {
      return ["santa marta", "santamarta"]
    }
  
    if (landing.includes("cartagen")) {
      return ["cartagena"]
    }
  
    return []
  }
  
  // Get display name for city based on landing
  export function getCityDisplayName(landing?: string): string {
    if (!landing) return "tu ciudad"
  
    if (landing.includes("samar")) return "Santa Marta"
    if (landing.includes("cartagen")) return "Cartagena"
    if (landing.includes("barranqui")) return "Barranquilla"
    if (landing.includes("caribe")) return "el Caribe"
  
    return "tu ciudad"
  }
  
  