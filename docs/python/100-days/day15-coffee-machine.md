
---

### `day05-password-generator.md`  

# 🔑 Day 05 — Password Generator

**Objective:** Create a secure password generator in Python.  

---

## 🛠️ Tools & Skills
- Python `random` and `string` modules  
- Function design for reusability  
- Security focus on entropy and complexity  

---

## 🚀 Project
```python
import random
import string

def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

print(generate_password())
```
---
**🔗 Navigation:**  
[⬅️ Day 05 — Password Generator](day05-password-generator.md) | [🏠 Home](../index.md) | [➡️ Day 25 — Pandas & CSVs](day25-pandas-csvs.md)
