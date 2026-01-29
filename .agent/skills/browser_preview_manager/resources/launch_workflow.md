# App Launch Checklist

Follow these steps to ensure a clean application preview:

1. [ ] Check if `node_modules` exists. If not, run `npm install`.
2. [ ] Identify dev script in `package.json` (`dev`, `start`, `serve`).
3. [ ] Start the server in the background using `run_command`.
4. [ ] Wait for "Ready" or "Local URL" in terminal output.
5. [ ] Capture the exact URL (check for variations like `127.0.0.1` vs `localhost`).
6. [ ] Launch browser with the captured URL.
7. [ ] Confirm UI visibility by searching for the application title.
