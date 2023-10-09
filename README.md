# ContactUsChallenge

This project was created with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5. It serves as a demonstration of a user contact form, whereby user information is mocked and displayed within the `/home` route upon form submission.

## Live Demo

Access the live demo of the project through the following link: [Contact Us Challenge](https://contact-us-challenge.netlify.app).

### Important Routes

- `/pricing`
- `/home`
- `/contact-us`

Upon submitting the contact form on the `/contact-us` route, a static (mocked) user will be created and displayed on the `/home` route.

## Deployment

Every push to the `main` branch triggers an automatic deployment to Netlify, ensuring that the [live demo](https://contact-us-challenge.netlify.app) always reflects the latest state of the project.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:
- [Node.js](https://nodejs.org/) (version 14.0.0 or later)
- [Angular CLI](https://angular.io/cli)

### Installation Steps

1. **Clone the repository:**
    ```shell
    git clone https://github.com/[YourUsername]/ContactUsChallenge.git
    cd ContactUsChallenge
    ```
   
2. **Install Dependencies:**
    ```shell
    npm install
    ```
   
3. **Start the Development Server:**
    ```shell
    ng serve
    ```
   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Development Commands

- **Generate Component:**
    ```shell
    ng generate component [component-name]
    ```
   Additional Angular scaffolding commands are available, such as generating services, directives, pipes, etc.
  
- **Build the Project:**
    ```shell
    ng build
    ```
   The build artifacts will be stored in the `dist/` directory.

- **Run Unit Tests:**
    ```shell
    ng test
    ```
   Execute unit tests via [Karma](https://karma-runner.github.io).
