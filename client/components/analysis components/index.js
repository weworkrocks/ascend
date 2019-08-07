const VIZ_MIN_WIDTH = 500
const VIZ_MAX_WIDTH = 1000

export const VisualizationWidth = windowWidth =>
  Math.min(Math.max(windowWidth, VIZ_MIN_WIDTH), VIZ_MAX_WIDTH)

export const VisualizationMargin = {top: 50, bottom: 50, left: 50, right: 50}
