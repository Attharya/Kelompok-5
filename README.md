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

![Demo Running ATM]()

## 2. Project Title
- SIMPLE ATM SIMULATOR
---

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

## 🧪 Test Cases

| Test Case | Scenario | Input | Expected Output | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Check Initial Balance | Option `1` | `Saldo Anda: Rp 1000000` | **PASS** |
| **TC-02** | Valid Deposit | Option `2`, Deposit `700000` | Setoran berhasil! Saldo sekarang: `Rp 1700000` | **PASS** |
| **TC-03** | Valid Withdrawal | Option `3`, Withdrawal `200000` | Penarikan berhasil! Sisa saldo: `Rp 1500000` | **PASS** |
| **TC-04** | Insufficient Balance | Option `3`, Withdrawal `2000000` | `Saldo tidak mencukupi!` | **PASS** |
| **TC-05** | Invalid Deposit ($\le 0$) | Option `2`, Deposit `0` | `Jumlah setoran tidak valid!` | **PASS** |
| **TC-06** | Invalid Withdrawal ($\le 0$) | Option `3`, Withdrawal `0` | `Jumlah penarikan tidak valid!` | **PASS** |
| **TC-07** | Invalid Menu Option | Option `5` | `Pilihan tidak tersedia!` | **PASS** |
| **TC-08** | Exit Program | Option `4` | Terima kasih! Saldo akhir Anda: `Rp 1500000` | **PASS** |

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

