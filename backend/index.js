const express = require('express');
const app = express();
const port = 3000;

const jokes = [
  {
    "id": 1,
    "type": "programming",
    "setup": "Why do programmers prefer dark mode?",
    "punchline": "Because light attracts bugs!"
  },
  {
    "id": 2,
    "type": "programming",
    "setup": "How many programmers does it take to change a light bulb?",
    "punchline": "None. It's a hardware problem!"
  },
  {
    "id": 3,
    "type": "programming",
    "setup": "Why do Java developers wear glasses?",
    "punchline": "Because they don't C#!"
  },
  {
    "id": 4,
    "type": "general",
    "setup": "What's a programmer's favorite hangout place?",
    "punchline": "Foo Bar!"
  },
  {
    "id": 5,
    "type": "programming",
    "setup": "Why did the programmer quit his job?",
    "punchline": "Because he didn't get arrays (a raise)!"
  }
];

const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 114,
  "public_gists": 5,
  "followers": 51105,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-10-11T17:17:56Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('Twitter route');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login Page</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>YouTube Page</h2>');
});

app.get('/github', (req, res) => {
  res.json(githubData);
});

app.get('/api/jokes', (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});