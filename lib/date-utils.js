// Date utility functions

export function getMonthName(monthIndex) {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  
  return months[monthIndex] || '';
}

export function getWeeksInMonth(year, month) {
  // Calculate the first day of the month
  const firstDay = new Date(year, month, 1);
  
  // Calculate the last day of the month
  const lastDay = new Date(year, month + 1, 0);
  
  // Format date as MM/DD
  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
  };
  
  // Simplification: divide the month into 4 even parts
  const totalDays = lastDay.getDate();
  const daysPerWeek = Math.ceil(totalDays / 4);
  
  const weeks = [];
  
  for (let i = 0; i < 4; i++) {
    const startDate = new Date(year, month, i * daysPerWeek + 1);
    const endDate = new Date(year, month, Math.min((i + 1) * daysPerWeek, totalDays));
    
    weeks.push({
      start: formatDate(startDate),
      end: formatDate(endDate)
    });
  }
  
  return weeks;
}