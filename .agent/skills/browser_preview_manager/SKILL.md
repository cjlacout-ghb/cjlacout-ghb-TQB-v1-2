---
name: browser_preview_manager
description: Logic and best practices for orchestrating the developer workflow of starting a local server and launching a browser preview.
---

# Browser Preview Manager Skill

This skill provides the logic and sequence for reliably launching and verifying a web application in the local development environment.

## 1. Orchestration Workflow

The launch process follows a strict 4-step sequence:

1.  **Environment Discovery**: 
    - Verify presence of `package.json`.
    - Identify the development script (usually `npm run dev`, `npm run start`, or `vite`).
2.  **Server Initiation**:
    - Run the identified dev command in the background.
    - Set a generous wait time (e.g., 5-10 seconds) to allow for bundling/compilation.
3.  **URL Extraction & Probing**:
    - Scrutinize terminal output for the local URL (e.g., `http://localhost:3000`).
    - Handle port conflicts: If the target port is busy, identify the new port assigned by the framework.
4.  **Browser Verification**:
    - Launch the extracted URL using the `open_browser_url` tool.
    - Verify success by checking the DOM for a primary title or a known app element.

## 2. Logic & Best Practices

### Port Management
- **Rule**: Never assume a port is fixed (like 3000). Always read the console output to confirm where the server actually started.
- **Rule**: If a command fails due to "Port in use", attempt to kill the process on that port or let the framework auto-assign a new one.

### Verification Criteria
- A "successful" launch is not just a 200 OK, but seeing the intended content. 
- **Best Practice**: Wait for specific selectors like `#root`, `h1`, or `.app-container` to ensure hydration is complete.

### Error Handling
- **Zombie Processes**: If restarts fail, identify and terminate lingering node processes.
- **Hydration Errors**: Monitor browser logs for "Hydration failed" or "ReferenceError" during initial load.

## 3. Implementation Patterns

- **Wait Strategies**: Use exponential backoff or simple polling when checking for the dev server's availability.
- **Terminal Monitoring**: Use `command_status` periodically to check for warnings/errors during the boot process.

---

## Resources

- [launch_workflow.md](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/browser_preview_manager/resources/launch_workflow.md): Step-by-step checklist for the agent.
- [port_utils.ps1](file:///d:/CJL_temporal/_Apps/TQB/TQB_v1-1-0/.agent/skills/browser_preview_manager/scripts/port_utils.ps1): PowerShell script to find and free ports.
