export const fetchCases = async () => {
  return [
    { id: 1, title: "Case A", description: "Issue with client A", date: "2026-01-07" },
    { id: 2, title: "Case B", description: "Issue with client B", date: "2026-01-05" },
  ];
};

export const fetchCaseById = async (id) => {
  const allCases = await fetchCases();
  return allCases.find((c) => c.id === parseInt(id));
};
