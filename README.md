WORKSHOP SPECS:
--------------

1. API:
must contain endpoints that cover all CRUD functionality
must contain parameterized endpoints or endpoints that handle query perameters

2. README:
include image of ERD w/brief explanation of schema

3. PostgreSQL database:
must be maintained and interacted with using Knex.js
must seed initial data into database using Knex
must retrieve data from the database using the join method of Knex

*** Stretch Goals ***:
- Make data structures stored in database more complex to increase lookup times. Increase initial seed data amount by an exponential scale (i.e. from 100 entires to 1,000,000). Use the morgan  middleware to add rudimentary metrics logging for your API requests and check lookup time performance after bloating data. Look into ways to improve performance (hint - start with indexing).
- Create a straightforward front-end to display the data coming back from your API.
- Send an HTTP request to a 3rd party API to seed your database. Transform the resultant data into the format you want for your database prior to insertion.
