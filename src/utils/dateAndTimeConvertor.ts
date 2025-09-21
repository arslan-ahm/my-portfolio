/**
 * Converts a 4-digit year to its word representation
 * @param year - The year as a number (e.g., 2024)
 * @returns The year in word format (e.g., "twentytwentyfour")
 */

const digitWords: Record<string, string> = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };
const tensWords: Record<string, string> = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety'
  };
  
export function yearToWords(year: number): string {
  const yearStr = year.toString();
  
  if (yearStr.length !== 4) {
    throw new Error('Year must be a 4-digit number');
  }
  
  function convertTwoDigits(digits: string): string {
    const num = parseInt(digits);
    
    if (num === 0) return 'zero';
    if (num < 10) return digitWords[digits[1]];
    if (num <= 20) return tensWords[digits];
    
    const tens = parseInt(digits[0]) * 10;
    const ones = parseInt(digits[1]);
    
    if (ones === 0) {
      return tensWords[tens.toString()];
    } else {
      return tensWords[tens.toString()] + digitWords[ones.toString()];
    }
  }
  
  const firstTwo = yearStr.substring(0, 2);
  const lastTwo = yearStr.substring(2, 4);
  
  const firstPart = convertTwoDigits(firstTwo);
  const secondPart = convertTwoDigits(lastTwo);
  
  return firstPart + secondPart;
}