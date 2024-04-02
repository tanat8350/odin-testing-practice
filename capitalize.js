export default function capitalize(string) {
  const lowercased = string.toLowerCase();
  const splited = lowercased.split('');
  splited[0] = splited[0].toUpperCase();
  return splited.join('');
}
