# Appointment Booking System

A modern web application built with React for managing and booking appointments efficiently. This system provides an intuitive interface for users to schedule, view, and manage appointments.

## Features

- 📅 Calendar View for appointment scheduling
- 📝 Booking form with user-friendly interface
- 📋 Appointment list display
- 🎨 Material-UI components for modern design
- 📱 Responsive layout for all devices

## Tech Stack

- **Frontend Framework:** React
- **UI Library:** Material-UI (@mui/material)
- **HTTP Client:** Axios
- **Testing Framework:** Jest with React Testing Library

## Local Development Setup

### Prerequisites

1. **Node.js Installation**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - Recommended version: Latest LTS (Long Term Support)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Code Editor**
   - Install Visual Studio Code or your preferred code editor
   - Recommended VS Code extensions:
     - ESLint
     - Prettier
     - React Developer Tools

### Setting up the Project

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd appointment-booking/frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory:
     ```bash
     cp .env.example .env
     ```
   - Update the API endpoint in `.env` if needed:
     ```
     REACT_APP_API_URL=http://localhost:3001
     ```

4. **Start Development Server**
   ```bash
   npm start
   ```
   - The application will open at [http://localhost:3000](http://localhost:3000)
   - The page will automatically reload when you make changes
   - Any lint errors will appear in the console

5. **Running Tests**
   ```bash
   npm test
   ```

### Common Issues and Solutions

1. **Port 3000 Already in Use**
   - Either stop the process using port 3000 or
   - Use a different port:
     ```bash
     set PORT=3001 && npm start
     ```

2. **Node Modules Issues**
   - If you encounter dependency issues:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── components/
    │   ├── AppointmentLists.js
    │   ├── BookingForm.js
    │   └── CalenderView.js
    ├── api.js
    ├── App.js
    ├── App.css
    └── index.js
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Dependencies

Major dependencies used in this project:

- React v19.2.0
- Material-UI v7.3.5
- Axios v1.13.2
- React Testing Library v16.3.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
