# i2C(WIP)

As part of the recruitment process we require the following task to be completed.

# Task
- Create a simple dashboard to present the data within a structure that will be legible and easily digested by end-users.
- This can include as many charts as you feel is required, plus consideration towards chart type.
- It may also include text describing the charts but please do not analyse the data, simply use Lorem Ipsum as representation.
- Style the dashboard as you see fit. However, please bear in mind that we utilise [MaterialUI] in one of our projects.
- We would like to see the front end fetching the data via an API.

### Tech
While we want you to implement your own ideas and creativity to this task we do have a few restrictions due to our current stack:

- [ReactJS]
- [node.js]
- [express]
- [Mariadb] - MySql is fine also

So, please no Angular, NoSQL, etc. And definitely no jQuery for the ui/ux

### How to use
* Git clone `https://github.com/reenz/dashboard.git`
* Set environment variables `USER` and `PASSWORD` for MySql database
* Inside your project run `mysql -u user -p < setup.sql` to create database, table and populate your database from csv files.
* `npm start` it will start both the express and react server and will automatically direct to localhost:3000
* `npm test` to run the backend(express app) tests

### Approach

* I decided to use MySql just because there was not enough documentation available for Mariadb to use.
* I divided the task into small steps as follows:
    * Make an express server.
    * Install MySql and create database and table
    * Create react app
    * Fetch data from database into react component and display it in a table first 
* It becomes easy to clone and use I made setup.sql file that will create database and table and will populate the table from the csv files available.
* So that I could test the database I made a separate private function connect that will establish the connection for database.
* As this task was my first ever full stack react-express MySql app, I was not aware how to fetch data from database into the react app, after reading some medium articles I was able fetch the data and display it in table.
* Now next step was to display the data in bar graph instead of table. There were lots options available I decided to use ChartKick simply thought it will be easy to use.
    * If I had more time:
    * I would have researched more about how to make charts using data from database in react.
    * Test the database using Sinon and test the react app.

### Data
You will find the following files:
```
+-- data\
|   +-- weekly.csv - difference between exposed/control results per week per product.
|   +-- top.csv - top line values for each metric, value uplift and % uplift
```

Typically, weekly data is presented using a line chart with the top-line values being displayed in either a bar chart or table format.

[node.js]: <http://nodejs.org>
[express]: <http://expressjs.com>
[ReactJS]: <https://reactjs.org/>
[Mariadb]: <https://mariadb.org/>
[MaterialUI]: <https://www.material-ui.com/#/>

### References

1. https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04
