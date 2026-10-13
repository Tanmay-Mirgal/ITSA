// SpotlightCard settings shared by the hairline grids (impact stats, live cards).
// The cards drop their own surface, border and shadow because the grid draws those lines itself.
export const FLAT_SPOTLIGHT = {
  spotlightColor: '#9b6cff',
  intensity: 0.22,
  spotlightSize: 300,
  softness: 0.75,
  borderGlow: 0.8,
  proximity: 60,
  style: {
    '--spotlight-card-surface': 'transparent',
    '--spotlight-card-border': 'transparent',
    '--spotlight-card-shadow': 'none',
  },
};
