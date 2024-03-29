export let BASE_URL =
  process.env.NODE_ENV === "development" ? "/api" : process.env.BASE_URL;

// Update the production URL
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://rorito-backend.onrender.com";
}
