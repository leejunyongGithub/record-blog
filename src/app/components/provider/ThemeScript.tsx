type Theme = "light" | "dark";

declare global {
  interface Window {
    __theme: Theme;
    __onThemeChange: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

function code() {
  window.__onThemeChange = function () {};

  function setTheme(newTheme: Theme) {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    
    window.__onThemeChange(newTheme);
  }

  // eslint-disable-next-line
  var preferredTheme;

  try {
    preferredTheme = localStorage.getItem("theme") as Theme;
    // eslint-disable-next-line
  } catch (err) {}

  window.__setPreferredTheme = function (newTheme: Theme) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
      // eslint-disable-next-line
    } catch (err) {}
  };

  // eslint-disable-next-line
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  
  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));

  
}

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;
}