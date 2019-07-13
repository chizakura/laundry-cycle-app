# Project Overview

## Project Schedule

| Day | Deliverable | Status |
|---|---| ---|
|7/8| Project Description | Complete |
|7/8| Wireframes / Priority Matrix / Functional Components | Complete |
|7/9| Core Application Structure (HTML, CSS, etc.) | Complete |
|7/10| Pseudocode / actual code | Complete |
|7/11| Initial Clickable Model | Complete |
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
| [Home Page](https://res.cloudinary.com/chizakura/image/upload/v1562715015/Project%204/Laundry_Cycle_Wireframe_01.png) | Main page for not logged in users that links to login and sign up pages |
| [Login Page](https://res.cloudinary.com/chizakura/image/upload/v1562715300/Project%204/Laundry_Cycle_Wireframe_02.png) | Page where existing users can log into their account |
| [Sign Up Page](https://res.cloudinary.com/chizakura/image/upload/v1562715523/Project%204/Laundry_Cycle_Wireframe_03.png) | Page where users can sign up to create an account |
| [Profile Page](https://res.cloudinary.com/chizakura/image/upload/v1562716462/Project%204/Laundry_Cycle_Wireframe_04.png) | Page that contains logged in user's information |
| [Closet Page](https://res.cloudinary.com/chizakura/image/upload/v1562765911/Project%204/Laundry_Cycle_Wireframe_05.png) | Page that displays list of all clothing items added by the user |
| [Show Clothing Item Page](https://res.cloudinary.com/chizakura/image/upload/v1562811015/Project%204/Laundry_Cycle_Wireframe_06.png) | Page that displays info for a specific clothing item |
| [New Clothes Form Page](https://res.cloudinary.com/chizakura/image/upload/v1562860166/Project%204/Laundry_Cycle_Wireframe_07.png) | Form that allows the user to add new clothes |
| [Washer Page](https://res.cloudinary.com/chizakura/image/upload/v1562972984/Project%204/Laundry_Cycle_Wireframe_08.png) | Page that displays clothes separated by their wash options |
| [Dryer Page](https://res.cloudinary.com/chizakura/image/upload/v1562972988/Project%204/Laundry_Cycle_Wireframe_09.png) | Page that displays clothes separated by their dry options |
| [Care Guide](https://res.cloudinary.com/chizakura/image/upload/v1562973148/Project%204/Laundry_Cycle_Wireframe_10.png) | Displays laundry care symbols and what they mean |

## Priority Matrix

- [Laundry Care Priority Matrix](https://res.cloudinary.com/chizakura/image/upload/v1562987664/Project%204/Laundry_Cycle_Priority_Matrix.png)

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
- [ ] Organize clothes for bleaching
- [ ] Organize clothes for drycleaning
- [ ] Organize clothes for ironing

## Architectural Design

- [Laundry Cycle React AD](https://res.cloudinary.com/chizakura/image/upload/v1562591794/Project%204/Laundry_Cycle_React_AD.jpg)

## Entity Relationship Diagram

- [Laundry Cycle ERD](https://res.cloudinary.com/chizakura/image/upload/v1562597109/Project%204/Laundry_Cycle_ERD.png)

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
| Display Home page | H | 1.5hrs| 4.5hrs |
| Display Login page | H | 1.5hrs | 1.5hrs |
| Display SignUpForm page | H | 1.5hrs | 0.5hrs |
| Add new user | H | 2.5hrs | 1.5hrs |
| Log in existing user | H | 2.5hrs | 2hrs |
| Sign out existing user | H | 2.5hrs | 1hr |
| Display Profile page of logged in user | H | 3hrs | 1.5hrs |
| Display list of clothes | H | 3hrs | 3hrs |
| Display NewClothesForm page | 7/11 | 11:30-1pm | 1.5hrs |
| Add clothes | H | 2hrs | 2.5hrs |
| Select care symbols | H | 5hrs | 4hrs |
| Display ShowClothingItem page | H | 3hrs | 2.5hrs |
| Display options on ShowClothingItem page | H | 3hrs | 3.5hrs |
| Edit details for clothing item | M | 4.5hrs | - |
| Delete clothes | M | 1.5hrs | - |
| Display Washer page | H | 1.5hrs | 1hr |
| Sort list of clothes by washing options | H | 5.5hrs | - |
| Display Dryer page | H | 1.5hrs | 0.5hrs |
| Sort list of clothes by drying options | H | 3.5hrs | - |
| Display CareGuide page | M | 5hrs | - |
| Total |  | 54hrs | - |

## Helper Functions
Helper functions should be generic enough that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | --- |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
| Library | What it Does | 
| --- | --- |  
| Bootstrap | Used to adding styling to application | 
| React Bootstrap | Used to add bootstrap styling in React |
| Google Fonts | Used to match theme of application |
| [Washicons](http://lucijanblagonic.github.io/Washicons/) | Used icons to match theme of application and for care guide |
| Material Icons | Used to get icons to add more style to application |


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
#### #1
**ISSUE**: Closet page not showing added clothing item after pressing submit on the NewClothesForm page.                              

**RESOLUTION**: Added a ComponentDidMount to the Closet page to get the list of clothes.

#### #2
**ISSUE**: Unable to access wash option and dry option objects that are nested in clothing item. 

**RESOLUTION**: From this [link](https://hackernoon.com/accessing-nested-objects-in-javascript-f02f1bd6387f), used an array reduce method to safely access nested objects.