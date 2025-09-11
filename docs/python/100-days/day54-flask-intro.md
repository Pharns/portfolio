
---

### `day54-flask-intro.md`


# 🌐 Day 54 — Flask Intro

**Objective:** Build a simple web app using Flask to understand backend basics.  

---

## 🛠️ Tools & Skills
- Flask web framework  
- Route creation and HTTP handling  
- Running local development servers  

---

## 🚀 Project
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run(debug=True)
```
