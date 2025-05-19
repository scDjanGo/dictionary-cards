export default function TimeAgo(isoDate: string): string {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
  
    if (diffMinutes < 1) return "только что";
    if (diffMinutes < 60) return `${diffMinutes}м`;
    if (diffHours < 24) return `${diffHours}ч`;
    if (diffDays < 7) return `${diffDays}д`;
    if (diffWeeks < 4) return `${diffWeeks}н`;
    if (diffMonths < 12) return `${diffMonths}мес`;
    return `${diffYears}г`;
  }
  
  