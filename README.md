Kelompok 5
# Mini Programming Project
## 1. Group Information
**Class:** A

**Group:** 5
### Group Members
| No. | Name | Student ID | Role |
|---|---|---|---|
| 1 | Attaya Naufal Keandra| 2610312016 | Project Coordinator |
| 2 | Salwa Zalfa Mufidah | 2610312015 | Algorithm |
| 3 | Felicia Grace Zefanya Usmany | 2610312012 | Flowchart |
| 4 | Attharya Abimanyu | 2610312001 | JavaScript |
| 5 | Arinta Kalyca Atinnaputri | 2210312026 | Testing & Documentation |
---

## 2. Project Title
- SIMPLE ATM SIMULATOR
---
![Demo Running ATM](https://github.com/Attharya/Kelompok-5/blob/5fa5649720652f0ba2b5d93127cf3144bbb35aa6/gif%20file.gif)

## 3. Project Description
- This program is a simple ATM simulator in which the user can check their balance, deposit money, withdraw money, and exit the program. 
---

## 4. Objectives
This project is designed to apply the following programming concepts:
* **Language:** JavaScript (Browser / ECMAScript environment)
* **Built-in Functions:** `prompt()` and `alert()` for standard user input/output handling
* **Variables & Scope:** State management using dynamic variable assignment (`let saldo`, `let pilihan`)
* **Data Types:**
  * `Number` for financial amounts and balance calculations
  * `String` for user choice handling and raw inputs
* **Operators:**
  * Arithmetic: `+` and `-` for updating account balances
  * Comparison: `<=`, `>`, `===`, and `!==` for input validation and branching logic
  * Logical: `||` for multi-condition input checks
* **Control Flow & Conditional Statements:**
  * `do...while` loop for continuous interactive menu execution
  * `if / else if / else` conditional statements for menu routing and transaction limits
* **Algorithms & Methods:**
  * `Number()` conversion and `isNaN()` for input integrity verification
  * String concatenation for formatted message output
---

## 5. Input
The program receives:
* **Menu Selection:** Option `1`, `2`, `3`, or `4` chosen by the user.
* **Setoran (Deposit):** Numeric monetary value to add to balance.
* **Penarikan (Withdrawal):** Numeric monetary value to deduct from balance.
---

## 6. Process
The program processes user actions using conditional structures and balance tracking logic. If the menu choice is:
* **Option 1 (Cek Saldo)** $\rightarrow$ the program displays the current account balance (`"Saldo Anda: Rp " + saldo`)
* **Option 2 (Setor Uang)** $\rightarrow$ the program checks if the deposit amount is greater than 0:
  * Valid amount $\rightarrow$ the program adds the setoran to the balance (`saldo = saldo + jumlah`) and updates the total
  * Invalid amount ($\le 0$ or non-numeric) $\rightarrow$ the program displays a "Jumlah setoran tidak valid!" message
* **Option 3 (Tarik Uang)** $\rightarrow$ the program verifies the withdrawal amount:
  * Valid amount ($\le$ saldo) $\rightarrow$ the program deducts the penarikan from the balance (`saldo = saldo - jumlah`)
  * Exceeds balance (jumlah $>$ saldo) $\rightarrow$ the program displays a "Saldo tidak mencukupi!" message
  * Invalid amount ($\le 0$ or non-numeric) $\rightarrow$ the program displays a "Jumlah penarikan tidak valid!" message
* **Option 4 (Keluar)** $\rightarrow$ the program displays the final balance and terminates the application loop (`pilihan !== "4"`)
* **Invalid Option** $\rightarrow$ the program displays a "Pilihan tidak tersedia!" message
---

## 7. Output
The program displays:
* The main ATM transaction menu (`ATM SEDERHANA`)
* The current account balance formatted with currency prefix (`Rp`)
* Transaction success dialogs with updated balance figures
* Error alerts for invalid inputs and insufficient balance
* Final account balance and exit message upon completion
---

![Demo Running](https://github.com/Attharya/Kelompok-5/blob/b446633d49370e470ec727100f0d50b2c049ac42/GIF%202.gif)

---

## 8. Algorithm
The algorithm used in the program is described in:
`pseudocode.txt`
---
## 9. Flowchart
The flowchart is created using Flowgorithm.
File: `flowchart.fprg`
---
## 10. JavaScript Implementation
The JavaScript implementation of the program is available in:
[program.js](program.js) 
---
## 11. Testing
The program is tested using several test scenarios.
Testing documentation:
[test-cases.md](test-cases.md)

