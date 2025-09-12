# ☕ Day 15 — Coffee Machine

**Objective:** Simulate a coffee machine to practice control flow, functions, and basic data structures.

---

## 🛠️ Tools & Skills
- Functions, loops, conditionals
- Dictionaries for menu/resources
- Input validation and state updates

---

## 🚀 Project
```python
MENU = {
    "espresso": {"water": 50, "coffee": 18, "cost": 1.5},
    "latte":    {"water": 200, "milk": 150, "coffee": 24, "cost": 2.5},
    "cappuccino":{"water": 250, "milk": 100, "coffee": 24, "cost": 3.0},
}
resources = {"water": 300, "milk": 200, "coffee": 100, "money": 0.0}

def can_make(drink):
    for k, v in MENU[drink].items():
        if k == "cost": 
            continue
        if resources.get(k, 0) < v:
            return False, k
    return True, None

def make(drink):
    for k, v in MENU[drink].items():
        if k == "cost": 
            continue
        resources[k] -= v
    resources["money"] += MENU[drink]["cost"]

while True:
    choice = input("What would you like? (espresso/latte/cappuccino/off/report): ").strip().lower()
    if choice == "off":
        break
    if choice == "report":
        print(resources); continue
    if choice not in MENU:
        print("Invalid selection."); continue
    ok, missing = can_make(choice)
    if not ok:
        print(f"Sorry, not enough {missing}."); continue
    make(choice)
    print(f"Here is your {choice} ☕")
