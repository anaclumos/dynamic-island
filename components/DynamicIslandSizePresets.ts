export const DynamicIslandSizePresets = {
  default: {
    width: 230,
    height: 44,
    borderRadius: 22,
  },
  compactLeading: {
    width: 52.33,
    height: 36.67,
    borderRadius: 18.33,
  },
  compactTrailing: {
    width: 52.33,
    height: 36.67,
    borderRadius: 18.33,
  },
  // not sure about expanded width
  expanded: {
    width: 282.33,
    height: 36.67,
    borderRadius: 18.33,
  },
  xlarge: {
    width: 371,
    height: 84,
    borderRadius: 42,
  },
  ultra: {
    width: 371,
    // the doc says 160, but it seems awkward.
    // overriding to 200 for now
    height: 200,
    borderRadius: 42,
  },
}
