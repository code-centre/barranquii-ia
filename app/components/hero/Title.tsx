import titleColors from "../../utils/titleColors.json"

interface TitleProps {
  title: string
  theme?: "default" | "caribeia" | "barranquiia" | "samaria" | "cartagenia" | string
  customTextColor?: string
  customSubtitleColor?: string
  gradient?: boolean
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "xxxxl" | "xxxxxl"
  align?: "left" | "center" | "right"
}

export function Title({
  title,
  theme,
  customTextColor,
  gradient,
  size,
  align,
}: TitleProps) {
  const themeColors = titleColors.themes[theme as keyof typeof titleColors.themes] || titleColors.themes.default

  const useGradient = gradient !== undefined ? gradient : themeColors.title.gradient

  let sizeClass = ""
  switch (size) {
    case "sm":
      sizeClass = "text-2xl md:text-3xl"
      break
    case "md":
      sizeClass = "text-3xl md:text-4xl"
      break
    case "lg":
      sizeClass = "text-4xl md:text-5xl"
      break
    case "xl":
      sizeClass = "text-5xl md:text-6xl"
      break
    case "xxl":
      sizeClass = "text-6xl md:text-7xl"
      break
    case "xxxl":
      sizeClass = "text-7xl md:text-8xl"
      break
    case "xxxxl":
      sizeClass = "text-8xl md:text-9xl"
      break
    case "xxxxxl":
      sizeClass = "text-9xl md:text-10xl"
      break
    default:
      sizeClass = "text-4xl md:text-5xl"
  }

  let alignClass = ""
  switch (align) {
    case "left":
      alignClass = "text-left"
      break
    case "center":
      alignClass = "text-center"
      break
    case "right":
      alignClass = "text-right"
      break
    default:
      alignClass = "text-left"
  }

  const colorClass = useGradient
    ? `bg-gradient-to-r ${themeColors.title.from} ${themeColors.title.via} ${themeColors.title.to} text-transparent bg-clip-text`
    : customTextColor

    console.log("Applied Classes:", sizeClass, alignClass, colorClass);
    return (
      <div className={`${alignClass}`}>
        <h1 className={`font-bold tracking-tight ${sizeClass} ${colorClass}`}>{title}</h1>
      </div>
    );
}




