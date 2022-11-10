export const DynamicIslandSizePresets = {
  default: {
    width: 150,
    heightRatio: 44 / 150,
    borderRadius: 22,
  },
  compactLeading: {
    width: 52.33,
    heightRatio: 44 / 52.33,
    borderRadius: 22,
  },
  compactTrailing: {
    width: 52.33,
    heightRatio: 44 / 52.33,
    borderRadius: 22,
  },
  compactBothSides: {
    width: 200,
    heightRatio: 44 / 200,
    borderRadius: 22,
  },
  // not sure about long width
  long: {
    width: 350,
    heightRatio: 44 / 350,
    borderRadius: 22,
  },
  large: {
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
