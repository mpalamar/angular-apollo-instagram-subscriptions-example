# angular-apollo-instagram-subscriptions-example
![](http://i.imgur.com/acxRg0p.png)

## Getting Started

After [downloading this example](https://github.com/graphcool-examples/angular-apollo-instagram-subscriptions-example/archive/master.zip) please follow these steps.

### 1. Create an account

To run this example, please create a [graph.cool](http://graph.cool) account and **copy your endpoint**. This shouldn't take longer than a minute. We promise!

![](http://i.imgur.com/ytXDR4B.gif)

This is how our GraphQL data model looks like:

```graphql
type Post {
  description: String!
  imageUrl: String!
}
```

### 2. Configure app data endpoint

Open `src/app/client.ts` and paste your endpoint to the following line:

```js
const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/__PROJECT_ID__')
```

Open `src/app/feed.component.ts` and paste your endpoint to the following line:

```js
const wsClient = new Client('ws://subscriptions.graph.cool/__PROJECT_ID__', {
```


### 3. Run the example

You're done configuring the example application. Please run the following command and open [localhost:3000](http://localhost:3000) in your browser. Make sure to have two or more tabs open to see subscriptions in action. Have fun exploring! 🎉

```sh
npm install
npm start
```


## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
