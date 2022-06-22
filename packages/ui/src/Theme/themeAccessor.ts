import { defaultTheme } from './theme'

type ColorValue = 100 | 300 | 500 | 700 | 900

type ThemeResolver<T = any> = (theme: typeof defaultTheme) => T

const fromTheme = <T>(themeResolver: ThemeResolver<T>) => () => (
  themeResolver(defaultTheme)
)

export const themePalette = (color: keyof typeof defaultTheme['palette'], value: ColorValue = 500) => (
  fromTheme(theme => theme.palette[color][value])
)

export const themeColor = (color: keyof typeof defaultTheme['color']) => (
  fromTheme(theme => theme.color[color])
)

export const themeSpacing = (space: keyof typeof defaultTheme['spacing']) => (
  fromTheme(theme => theme.spacing[space])
)

export const themeBorderRadius = (size: keyof typeof defaultTheme['border']['radius']) => (
  fromTheme(theme => theme.border.radius[size])
)

export const themeTypography = (size: keyof typeof defaultTheme['typography']['fontSize']) => (
  fromTheme(theme => theme.typography.fontSize[size])
)
