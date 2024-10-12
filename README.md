
# Password Generator

A simple and customizable password generator written in JavaScript. This program generates random passwords based on specified requirements, including length, the inclusion of numbers, and the inclusion of special characters.

## Features

- **Customizable Password Length**: Generate passwords of any specified length.
- **Optional Number Inclusion**: Choose whether to include numeric digits in the password.
- **Optional Special Characters**: Add special characters (`!@#$%^&*`) for enhanced password strength.
- **Guaranteed Character Variety**: Ensures at least one uppercase letter, one number (if enabled), and one special character (if enabled) are present.

## Function Signature

## javascript
createPassword(size, includeNumber = true, includeSpecialCharacter = false)

Parameters
size (number): The length of the desired password.
includeNumber (boolean, default: true): Whether the password should include numeric digits (0-9).
includeSpecialCharacter (boolean, default: false): Whether the password should include special characters (!@#$%^&*).
Return Value
Returns a randomly generated password string that meets the specified criteria.

How It Works
Character Sets:

Uppercase letters (A-Z) are always included.
Lowercase letters (a-z) are always included.
Numbers (0-9) and special characters (!@#$%^&*) are optional.
Password Generation:

The function ensures at least one uppercase letter is present.
If numbers are included, at least one numeric digit is added.
If special characters are included, at least one special character is added.
The remaining characters are filled randomly from the selected character set.
Randomization:


# Example Output
createPassword(10, true, true) might produce: Q3$gH8j#Mn
createPassword(8, true, false) might produce: W4jP9tAb
createPassword(6, false, false) might produce: KfLuVi
