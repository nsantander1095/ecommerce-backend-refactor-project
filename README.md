# E-Commerce Backend Code Refactor

## Table of Contents

* [Description](#description)
* [Visuals](#visuals)

## Description

The E-commerce backend refactor was centered on taking a working Express.js API and configuring it to utilize Sequelize to interact with a MySQL database. We seed our own provided data, and configure the routes for:

 * a GET request for all, 
 
 * a GET request for one by its ID, 
 
 * a POST request to make a new instance, 
 
 * a PUT request to update one by its ID, 
 
 * and a DELETE request to delete one by its ID

 for each of the Models we have, being Product, Tag, and Category.

 We use both a one-to-many relationship and a many-to-many relationship to associate the data so that when we make the requests, we recieve all of the pertinent information.

## Visuals

To see a full walkthrough of the functionality of the application, visit this [link.](https://drive.google.com/file/d/11agNuCbS6aDqSvvFlUHmh5xuW8I0107I/view?usp=sharing)