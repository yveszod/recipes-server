# Recipes App Backend

This is a test and personal project by Yves Shtick, the Front end is located in the following repo:
* [https://github.com/yveszod/recipes-client](https://github.com/yveszod/recipes-client)

The Live app project can be found here:
* [https://616ae819fe4d445997475152--yves-recipes-app-552.netlify.app/](https://616ae819fe4d445997475152--yves-recipes-app-552.netlify.app/)

---
This server is connected to a MongoDB database (Atlas), and all operations are performed, saved and stored there. In my case, we use only 3 endpoints, and only 3 methods within this app.

### Get All Recipes endpoint
* */api/recipes* | **GET** - Will use the find method and return the full list of recipes.
* */api/recipes* | **POST** - Will post a new Recipe after the form is submitted.
* */api/recipes/:id* | **DELETE** - Will remove the chosen recipe from the Collection.