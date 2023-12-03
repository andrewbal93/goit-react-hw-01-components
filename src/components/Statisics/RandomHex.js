export default function getRandomHex() {
  const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  let hexResult = '#';
  for (let index = 0; index <= 5; index++) {
    hexResult += hexValues[Math.floor(Math.random() * hexValues.length)];
  }
  return hexResult;
}
