export function gitTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) {return `${diffSec} seconds ago`;}
  if (diffMin < 60) {return `${diffMin} minutes ago`;}
  if (diffHour < 24) {return `${diffHour} hours ago`;}
  if (diffDay < 7) {return `${diffDay} days ago`;}

  // If within the same year, show `Mon DD HH:MM`
  const nowYear = now.getFullYear();
  const year = date.getFullYear();

  const optionsSameYear: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  const optionsOtherYear: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };

  return date.toLocaleString('en-US', year === nowYear ? optionsSameYear : optionsOtherYear);
}