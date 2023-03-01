/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "todoist-indigo": "#4445C4",
        "todoist-iron": "#EAEAEB",
        "todoist-blue-marguerite": "#746CC5",
        "todoist-boulder": "#747474",
      },
    },
  },
  plugins: [],
};
