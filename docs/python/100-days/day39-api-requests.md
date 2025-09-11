
---

### `day39-api-requests.md`


# 🌐 Day 39 — API Requests

**Objective:** Work with external APIs securely using Python’s `requests` library.  

---

## 🛠️ Tools & Skills
- Python `requests` for HTTP calls  
- JSON parsing and response handling  
- Awareness of **API security** (rate limiting, authentication)  

---

## 🚀 Project

```python
import requests

url = "https://api.open-meteo.com/v1/forecast"
params = {"latitude": 33.7, "longitude": -117.2, "hourly": "temperature_2m"}

response = requests.get(url, params=params)
data = response.json()

print(data["hourly"]["temperature_2m"][:5])
```

---
**🔗 Navigation:**  
[⬅️ Day 25 — Pandas & CSVs](day25-pandas-csvs.md) | [🏠 Home](../index.md) | [➡️ Day 54 — Flask Intro](day54-flask-intro.md)

