# Weather App 🌦️

A simple weather application built with Vite and React, which fetches real-time weather data using a weather API.

## Features

- Displays real-time weather data (temperature, humidity, wind speed, etc.)
- Search for weather information by city
- Responsive design for mobile and desktop devices
- Built with Vite for fast and efficient development

## Demo

[Link to deployed app on Vercel](https://weather-app-alpha-ten-10.vercel.app/)

## Tech Stack

- **Frontend**: Vite, React, HTML, CSS, JavaScript
- **API**: [Weather API](https://openweathermap.org/current) 

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:
- Node.js (version v20.17.0 or above)
- npm (version 10.8.2 or above) 

### Installation

1. **Fork the repository**:
    - Click the **Fork** button at the top of this repository to create a copy of the project under your GitHub account.

2. **Clone your forked repository**:
    ```bash
    git clone https://github.com/your-username/your-weather-app.git
    ```

3. Navigate into the project directory:
    ```bash
    cd your-weather-app
    ```

4. Install dependencies:
    ```bash
    npm install
    ```

5. Create a `.env` file in the root of the project and add your weather API key:
    ```env
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

6. Start the development server:
    ```bash
    npm run dev
    ```

7. Once the development server is running, open your browser and navigate to the local development URL displayed in your terminal (e.g., `http://localhost:5173` or a different port).


### Deployment

To deploy the project on Vercel:
1. Push your code to a GitHub repository.
2. Connect your repository to Vercel.
3. Set your environment variable (e.g., `VITE_WEATHER_API_KEY`) in the Vercel dashboard.
4. Deploy the app.

## Usage

- Enter the name of a city in the search bar to get the current weather information.
- The app will display temperature, weather conditions, and other relevant data.

## Screenshots

![image](https://github.com/user-attachments/assets/6bf92383-4801-43fc-b4e0-bd35bca2992d)


## Contributing

1. Fork the repository (see the "Getting Started" section).
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

