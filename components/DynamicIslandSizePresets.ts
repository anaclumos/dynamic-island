export const DynamicIslandSizePresets = {
  default: {
    width: 230,
    heightRatio: 44 / 230,
    borderRadius: 22,
  },
  compactLeading: {
    width: 52.33,
    heightRatio: 36.67 / 52.33,
    borderRadius: 18.33,
  },
  compactTrailing: {
    width: 52.33,
    heightRatio: 36.67 / 52.33,
    borderRadius: 18.33,
  },
  // not sure about expanded width
  expanded: {
    width: 282.33,
    heightRatio: 36.67 / 282.33,
    borderRadius: 18.33,
  },
  xlarge: {
    width: 371,
    heightRatio: 84 / 371,
    borderRadius: 42,
  },
  ultra: {
    width: 371,
    // the doc says 160, but it seems awkward.
    // overriding to 200 for now
    heightRatio: 200 / 371,
    borderRadius: 42,
  },
}
