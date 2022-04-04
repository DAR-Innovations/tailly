## 1. Application Goal

Taily - A web app that helps pet owners with all kinds of needs. The owner will be able to find their pet with the assistance of the service by leaving data about their pet. Also user has an access to the necessary information on the care of their furry friend and the nearest pet stores, which will simplify the life of the unexperienced pet owners.

## 2. System Description

System consist of these functional components:

1.  Registration, authentication and authorisation
2.  Interactive map of lost pets
3.  Providing useful tips for pet care
4.  Location of nearby facilities
5.  Sorting and searching data
6.  List of lost animals in users area

Application will have different pages with above mentioned components.

## 2.1 Registration and Authentication

Registration will be done with Tokens or Firestore Authentication.

The authorisation parameters will be:

- Login - required field
- Password - required field

Registration parameters:

- Login - required field
- Password - required field
- First name and Last name - required field

## 2.2 Information input (Lost pet)

User fill special required fields in order to construct entity with different features.

The entity will be based on user filled informations:

- Photo of pet - required field
- Name of pet - required field
- Age of pet - required field
- Breed of pet - required field
- Color of pet - required field
- Last location of pet - required field

Entities will be stored and sorted in the database.

## 2.3 Altering already existing data

The user will be able to change the selected characteristics of the entity as needed. The user will also be able to delete the entity from the repository completely.

Entity data will be searched by sorting by name.

## 2.4 Interactive map

The app has two different interactive maps: pet facilities and lost pets.

The user will see the nearest pet stores, grooming services, veterinary clinics and etc. By clicking on the selected place on the map, the user will be provided with details of this facility.

The customer will be provided with an interactive map showing the location of the lost pets with the information provided by the user (see 2.2).

## 2.5 Providing useful tips for pet care

Users will be able to see useful tips about how to look after the pet.
The tips will be made in the form of small articles, which are added by the administrator (see 2.6).

## 2.6 Separation of user roles

The application has two different types of roles: Administrator and User.

User functionality :

- Entity data entry
- Change custom configurations (name, password)
- Changing entity characteristics
- Interactive map view

Admin functionality :

- Deleting a user from the database 
- Adding new articles to the tips tab
- Change user's configurations (name, password)

## 3. Technologies Stack

For system realisation web application would be structured with these technologies:

Backend:

- Node.js
- Firestore Database
- Express.js
- Firebase Authentication

Frontend:

- React.js
- UI ToolKits
- Axios
- React-router-dom

React libraries will be used to augment the functionality. In the future, the prospect of switching to Typescript is being considered.

## 4. Design requirements

The design of the app should be minimalist, where the main content will take precedence.

The colours should be pleasing to the eye and for long browsing. A change of themes for ease of use is being considered for future versions of the app
