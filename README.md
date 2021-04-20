# My Hero Academia - Heros
CS3200 db design final project

## Contributors
* Jackie Tam - CS3200 33620 Database Design SEC 03 Spring 2021
* Tara Tam - CS3200 33620 Database Design SEC 03 Spring 2021

## Project Description
Database of users representing Heros from the manga/anime My Hero Academia. Heros may or may not have a superpower called a Quick

### UML Class Diagram
[UML pdf](db_design_final_project_UML.pdf)

### Domain Object Data Models
SuperMove
* special ability names with description, effective range of the move, and overall usage type (i.e. offensive, defensive, etc.)

Quirk
* a super power that has a name, power type, and description of the power.

Quote
* a quote from a user that has an upbote count and can be favorited

### User to Domain Object Relationships
User to SuperMove
* One User can have many SuperMoves

User to Quote
* One User can have many Quotes

### Domain Object to Domain Object Relationships
Quirk to Super_Move
* One Quirk can have many SuperMoves

RELATIONSHIP_2
* INSERT HERE

### Portable Enumeration(s)
Affiliation
* "U.A. HIGH SCHOOL"
* "SHIKETSU HIGH SCHOOL"
* "KETSUBUTSU ACADEMY"
* "HERO ASSOCIATION"
