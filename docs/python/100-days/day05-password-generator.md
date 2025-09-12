# 🔑 Day 05 — Password Generator

**Objective:** Create a secure password generator in Python.

---

## 🛠️ Tools & Skills
- Python `secrets` and `string` modules
- Function design for reusability
- Security focus on entropy and complexity

---

## 🚀 Project
```python
import string, secrets

def generate_password(length=12):
    alphabet = string.ascii_letters + string.digits + string.punctuation
    return ''.join(secrets.choice(alphabet) for _ in range(length))

print(generate_password())
