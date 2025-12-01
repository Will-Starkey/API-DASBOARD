// Random dog image fetcher
async function getDogImage() {
  const dogOutput = document.getElementById("dog-output");

  try {
    // Show loading message
    dogOutput.textContent = "Loading...";

    // Fetch random dog image
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) {
      throw new Error("Failed to fetch dog image");
    }

    const data = await response.json();

    // Clear previous content
    dogOutput.innerHTML = "";

    // Create and append image element
    const img = document.createElement("img");
    img.src = data.message;
    img.alt = "A random dog";
    img.style.maxWidth = "100%";
    img.style.border = "2px solid #ccc";
    img.style.borderRadius = "8px";

    dogOutput.appendChild(img);
  } catch (error) {
    console.error(error);
    dogOutput.textContent = "Failed to load dog image. Please try again.";
  }
}

// Random cat image fetcher
async function getCatImage() {
  const catOutput = document.getElementById("cat-output");

  try {
    catOutput.textContent = "Loading...";

    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) {
      throw new Error("Failed to fetch cat image");
    }

    const data = await response.json();

    catOutput.innerHTML = "";

    const img = document.createElement("img");
    img.src = data[0].url;
    img.alt = "A random cat";
    img.style.maxWidth = "100%";
    img.style.border = "2px solid #ccc";
    img.style.borderRadius = "8px";

    catOutput.appendChild(img);
  } catch (error) {
    console.error(error);
    catOutput.textContent = "Failed to load cat image. Please try again.";
  }
}

// Weather information fetcher
async function getWeather() {
  const weatherOutput = document.getElementById("weather-output");

  try {
    weatherOutput.textContent = "Loading...";

    // Fetch weather data from Open-Meteo API
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true&temperature_unit=fahrenheit"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather information");
    }

    const data = await response.json();

    // Log the data to inspect the structure
    console.log(data);

    // Display weather information
    const temperature = data.current_weather.temperature || "N/A";
    const windspeed = data.current_weather.windspeed || "N/A";

    weatherOutput.innerHTML = `Temperature: ${temperature}°F, Windspeed: ${windspeed} mph`;
  } catch (error) {
    console.error(error);
    weatherOutput.textContent =
      "Failed to load weather information. Please try again.";
  }
}

// Currency exchange rates fetcher
async function getExchangeRates() {
  const currencyOutput = document.getElementById("currency-output");

  try {
    currencyOutput.textContent = "Loading...";

    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }

    const data = await response.json();

    currencyOutput.innerHTML = `1 USD = ${data.rates.EUR} EUR, ${data.rates.GBP} GBP`;
  } catch (error) {
    console.error(error);
    currencyOutput.textContent =
      "Failed to load exchange rates. Please try again.";
  }
}

// Trending movies fetcher
async function getMovies() {
  const moviesOutput = document.getElementById("movies-output");

  try {
    moviesOutput.textContent = "Loading...";

    // Fetch trending movies from The Movie Database API
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=51adbfe355f21ba04986e9e44073365e"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    // Display top 5 trending movies
    moviesOutput.innerHTML = "";
    data.results.slice(0, 5).forEach((movie) => {
      const p = document.createElement("p");
      p.textContent = `${movie.title} (${movie.release_date || "N/A"})`;
      moviesOutput.appendChild(p);
    });
  } catch (error) {
    console.error(error);
    moviesOutput.textContent = "Failed to load movies. Please try again.";
  }
}

// GitHub user fetcher
async function getGitHubUser() {
  const githubOutput = document.getElementById("github-output");

  try {
    githubOutput.textContent = "Loading...";

    const response = await fetch("https://api.github.com/users/octocat");
    if (!response.ok) {
      throw new Error("Failed to fetch GitHub user");
    }

    const data = await response.json();

    githubOutput.innerHTML = `Username: ${data.login}, Bio: ${data.bio}`;
  } catch (error) {
    console.error(error);
    githubOutput.textContent = "Failed to load GitHub user. Please try again.";
  }
}

// Random joke fetcher
async function getJoke() {
  const jokeOutput = document.getElementById("joke-output");

  try {
    jokeOutput.textContent = "Loading...";

    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();

    jokeOutput.innerHTML = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    console.error(error);
    jokeOutput.textContent = "Failed to load joke. Please try again.";
  }
}

// Public API information fetcher
async function getPublicApiInfo() {
  const publicApiOutput = document.getElementById("publicapi-output");

  try {
    publicApiOutput.textContent = "Loading...";

    // Fetch public API information from the GitHub repository
    const response = await fetch(
      "https://api.github.com/repos/public-apis/public-apis"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch public API information");
    }

    const data = await response.json();

    // Display repository information
    publicApiOutput.innerHTML = `Repository: ${data.full_name}, Description: ${data.description}, Stars: ${data.stargazers_count}`;
  } catch (error) {
    console.error(error);
    publicApiOutput.textContent =
      "Failed to load public API information. Please try again.";
  }
}
