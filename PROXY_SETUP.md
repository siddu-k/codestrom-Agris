# 🚀 Xiaomi API Proxy Setup Guide

## Quick Start (3 Methods)

### ✅ Method 1: Direct API Call (Easiest - Try First!)
The app now tries to call Xiaomi API directly. Just select "Xiaomi Official" and click Analyze!

**If you see CORS errors, use Method 2 or 3 below.**

---

### ✅ Method 2: Double-Click Start (Windows)
1. **Double-click** `start-proxy.bat` file
2. A black terminal window will open
3. Wait for message: "Local Proxy running at http://localhost:3001"
4. **Keep this window open** while using the app
5. Now select "Xiaomi Official" in the app

**To stop:** Close the terminal window or press `Ctrl+C`

---

### ✅ Method 3: Manual Terminal Start
1. Open terminal in this folder
2. Run:
   ```bash
   node local-proxy.js
   ```
3. Keep terminal open
4. Use the app with "Xiaomi Official" selected

---

## Why Do I Need a Proxy?

Xiaomi's API has **CORS restrictions** that prevent direct browser calls. The proxy:
- Runs on your computer (localhost:3001)
- Forwards requests to Xiaomi API
- Adds proper CORS headers
- Returns responses to the app

## Troubleshooting

### ❌ "node is not recognized"
**Install Node.js:**
1. Download from: https://nodejs.org/
2. Install and restart computer
3. Try again

### ❌ Proxy won't start / Port 3001 in use
Something else is using port 3001:
```bash
# Windows - Find and kill process on port 3001
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F
```

### ❌ Still not working?
**Use OpenRouter instead:**
- Select "OpenRouter (Mimo V2 Free)" in the dropdown
- Works without any proxy setup
- Same AI model, zero configuration!

---

## Auto-Start on Page Load?

**Unfortunately, browsers cannot auto-start Node.js servers for security reasons.**

**Alternatives:**
1. Keep proxy running in background all the time
2. Add `start-proxy.bat` to Windows Startup folder
3. Use OpenRouter (no proxy needed)

---

## Need Help?

- Check if proxy is running: Visit http://localhost:3001 (should show "Not Found")
- Check terminal for error messages
- Make sure `local-proxy.js` file exists
- Verify Node.js is installed: `node --version`
