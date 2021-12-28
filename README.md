# Lusha Live App  
- This is a live coding exercise.
- start the server & client
- fix the issues until server & client are running - see "fix initial issues" section
- start implementing tasks from the back-end & client task list section
  
## Requirements  
  
 - [Node v7.6+](https://nodejs.org/en/download/current/) or [Docker](https://www.docker.com/)  
 - [Yarn](https://yarnpkg.com/en/docs/install)  
  
## Getting Started  
  
#### Running Docker  
from the root folder (LushaLive) run the compose.sh script  
it will create 2 dockers with mongoDB and the backend app  
  
#### Seed DB  
this will seed the DB with predefined 9 houses data   
  
```bash  
cd backend  
node seed.js  
```  
  
#### Running Client  
  
```bash  
cd client  
yarn  
yarn start  
```  
  
#### Running Backend  
  
```bash  
cd backend  
npm i  
npm start  
```  
  
#### connecting to mongo docker with Robo 3T  
create a new connection:  
 - Connection  
     - address: localhost  
     - port: 27018  
 - Authentication  
     - Perform authentication: checked  
     - user: root  
     - password: 123456  
     - Auth Mechanism: SCRAM-SHA-1  
  
  
## Tasks list  

### fix initial issues
- fix cors issue
- fix greedy express route in health.routes
- shut down the backend and navigate to houses page. handle the unhandled exception.
  
### client 
- when selecting a house from houses page:  
  - create a house page component that will display house data: 
      - house will contain selected house data.
      - a list of swornMembers for that house.   
      - use an open api anapioficeandfire https://anapioficeandfire.com/Documentation to fetch all sworn members.
fetch all sworn members from the anapioficeandfire character api (example : https://anapioficeandfire.com/api/characters/583).
fetch should be asynchronous, and by order - the order will be set by their index in the swornMembers array. so if you have 3 swornMembers in index 0, 1, 2 with id's  200, 100, 300 than fetch them all but once 200 return render it to the screen, then 100 and lastly 300), if a member returned but its not his time to be displayed, delay the render until all previous relevant members have been rendered.
      - data for sworn member should look like this : { name, url, gender, culture, born, died, titles, aliases}.
      - implement a save members to DB functionality.
      - fix houses images proportions in the houses page.
      - add on hover effect- darken image or any other css image effect on the houses page.
- fix refresh issue on house page where selected house is purged.
- create a Characters page:
  - implement a search box that will search member by name (bonus - add debounce). 
  - create a component to display the following data: { name, url, gender, culture, born, died, titles, aliases}  
  - fetch character from backend - use pagination and display 10 characters per page.
  - handle character not found flow.  
- refactor API calls - create a dedicated place to handle http client requests. 
- instead of using the Context to fetch selectedHouse in house page, change the code so that clicking on a house will redirect to /house/{id} and then pull the data from the context.
  
### back-end 
- add schema validation on DB  
- add schema validation on controller  
- implement cache when fetching data from houses/characters with 30 sec TTL  
- implement unit tests  
- implement end-to-end tests
- use logger  
- api returns 500 when data not found, return 400
