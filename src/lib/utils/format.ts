import { parsePhoneNumberFromString } from 'libphonenumber-js';

export function formatPhoneNumber(value: string): string {
  // Remove all non-numeric characters
  const numbers = value.replace(/\D/g, '');
  
  // Format the number
  if (numbers.length <= 3) {
    return numbers;
  } else if (numbers.length <= 6) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
  } else if (numbers.length <= 10) {
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
  }
  return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
}

export function validatePhoneNumber(phone: string): boolean {
  const phoneNumber = parsePhoneNumberFromString(phone, 'US');
  return phoneNumber ? phoneNumber.isValid() : false;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}