# Project-1-1920 @cmda-minor-web 1820

The whole process of project 1 OBA will be documented here!

This project is made by: [Stefan Gerrits](https://github.com/StefanGerrits2) & [Roy Kuijper](https://github.com/RooyyDoe)

### Overview Page
![screencapture-127-0-0-1-5500-project-1-1920-index-html-2020-03-04-13_05_37](https://user-images.githubusercontent.com/40355914/75878051-41d6a200-5e19-11ea-8a37-2f035b97b7f8.png)

## Table of contents
* [To Do](#to-do-)
* [Description](#description-)
* [Usage](#usage)
  * [Packages and Technologies](#packages-and-technologies)
* [Handlebars.js](#handlebars.js)
* [API](#api)
* [Sources](#sources)
* [Licence](#licence)

## To Do

This is a list of things me and [Stefan Gerrits](https://github.com/StefanGerrits2) want to do in this project:

### Week One

Live link: [Demo](https://rooyydoe.github.io/project-1-1920/)

- [X] Brainstorming for a concept
- [X] Fetched data from the OBA-API
- [X] Made a search bar that actually works
- [X] Generated data into HTML with a template engine
- [X] Made different routes for the user to navigate to
- [X] Making use of modules to structure the code
- [X] Using WAFS and CSSTTR into this project
- [X] Tool for online presentations for kids
- [X] Generated presentation templates with the data of the books
- [X] Full screen option for presentations

## Description

In the start screen of my product users are presented with a search input and theme suggestions. The user can select a theme out of the list that the user wants to know more about by clicking on it the user can also use the search input for this. The user is then directed to a new page where all the books within the selected theme or search output are floating of the top of ur screen down to the bottom. The books within the selected theme or search input are obtained using an OBA API. The user is now able to select one of the books that is floating down. When a certain book is selected, the user will be navigated to a new page where the user can select a presentation template. when the user has selected one of the presentation templates it will show all the data of the book in it. The user will also be able to edit the template on the way they like it to be. And when the user wants to present the presentation they can click on full screen can present this to the class or teacher.

## Usage

**Clone the repository of the project**
```
git clone https://github.com/RooyyDoe/project-1-1920.git
```

**Run code**
```
Run the index.html into your browser
```

(Live demo if needed)

**Demo** is also live at: [Demo](https://rooyydoe.github.io/project-1-1920/)

## Handlebars.js

Handlebars is a simple templating language.

It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.

```
<p>{{firstname}} {{lastname}}</p>

```

A handlebars expression is a `{{`, some contents, followed by a `}}`. When the template is executed, these expressions are replaced with values from an input object.

## API

The data that I will be using for my applicatipon is comming directly come out of the [OBA API](https://zoeken.oba.nl/landelijk/api/v1/help/). This is a library API that gives out data about books that they have available to rent out.

In the **Book overview page** I am using this API endpoint: 

> https://zoeken.oba.nl/api/v1/search/?q=

This will be returning the following data:

<details>
 <summary>Books data</summary>
 
<img width="633" alt="screenshot_2020-03-02_at_17 21 02" src="https://user-images.githubusercontent.com/40355914/75886927-4dca6000-5e29-11ea-8d97-0cc5db37fd92.png">
 
</details> 

***

In the **Presentation Template page** I am using this API endpoint: 

> https://zoeken.oba.nl/api/v1/search/?id=

This will be returning the following data:

<details>
 <summary>book data</summary>
 
![image](https://user-images.githubusercontent.com/45566396/75886934-4efb8d00-5e29-11ea-9f12-f0e4ca52339e.png)
 
</details>

***

## Sources

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/) - I mostly used this site to obtain my sources
* [API Docs](https://zoeken.oba.nl/landelijk/api/v1/help/) - Instructions on how to use this API.
* [Handlebars.js](https://handlebarsjs.com/guide/#what-is-handlebars) - Everything I needed to know about handlebars.
* [Routie.js](http://projects.jga.me/routie/) - Everything I needed to know about Routie
* [.map, .filter, .reduce](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) - Explained so I could understand.

# License

More information over [License](https://help.github.com/en/articles/licensing-a-repository)

[MIT](https://github.com/RooyyDoe/project-1-1920/blob/master/LICENSE.txt) © [Roy Kuijper](https://github.com/RooyyDoe) & [Stefan Gerrits](https://github.com/StefanGerrits2)



<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
