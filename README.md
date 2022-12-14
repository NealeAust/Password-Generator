# Password-Generator

## Project Title

To build a random password generator that automatically generates a strong and unpredictable password in accordance with parameters entered by the user.  

## Password Generator Webpage

The Password Generator webpage is a functional and easy to use random password generator that has been built using HTML, CSS and JavaScript. The HTML and CSS code was provided. My task was to do the write the JavaScript code. 

The Password Generator creates a random password in accordance with the criteria entered/selected by the user:
- Length of password is between 8 and 128 characters.
- The password must contain one or more of the character types: lower case letters, upper case letters, numbers and/or symbols.
- The length and different character types included determine how strong and secure the password is.

## Project Description

The objective of this project was to build a random password generator using JavaScript. The HTML code and CSS code had already been completed.

Note: A description of how to use the completed web page is provided in the 'Usage' section below.

The structure of the coding and what each section does is as follows:

1. Create a separate array for the character types: lowerCaseLetters, upperCaseLetters, numbers and symbols.

2. Declare the function generatePassword. This is declared at the start of the program because the scope of the function is the whole program.

3. Create the prompt for the user to enter the desired length of the password. As this is a string it is converted to a number to be used later. 

4. Add conditional operator if (number >= 8 && number <= 128)
    - if 'yes' proceed to prompting for what character types to include;
    - if 'no' create error message;
    - Terminate execution of program, user will have start request again.

5. Add conditional operator, if user did not select any character types an error message appears, and process is terminated.

This is where we start created the password:

6. Establish the character types the user selected. (i.e. ===true) (e.g. lowerCaseLetters, numbers, & symbols).

7. Instruct the program to merge these arrays into one array. This becomes the selection list when the password is being created. 

8. To create the password a maths function is used, which for each character that makes up the requested length (e.g. 8 = 8 characters) a character is randomly selected from the selection list (array) created based on the user???s selection/s. (step 7)

9. The program returns the password.

10. Password is generated/written to the screen.

## Installation

N/A

## Usage

The Password Generator is used to generate a random and unpredictable password as required. 

To use the application the user clicks on the 'Generate Password' button. A prompt appears for the user to enter the length of their password, between 8 and 128 characters. Once entered and validated, a series of four prompts will appear for the user to select the character types to be included: 
- Lower case letters (a, b, c, d...)
- Upper case letters (A, B, C, D...)
- Numbers (1,2,3,4...)
- Symbols (@, &, /, !...)

The application has built in business rules so if the length is outside the specified range an alert is displayed. When the user clicks the OK button, the process is terminated. The business rule for character types is that 'at least one character type??? must be selected, otherwise an alert is displayed. When the user clicks the OK button, the process is terminated. 

If the criteria entered is within the required parameters, the application will immediately return and display a random password. The length and different character types included determine how strong and secure the password is.

## Deployed Application and Screenshot

##### Link to the deployed application:

https://github.com/NealeAust/Password-Generator

##### Screenshot

Webpage:

![image](https://user-images.githubusercontent.com/115671306/206374856-605d4f49-d591-4fdf-8a29-d247f97da785.png)

Password generated and displayed:

![image](https://user-images.githubusercontent.com/115671306/206379361-f89a3860-403a-4104-a091-8199dacf67c6.png)

## Credits

N/A

## License

https://github.com/NealeAust/Password-Generator/blob/main/LICENSE

