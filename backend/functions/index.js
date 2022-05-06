export const validId = (id) => {
  const NCTU = new RegExp('^0[0-9]{3}[0-2][0-9]{2}$');
  const NYCU = new RegExp('1[0,1][0,9][0-9]{6}');
  return (NCTU.test(id) || NYCU.test(id));
}
