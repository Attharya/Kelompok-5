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
## 3. Project Description
- This program is a simple ATM simulator in which the user can check their balance, deposit money, withdraw money, and exit the program. 
---
## 4. Objectives
This project is designed to apply the following programming concepts:
- **Language:** JavaScript (Node.js runtime environment)
- **Built-in Modules:** `readline` module for standard input/output handling
- **Variables & Scope:** State management using dynamic variable assignment (`let saldo`)
- **Data Types:** 
  - `Number` for financial amounts and balance calculations
  - `String` for user choice handling and formatted outputs
- **Operators:**
  - **Arithmetic:** `+` and `-` for updating account balances
  - **Comparison:** `<=`, `>`, `===`, and `!==` for input validation and branching logic
  - **Logical:** `||` for multi-condition input checks
- **Conditional Statements:** `switch` block for menu routing and `if/else` checks for transaction limits
- **Algorithms & Methods:**
  - `Intl.NumberFormat` for standard IDR currency formatting
  - `isNaN()` and mathematical comparison for input integrity verification
  - Asynchronous recursive functions (`menu()`, `keluar()`) for program loop management
---
## 5. Input
The program receives:
- **Menu Selection:** Option `1`, `2`, `3`, or `4` chosen by the user.
- **Setoran (Deposit):** Numeric monetary value to add to balance.
- **Penarikan (Withdrawal):** Numeric monetary value to deduct from balance.
- **Navigation Choice:** Option `1` (Return to Menu) or `2` (Exit) post-transaction.
---
## 6. Process
**The program processes user actions using conditional structures and balance tracking logic.
If the menu choice is:**
- **Option 1 (Cek Saldo)** → the program formats and displays the current account balance
- **Option 2 (Setor Uang)** → the program checks if the deposit amount is greater than 0:
  - Valid amount → the program adds the setoran to the balance (`saldo + jumlah`) and updates the total
  - Invalid amount ($\le 0$ or non-numeric) → the program displays a "Jumlah setoran tidak valid!" message
- **Option 3 (Tarik Uang)** → the program verifies the withdrawal amount:
  - Valid amount ($\le \text{saldo}$) → the program deducts the penarikan from the balance (`saldo - jumlah`)
  - Exceeds balance ($\text{jumlah} > \text{saldo}$) → the program displays a "Saldo tidak mencukupi!" message
  - Invalid amount ($\le 0$ or non-numeric) → the program displays a "Jumlah penarikan tidak valid!" message
- **Option 4 (Keluar)** → the program terminates the application session
- **Invalid Option** → the program displays a "Pilihan tidak tersedia!" message
---
## 7. Output
**The program displays:**
- The main ATM transaction menu
- The current account balance formatted in Indonesian Rupiah (IDR)
- Real-time transaction confirmation messages (**"SETORAN BERHASIL"*, *"PENARIKAN"**)
- Error alerts and input validation feedback
- Navigation options to return to the main menu or exit
- The final account balance and card retrieval prompt upon completion
---
## 🧪 Test Cases

| Test Case | Scenario | Input | Expected Output | Status |
| :--- | :--- | :--- | :--- | :---: |
| **TC-01** | Check Initial Balance | Option `1` | `Rp 1.000.000` | **PASS** |
| **TC-02** | Valid Deposit | Option `2`, Deposit `500000` | Setoran Berhasil, Saldo terbaru: `Rp 1.500.000` | **PASS** |
| **TC-03** | Valid Withdrawal | Option `3`, Withdrawal `200000` | Penarikan Berhasil, Sisa saldo: `Rp 1.300.000` | **PASS** |
| **TC-04** | Insufficient Balance | Option `3`, Withdrawal `2000000` | `Saldo tidak mencukupi!` | **PASS** |
| **TC-05** | Invalid Deposit (<= 0) | Option `2`, Deposit `0` | `Jumlah setoran tidak valid!` | **PASS** |
| **TC-06** | Invalid Withdrawal (<= 0) | Option `3`, Withdrawal `0` | `Jumlah penarikan tidak valid!` | **PASS** |
| **TC-07** | Invalid Menu Option | Option `5` | `Pilihan tidak tersedia!` | **PASS** |
| **TC-08** | Exit Program | Option `4` | `TERIMA KASIH`, Final Balance summary | **PASS** |
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
(program.js) 
---
## 11. Testing
The program is tested using several test scenarios.
Testing documentation:
[test-cases.md](test-cases.md)

