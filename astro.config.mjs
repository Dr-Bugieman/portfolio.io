// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

// Detect build platform: Netlify vs GitHub Pages vs Local
const isNetlify = Boolean(process.env.NETLIFY);
const isGitHubPages = Boolean(process.env.GITHUB_ACTIONS) && !isNetlify;
const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isUserSite = githubRepository?.toLowerCase() === `${githubOwner?.toLowerCase()}.github.io`;
const githubPagesSite = githubOwner && githubRepository
  ? `https://${githubOwner}.github.io${isUserSite ? "" : `/${githubRepository}`}`
  : "https://portfolio.github.io";

// https://astro.build/config
export default defineConfig({
  site: isNetlify
    ? (process.env.URL || "https://portfolio.netlify.app")
    : isGitHubPages
      ? githubPagesSite
      : "http://localhost:4321",
  base: isGitHubPages && githubRepository && !isUserSite ? `/${githubRepository}/` : "/",
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["tui-portfolio-dev.tuiportfolio.orb.local", ".orb.local"],
    },
  },
});
