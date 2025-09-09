const Log = require("./log");

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMjM0MWEwNWExQGdtcml0LmVkdS5pbiIsImV4cCI6MTc1NzQwMTQzMiwiaWF0IjoxNzU3NDAwNTMyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZGZkOTcwNTYtMTMwNS00YzY5LWI5NDUtZDM3ZDNmYTk3ZTMzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFkYXNpIGdheWF0aHJpIiwic3ViIjoiYTcxZWVkY2QtMzFhYy00YzRiLWEwYjQtYjk0ZGI4YjZmYjAzIn0sImVtYWlsIjoiMjIzNDFhMDVhMUBnbXJpdC5lZHUuaW4iLCJuYW1lIjoibWFkYXNpIGdheWF0aHJpIiwicm9sbE5vIjoiMjIzNDFhMDVhMSIsImFjY2Vzc0NvZGUiOiJlZXRoTmUiLCJjbGllbnRJRCI6ImE3MWVlZGNkLTMxYWMtNGM0Yi1hMGI0LWI5NGRiOGI2ZmIwMyIsImNsaWVudFNlY3JldCI6InpYeFZCWXB4UXJyWEFyaFUifQ.Ehop4SyICtNH3uJVFJ44QH_GkbgbxSoxLAvIjZgnKGs"
async function run() {
  await Log("frontend", "info", "component", "Component mounted successfully", token);
  await Log("frontend", "error", "state", "State update failed due to invalid data", token);
  await Log("frontend", "debug", "hook", "useEffect executed with dependency []", token);
}

run();
