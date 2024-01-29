# Flexhire Frontend Assignment

This repo contains an assignment for applying as a fullstack engineer at Flexhire.

It is a React application that shows the Profile of a Flexhire freelancer.

## Design goals

The redesign was based on the following desing goals:

- Fit all the relevant information in one page (in desktop).
- Use visual elements to allow a quick overview of the profile.
- Minimalistic design with the minimum amount of extra information besides the profile data itself.
- Usage of CSS grids as main layout primitive.

## Usage

To run locally in development server, run the following command:

`
npm start
`

**Important:** You need to disable CORS checking in the browser to use the development server.

To access the webpage you need to provide an API key as query parameter:

`
http://localhost:3000/?apiKey=an-api-key
`