export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
): (number | string)[] => {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const firstPages = [1, 2];
  const lastPages = [totalPages - 1, totalPages];

  if (currentPage <= 3) {
    return [...firstPages, 3, "...", ...lastPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 3, ...lastPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
