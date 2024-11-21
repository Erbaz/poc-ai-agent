### Intro
This project is intended to be simple express server with routes that perform functional API requests for an AI Agent which connects to a MySQL Database to retrieve and analyze information to handle user queries and questions \
The main APIs are meant to:
1. View all tables
2. Describe a table
3. Describe relations for a table
4. Run any query

### Environment setup
Make sure to add the following information to the .env file:
1. `AI_API_KEY` to authorize an AI Agent to use the `run-query` API
2. `DB_HOST` hostname of the database
3. `DB_USER` user name 
4. `DB_PSWRD` password
5. `DB_NAME` the database name. If you need to handle more than one database instance, you will need to change source code to handle more connections.
6. `NGROK_TOKEN` Ngrok uses IP tunneling to provide a public url for your server. This is not a necessary integration, but is helpful when trying to connect the server with a different machine such as on Kaggle (where the AI agent may be hosted)
