export const endYear = (te) => {
  if (te.dateEnd === null) return (new Date().getFullYear())
  return parseInt(te.dateEnd.substring(0, 4))
}

export const startYear = (te) => parseInt(te.dateStart.substring(0, 4))
