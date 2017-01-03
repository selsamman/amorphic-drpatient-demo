This is simple application to demonstrate amorphic

* A simple data model that illustrates relationships between objects
* Data binding from the model to the HTML view
* How to call code on the server

## How to set it up

* Clone or checkout this project from github

        https://github.com/selsamman/amorphic-drpatient-demo.git
    
* Make sure you have nodejs installed (version 4 or later)
    
* Run NPM to get the required node modules

        npm update
        
* Start the application

        node app.js --port 30001

* Go to the local web page in your browser

        http://localhost:30001
    
* And you should see the a screen where you can enter doctor and patient names   
  
## Put it through it's paces

* Enter the name of a doctor and hit enter

* Enter the name of a second doctor and hit enter

* Enter the name of a patient and hit enter

* Enter the name of a second patient and hit enter

* Click on one of the doctors to select it

* Select the patient in the drop-down on the right

* Enter a date (dd/mm/yy) and hit enter

* You will now see an appointment in the list on the right

* Refresh the browser window (or close it and reopen the same URL).  You will see that all your data was saved.

Refer to http://selsamman.github.io/amorphic-docs/intro/intro-drpatient1.html for a tutorial to walk through how this works.