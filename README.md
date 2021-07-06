
# <p align="center"> Candles Agora </p>
<p align="center"> This is a frontend repository. The backend repository can be found here. </p>


![Candles Agora](https://github.com/WojciechLisCode/candles-agora-frontend/blob/development/Peek%202021-06-28%2008-39.gif)

## <p align="center"> App description: </p>

Candles Agoara is made for scented candles lovers. It contains a database of candles (currently limited to Yankee Candles™) and helps with the exchange of candles or opinions about them.

## <p align="center"> App features/User stories: </p>

1. ### Landing page.
<p>The landing page displays a list of all candles existing in the database. As a user, I'm able to filter that list by name and sort them either alphabetically or by the number of relations with users. Each candle is displayed in the candle card component, with a picture and name. As a user, I can click on that component to be taken to the candle details page.</p> 
<p>As a user with admin rights, I'm able to add a new candle to the database. This is done via the form that also displays a picture preview when a link from Google Drive™ is provided.</p>

2. ### Candle details page.

<p>The candle details page is divided vertically into two parts. The left part displays a picture, name, and description of the candle. The right side displays users relations with that candle. As a user, I can choose which type of relations is displayed. Each relation is displayed in a separate component which serves as a link to the user details page of the user that add it. </p>
<p>As a registered user I can also add my relation.</p>

3. ### Users page.

<p>Users page displays the list of all of the users in the database. As a user, I'm able to filter that list by name and sort them either alphabetically or by the number of relations with candles. Each user is displayed in a component that serves as a link to the user details page.</p>

4. ### User details page.

<p>The user details page displays the user name and his relations with candles. Relations can be sorted by relation type. Each displayed relation serves as a link to the candle details page. If visiting user is logged in, he can send a direct email message to the user via the displayed form.</p>

5. ### Login page.

<p>The login page allows users to log in if the related account exists. If users choose so, they can move to the sign-up page to create an account</p>

6. ### Signup page.

<p>The Signup page allows users to create a new account. After doing so, the user is automatically logged in. </p>
