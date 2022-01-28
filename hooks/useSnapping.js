export const useSnapping = (contentArray, cardWidth, spacing) => {
  const snapOffsets = contentArray.map((_, index) => {
    return cardWidth * index + (spacing / 2) * index;
  });
  return snapOffsets;
};
