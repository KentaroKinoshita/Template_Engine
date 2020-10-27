# Project Description
The Team Profile Generator is a command-line-input application run in Node that requests information from the user about members of an engineering team and generates an HTML file displaying that information.  Before running the application the user must perform an npm install to install all required dependencies.

Upon launching the app, the user is asked to describe the first member of their team.  The user enters the team member's name, selects that member's role from a list (options include "Engineer," "Intern," and "Manager), enters the member's ID (any string), enters the member's email address, and then must enter another piece of information that will differ depending on what role was selected.  If "Engineer" was selected, the app asks the user for the team member's GitHub username; if "Intern" was selected, the member's school is requested; and if "Manager" was chosen, the user is prompted for the team member's phone number.

# Instaltion

## Getting Started

Steps to install application:
1. Clone repository.
2. In the directory with server.js run npm install
3. Start server and answer prompts
4. HTML Generated

```
git clone git@github.com:kqarlos/team-profile-generator.git
npm instal
node server.js

```


# Techniques and Technologies Used
This app was created using Object-Oriented Programming concepts, namely using classes and constructors to create "team member" objects based on information entered by the user.  The app is run using Node.js, and uses the "Inquirer" and "FS" node modules.  Files for different objects are also stored in separate .js files and passed among one another using module.exports and require.
