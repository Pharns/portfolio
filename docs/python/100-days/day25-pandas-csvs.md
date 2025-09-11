# 📊 Day 25 — Pandas & CSVs

**Objective:** Learn how to use Python’s **pandas** library to manipulate and analyze data from CSV files.  

---

## 🛠️ Tools & Skills
- Python `pandas` for data manipulation  
- File I/O with `.csv` files  
- Data cleaning and filtering techniques  

---

## 🚀 Project
```python
import pandas as pd

data = pd.read_csv("weather_data.csv")
print(data.head())

# Calculate average temperature
avg_temp = data["temp"].mean()
print(f"Average Temp: {avg_temp}")
```
