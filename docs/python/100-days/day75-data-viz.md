
---

### `day75-data-viz.md`

# 📈 Day 75 — Data Visualization

**Objective:** Create meaningful plots and charts from datasets using Python.  

---

## 🛠️ Tools & Skills
- `pandas` for data prep  
- `matplotlib` for visualization  
- Building **graphs for storytelling** in security and data projects  

---

## 🚀 Project
```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("network_logs.csv")
data["source"].value_counts().head(10).plot(kind="bar")

plt.title("Top 10 Source IPs in Logs")
plt.xlabel("Source IP")
plt.ylabel("Count")
plt.show()

```
---
**🔗 Navigation:**  
[⬅️ Day 54 — Flask Intro](day54-flask-intro.md) | [🏠 Home](../index.md)

