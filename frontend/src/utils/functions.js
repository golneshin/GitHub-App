export function formatDate(dateString) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  
  return `${months[monthIndex]} ${day < 10 ? '0' : ''}${day}, ${year}`;
}

// Example usage:
// const originalDate = "2020-01-06T03:04:56Z";
// const formattedDate = formatDate(originalDate);
// console.log(formattedDate); // Output: 06 Jan 2020
