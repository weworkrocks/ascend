const VIZ_MIN_WIDTH = 500
const VIZ_MAX_WIDTH = 1000

export const VisualizationWidth = windowWidth =>
  Math.min(Math.max(windowWidth, VIZ_MIN_WIDTH), VIZ_MAX_WIDTH)

export const VisualizationMargin = {top: 50, bottom: 50, left: 50, right: 50}

export const EarthTonesColorPalette = [
  `rgb(78, 97, 114)`,
  `rgb(73, 56, 41)`,
  `rgb(97, 51, 24)`,
  `rgb(143, 59, 27)`,
  `rgb(64, 79, 36)`,
  `rgb(131, 146, 150)`,
  `rgb(129, 108, 91)`,
  `rgb(133, 87, 35)`,
  `rgb(213, 117, 0)`,
  `rgb(102, 141, 60)`
  // `rgb(, , )`,
]
