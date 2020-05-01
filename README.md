# Ach Validator App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Components

- Home Page Component - The home page component is the default index/home page.  It's main purpose is to display the file, error list, and values of the ACH File.  The  component reads the file, uses the upload file service to create a post request, and makes it readable for other components.
- File Component - The file component is used to display the incoming file.  The input taken is an array format of a file.
- Error Box Component - The error box component is used to display an array of errors.
- Specifcations Component - THe specifications component is used to display the specifications of the input ACH file.

## Services

- Upload File Service - The upload file service is used to send the file to the ACH Validator API, more information can be found in the dependiencies section.  The response is used within every component.

## Depenendencies 

This application is built to be used in tandom with the [ACH Validator API](https://github.com/MikhailHusyev/ACHFileValidatorAPI).

## Launching

- To run the application Angular is required.
- For complete functionality the ACH Validator API must be used.
- To start the application run -ng serve within the directory.
