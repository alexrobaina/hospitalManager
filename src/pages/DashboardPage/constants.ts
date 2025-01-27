export const realisticData = [
  { month: 'Jan', patients: 45 },
  { month: 'Feb', patients: 52 },
  { month: 'Mar', patients: 48 },
  { month: 'Apr', patients: 55 },
  { month: 'May', patients: 60 },
  { month: 'Jun', patients: 65 },
  { month: 'Jul', patients: 70 },
  { month: 'Aug', patients: 75 },
  { month: 'Sep', patients: 80 },
  { month: 'Oct', patients: 85 },
  { month: 'Nov', patients: 90 },
  { month: 'Dec', patients: 95 },
].map((item) => ({ month: item.month, value: item.patients }));

export const appointmentsData = [
  { month: 'Jan', appointments: 30 },
  { month: 'Feb', appointments: 35 },
  { month: 'Mar', appointments: 42 },
  { month: 'Apr', appointments: 48 },
  { month: 'May', appointments: 55 },
  { month: 'Jun', appointments: 60 },
  { month: 'Jul', appointments: 65 },
  { month: 'Aug', appointments: 70 },
  { month: 'Sep', appointments: 75 },
  { month: 'Oct', appointments: 80 },
  { month: 'Nov', appointments: 85 },
  { month: 'Dec', appointments: 90 },
  // ... other months
].map((item) => ({ month: item.month, value: item.appointments }));
