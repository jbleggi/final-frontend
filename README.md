# README

![Landing page](assets/landing.png)

## About
This application is intended for use in conjunction with a backend API for administrators of a monthly mail order Tea Subscription Service. In this app, administrators are able to view all subscriptions in their database, filter active only subscriptions, select specific subscriptions to see more info, and edit the status of a particular subscription. 

## Built With
This was built using React v19.0.0, React Router v7.2.0 , Vite v6.2.1, and tested using Cypress v14.1.0, all on a MacOS with Google Chrome as the browser.

## Getting Started
1. Use Terminal to select the intended directory for download.
2. `git clone git@github.com:jbleggi/final-frontend.git`
3. Open into the `final-frontend` directory 
4. Run `npm i` and `npm run dev` in your Terminal to install dependencies and connect to the local server
6. Navigate to `https://localhost:5173` on your preferred browser to view Tea Time!

## Testing
Cypress provides fast and reliable End-to-End testing, where the real-time interaction between the backend and frontend of an application is able to be inspected from a user standpoint.  

To run Cypress tests: `npx cypress open`. This command should launch the Cypress Test Runner in Chrome. 

## Challenges & Wins
The frontend of this project proved more challenging than I anticipated. Due to family constraints I was unable to dedicate the amount of time that I would have liked to delve deeper into React.  

That being said, I count this as a win. While it is decidedly not pretty, it *is* functional. I implemented a new feature, using a checkbox as a filter and edit tool. 

I look forward to being able to revisit this project to polish and debug! 

![Checkbox filter](assets/checkbox.png)
