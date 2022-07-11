import { string } from 'yup';

// eslint-disable-next-line import/prefer-default-export
export function timeSince(date) {
  if (date === 'now') return 'few seconds ago';

  // minus 7 hour for different timezone between server and client
  const seconds =
    Math.floor((Date.parse(new Date()) - Date.parse(date)) / 1000) - 7 * 3600;

  let interval = seconds / 31536000;
  if (interval > 1) {
    if (Math.floor(interval) === 1) return `${Math.floor(interval)} year ago`;
    return `${Math.floor(interval)} years ago`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    if (Math.floor(interval) === 1) return `${Math.floor(interval)} month ago`;
    return `${Math.floor(interval)} months ago`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (Math.floor(interval) === 1) return `${Math.floor(interval)} day ago`;
    return `${Math.floor(interval)} days ago`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    if (Math.floor(interval) === 1) return `${Math.floor(interval)} hour ago`;
    return `${Math.floor(interval)} hours ago`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (Math.floor(interval) === 1) return `${Math.floor(interval)} minute ago`;
    return `${Math.floor(interval)} minutes ago`;
  }

  return `${Math.floor(seconds)} seconds ago`;
}
