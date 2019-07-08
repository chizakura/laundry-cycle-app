# Project Overview

## Project Schedule

| Day | Deliverable | Status |
|---|---| ---|
|7/8| Project Description | Incomplete |
|7/8| Wireframes / Priority Matrix / Functional Components | Incomplete |
|7/9| Core Application Structure (HTML, CSS, etc.) | Incomplete |
|7/10| Pseudocode / actual code | Incomplete |
|7/11| Initial Clickable Model | Incomplete |
|7/12| MVP | Incomplete |
|7/15| Present | Incomplete |


## Project Description

**Laundry Cycle** is a React application that helps users organize their clothes for washing and drying. Users are able to add their clothes in the app and manually add the laundry care info from the clothes. There is also a guide to help users decipher the care symbols.

- Laundry Cycle - React Application
- [Washicons](http://lucijanblagonic.github.io/Washicons/)
- [Tide Guide on How to Do Laundry](https://tide.com/en-us/how-to-wash-clothes/how-to-do-laundry/your-comprehensive-guide-on-how-to-do-laundry)

## Wireframes

| Wireframe | Description |
| --- | --- |

## Priority Matrix

- Laundry Care Priority Matrix

### MVP/PostMVP - 5min

#### MVP 

- [ ] Register a new user
- [ ] Log in user
- [ ] Sign out user
- [ ] Show user profile
- [ ] Add new clothes to closet
- [ ] Select care symbols for a clothing item
- [ ] Update a clothing item
- [ ] Remove a clothing item
- [ ] Organize clothes for washing
- [ ] Organize clothes for drying
- [ ] Show guide for care symbols

#### PostMVP 

- [ ] Upload care symbols of a clothing item by scanning tag
- [ ] Add notes for a clothing item
- [ ] Show full guide on how to do laudry

## Architectural Design

- Laundry Cycle AD

## Entity Relationship Diagram

- Laundry Cycle ERD

## UI Components

| Component | Description |
| --- | --- |
| Home | This will render the main page for the app |
| SignUpForm | This will render the registration form to create a new user |
| Login | This will render the login form for an existing user to sign in |
| Profile | This will render the user's details |
| Closet | This will render a list of all clothes added by the user |
| NewClothesForm | This will render the form to add clothes to the user's closet
| ShowClothingItem | This will render the details of a clothing item |
| Washer | This will render a list of clothes and their washing options |
| Dryer | This will render a list of clothes and their drying options |
| CareGuide | This will render guide for care symbols |


## Time Frames

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Display Home page | H | 1.5hrs| - |
| Display Login page | H | 1.5hrs | - |
| Display SignUpForm page | H | 1.5hrs | - |
| Add new user | H | 2.5hrs | - |
| Log in existing user | H | 2.5hrs | - |
| Sign out existing user | H | 2.5hrs | - |
| Display Profile page of logged in user | H | 3hrs | - |
| Display list of clothes | H | 3hrs | - |
| Add clothes | H | 2hrs | - |
| Select care symbols | H | 5hrs | - |
| Display ShowClothingItem page | H | 3hrs | - |
| Edit details for clothing item | M | 4.5hrs | - |
| Delete clothes | M | 1.5hrs | - |
| Display Washer page | H | 1.5hrs | - |
| Sort list of clothes by color shades | H | 5.5hrs | - |
| Display Dryer page | H | 1.5hrs | - |
| Sort list of clothes by drying options | H | 3.5hrs | - |
| Display CareGuide page | M | 5hrs | - |
| Fix bugs and errors | M | 6hrs | - |
| Total |  | 57hrs | - |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
