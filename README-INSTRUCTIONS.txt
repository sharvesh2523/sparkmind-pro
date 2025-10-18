SPARKMIND PRO - SETUP AND RUN INSTRUCTIONS
==========================================

ERROR DETECTED: Node.js is not installed on your system.

To fix this issue and run the project, please follow these steps:

1. INSTALL NODE.JS
   ----------------
   a. Visit: https://nodejs.org/en/download/prebuilt-installer
   b. Download the Windows Installer (.msi) for your system
   c. Run the installer and follow the setup instructions
   d. Restart your computer after installation

2. VERIFY INSTALLATION
   --------------------
   Open a new terminal/command prompt and run:
   - node --version
   - npm --version

   You should see version numbers for both commands.

3. INSTALL PROJECT DEPENDENCIES
   -----------------------------
   In the project directory, run:
   npm install

4. START THE DEVELOPMENT SERVER
   -----------------------------
   After installing dependencies, run:
   npm run dev

   The application will be available at: http://localhost:5173

ALTERNATIVE: USING BUN (Optional)
---------------------------------
This project also includes a bun.lockb file, suggesting you could use Bun instead:

1. Install Bun from: https://bun.sh/
2. Run: bun install
3. Run: bun run dev

CONTACT SUPPORT
---------------
If you continue to experience issues, please contact support with:
- Screenshots of any error messages
- Your operating system version
- Node.js version (if installed)