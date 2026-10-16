export const formatDate = (value: string): string => {
  if (!value) return "Data indisponível";
  try {
    return new Date(value).toLocaleDateString();
  } catch (error) {
    return "Data inválida";
  }
};
