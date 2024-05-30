# FoodShareHub

FoodShareHub is a Community Food Sharing and Surplus Reduction Platform. This platform aims to connect food donors with those in need, helping to reduce food waste and hunger in the community. The project involves a full stack implementation using React, Firebase, Node.js, and MongoDB.



## Features

1. **Responsive Design**: The website is mobile, tablet, and desktop responsive.
2. **Protected Routes**: Certain routes are private and require user authentication.
3. **Dynamic Title**: The website title changes according to the route.
4. **Food Donation**: Users can add, view, update, and delete food donations.
5. **Search and Sort**: Implemented search functionality by food name and sorting by expiration date.
6. **Food Requests**: Users can request food, and the status is updated accordingly.
7. **User Authentication**: Login and registration with Email/Password, Google, and GitHub.
8. **Notifications**: Relevant toasts and notifications for all CRUD operations.
9. **404 Page**: Custom 404 page with a Back to Home button.

## Layout and Key Rules

- Navbar and footer are present on all pages except the 404-page.
- Environment variables are used to hide Firebase config keys and MongoDB credentials.
- The homepage features a banner, featured foods, and extra sections.
- Git commits: Minimum 18 on the client-side and 8 on the server-side.
- Separate readme files for client-side and server-side.

## Packages Used

- `react`
- `firebase`
- `mongodb`
- `express`
- `react-icons`
- `@tanstack/react-query`
- `aos`
- `axios`
- `framer-motion`
- `react-helmet-async`
- `react-hook-form`
- `react-tooltip`
- `react-toastify`
- `react-simple-typewriter`
- `sweetalert2`
- `swiper`
- `@tanstack/react-query-devtools`

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Porgramming-Hero-web-course/b9a11-client-side-Oishee90
    ```

2. Navigate to the project directory:
    ```bash
    cd foodsharehub
    ```

3. Install client-side dependencies:
    ```bash
    cd client
    npm install
    ```

4. Install server-side dependencies:
    ```bash
    cd ../server
    npm install
    ```

5. Set up environment variables:
    - Create a `.env` file in the root of the `client` and `server` directories.
    - Add your Firebase config keys and MongoDB credentials to the `.env` files.

6. Run the application:
    - Start the server:
        ```bash
        npm start
        ```
    - Start the client:
        ```bash
        cd ../client
        npm start
        ```

## Usage

- **Home Page**: View the banner, featured foods, and additional sections.
- **Available Foods**: Search and sort available foods. View details and make requests.
- **Add Food**: Add new food donations (private route).
- **Manage My Foods**: Update or delete your added foods (private route).
- **My Food Request**: View your food requests (private route).
- **Authentication**: Login and register using Email/Password, Google, or GitHub.

## Challenges Implemented

1. **Layout Change**: Toggle between three-column and two-column layouts on the Available Foods page.
2. **TanStack Query**: Implemented TanStack Query for fetching API data and utilizing the mutation feature.

## Live Demo

Check out the live demo of FoodShareHub [here](https://foodking-website.web.app).

---

Thank you for checking out FoodShareHub! We hope this platform helps to make a positive impact on food sharing and surplus reduction in our community.
