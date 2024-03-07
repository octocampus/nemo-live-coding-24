const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);

export const formatDate = (date: string) => {
  const dt = date ? new Date(date) : new Date();
  return `${padL(dt.getDate())}
  /${padL(dt.getMonth() + 1)}
  /${dt.getFullYear()} ${padL(dt.getHours())}:${padL(dt.getMinutes())}`;
};
