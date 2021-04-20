# My Hero Academia - Heros
CS3200 db design final project

## Contributors
* Jackie Tam - CS3200 33620 Database Design SEC 03 Spring 2021
* Tara Tam - CS3200 33620 Database Design SEC 03 Spring 2021

## Project Description
Database of users representing Heros from the manga/anime My Hero Academia. Heros may or may not have a superpower called a Quick

### UML Class Diagram
[UML pdf](db_design_final_project_UML.pdf)

### User Data Model
Hero
* a superhero from the My Hero Academia with a first and last name, username representing their hero alias, passsword, email, date of birth, blood type, and affiliation

### Domain Object Data Models
SuperMove
* special ability names with description, effective range of the move (i.e. close, medium, long, etc.), and overall usage type (i.e. offensive, defensive, etc.)

Quirk
* a super power that has a name, power type, and description of the power

Quote
* a quote from a user that has an upvote count and can be favorited

### User to Domain Object Relationships
User to SuperMove
* One User can have many SuperMoves

User to Quote
* One User can have many Quotes

User to Quirk
* Many Users can have many Quirks

### Domain Object to Domain Object Relationships
Quirk to Super_Move
* One Quirk can have many SuperMoves

### Portable Enumeration(s)
Affiliation
* "U.A. HIGH SCHOOL"
* "SHIKETSU HIGH SCHOOL"
* "KETSUBUTSU ACADEMY"
* "HERO ASSOCIATION"
