# Github link

(https://github.com/chinna0425/event-management-reactjs-sprint-task.git)

# Live Link

(https://event-management-tas.netlify.app/login)

# Event Management React App

A modern event management web application built with React, Redux, and React Router. Users can sign up, log in, and discover recommended shows and upcoming events tailored for them.

## Features

- **Authentication:** Signup and login with local storage persistence.
- **Protected Routes:** Only authenticated users can access the main event dashboard.
- **Event Discovery:** Browse recommended and upcoming events with infinite scroll.
- **Responsive Design:** Mobile-friendly UI.
- **Redux State Management:** User authentication state is managed globally.
- **API Integration:** Fetches event data from a backend API.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```sh
npm install

Running the App

npm start

Open http://localhost:3000 in your browser.

###

Project Structure
src/components/ — Reusable UI components (Navbar, Hero, EventCard, Recommended, Upcoming)
src/Pages/ — Page-level components (Home, Login, Signup)
src/redux/ — Redux store and slices
src/routes/ — Route protection logic
public/ — Static assets and HTML template

###
Authentication
Signup stores user info in localStorage.
Login validates credentials against stored user.
Redux manages login/logout state.

###

Event Data
Recommended and upcoming events are fetched from a remote API.
Fallback images are used for event cards.
```
