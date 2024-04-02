export default function caesarCipher(string) {
  const key = 1;
  const splited = string.split('');

  for (let i = 0; i < splited.length; i++) {
    splited[i] = string.charCodeAt(i) + key;
  }
  return String.fromCharCode(...splited);
}
