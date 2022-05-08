# Welcome to News Explorer Web App ![icons8-news-64](https://user-images.githubusercontent.com/87845853/166670657-63d94ba8-a5a1-4cc8-b604-e0028fdc9788.png)


## Tech MERN Stack:![icons8-software-developer-64](https://user-images.githubusercontent.com/87845853/166670929-4957f5a5-b716-42e7-871e-7b9c7ac23b7c.png)

* Front-End: | ReactJS | CSS | 

* BackEnd: | NodeJS | Express | MongoDB |

* Host source: Gooogle Cloud 

_______________________________________

### User experience:

 * In this app users able to search for articles by typing keyword and search without registration.
 * Users can enter to some article by clicking on the card.
* Those users who will register and login in will able to save & delete articles. 
* Users who are logged in can save & delete articles both from the main page and from the saved-articles page.
* Users who are logged in can leave the page and back to it without additional authorization.
* Users can leave a page and their last search result will be saved.

__________________________________________

### App functionality 

* All forms in the app are validated using custom hook. 
* The app using third side NewsAPi , see docs [here](https://newsapi.org/)
* The app is fully responsive with all styles done in vanilla CSS.
* The app using HOComponent to protect Routes from users that aren't logged in, done by React-Router v6
* Authentication and authorization handled by backEnd, using Json Web token that generates and verifies the token.
* The Saved Articles header returns a summary of the top keywords of the articles in descending order. Deleting cards will update this summary in real time.

____________________________________________

You can try it [here](https://news-searcher.students.nomoreparties.sbs)![icons8-finger-60](https://user-images.githubusercontent.com/87845853/166671383-ab9cfc92-d3a6-49c3-9bf9-6bbef540aadd.png)


BackEnd code is [here](https://github.com/Eduard-L/news-explorer-api)![icons8-finger-60](https://user-images.githubusercontent.com/87845853/166671389-fcd307a3-171d-48f1-b7b8-d66605242eb4.png)

