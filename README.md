
# FILMFLEX
The goal of this project was to create a Front End React with the following Requirements:

## Minimum Project Requirements
- There should be at least 4-5 functional components ✔️ 
- There should be at least 3 or more pages (separate routes) ✔️
- The Application must make use of React Router (npm install react-router-dom) ✔️
- Uses at least one external API ✔️
- Prop passing of some sort ✔️
- Has README.md file at the root of repository that clearly documents the purpose of the project, the target end user, and includes a link to the deployed version of the project ✔️
- Must have a repository and make regular commits (at least 10 total) ✔️
- Must be deployed (a good option is NetlifyLinks to an external site.) ✔️
 

## Stretch Goals:
- Manage at least some part of state with the useReducer and useContext hooks (together) or ReduxLinks to an external site. (npm install @reduxjs/toolkit react-redux) ✔️ 
- Use Local StorageLinks to an external site. to store some of your application data in the browser ❌ (application data is stored in firebase cloud service database)
- Install axiosLinks to an external site. (npm install axios) and use it to read external APIs ✔️
- Use a CSS Framework (like BootstrapLinks to an external site.) to style part of your application ✔️

I chose to use a MOVIE database API with a Halloween Theme from the API datebase at "https://www.themoviedb.org/"
to make a website where a user can choose a film to watch from a list 
set by categories. The user can scroll to see whats available in each category but if they
want to use the favorites option, they have to sign up with a username and password, After they are sign up, they are automatically logged in to add and delete faves at will. The target end user for this project are people that like to watch movies. 

# DEPLOYMENT LINK
https://filmflix2-639e3.web.app/

## Acknowledgements

 - [Awesome README Template](https://readme.so/editor)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 - [Learn React in  8 hours](https://www.youtube.com/watch?v=f55qeKGgB_M)
 - [Firebase docs](https://firebase.google.com/)
 - [Introductin to TheMovieDB API](https://www.youtube.com/watch?v=bpHtxx_wmqw)
 - [tailwindcss installation guide](https://tailwindcss.com/docs/guides/create-react-app)
 - [Tailwind CSS Crash Course](https://www.youtube.com/watch?v=UBOj6rqRUME)
 - [Build and Deploy a Fully Responsive Website with Modern UI/UX in React JS with Tailwind](https://www.youtube.com/watch?v=_oO4Qi5aVZs)
 - [How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)](https://www.youtube.com/watch?v=XtMThy8QKqU)






## Installation Dependencies

Install my-project with npm

```bash
  npx install create-react-app my-project
  cd my-project
  npm install react-router-dom react-icons axios firebase
  npm install tailwindcss postcss autoprefixer
  npx tailwindcss 
  
```
## Recommended Visual Code Extentions
- ES7+ React/Redux/React- Native snippets - loads functions with prefix statements example rafce
- Tailwind CSS IntelliSense - provides users with advanced features such as autocomplete, syntax highlighting, and linting.
- Pettier- Code Formatter - code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

## Future Developments
- Add a watchlist 
- Would be nice to have a pagination page when a user reaches the endd of the scroll for the catergory
- Add a trailer if possible for each movie
- Add a fucntion where the user can delete their own username once they log in 
    
## Screenshots



![Screenshot (479)](https://user-images.githubusercontent.com/110546643/198922710-d0df743d-8176-4656-a0ec-3928ef1061af.png)

