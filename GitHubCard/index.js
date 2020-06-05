/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
let body = document.querySelector('.cards');

function APICardCreator(username){
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => {
    const gitUrl = response.data;
    body.append(cardCreator(gitUrl));
  })
  .catch(error => {
    console.log('Something went wrong', error)
  })
  .finally(() => {
    console.log('done')
  })
}
  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['charlupuhh', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

for (i in followersArray){
  APICardCreator(followersArray[i]);
}
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardCreator(gitObject){
  let myCard = document.createElement('div');
  myCard.classList.add('card');

  let pic = document.createElement('img');
  pic.src = gitObject.avatar_url;
  myCard.appendChild(pic);

  let info = document.createElement('div');
  info.classList.add('card-info');

  let name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = gitObject.name;
  info.appendChild(name);

  let user = document.createElement('p');
  user.classList.add('username');
  user.textContent = gitObject.login;
  info.appendChild(user);

  let loc = document.createElement('p');
  loc.textContent = gitObject.location;
  info.appendChild(loc);

  let prof = document.createElement('p');
  let addy = document.createElement('a');
  addy.href = gitObject.html_url;
  prof.appendChild(addy);
  info.appendChild(prof);

  let followers = document.createElement('p');
  followers.textContent = gitObject.followers;
  info.appendChild(followers);

  let following = document.createElement('p');
  following.textContent = gitObject.following;
  info.appendChild(following);

  let bio = document.createElement('p');
  bio.textContent = gitObject.bio;
  info.appendChild(bio);

  myCard.appendChild(info);

  return myCard;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
