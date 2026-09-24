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
![![GIF 1.gif]()])

## 3. Project Description
- This program is a simple ATM simulator in which the user can check their balance, deposit money, withdraw money, and exit the program. 
---

## 4. Objectives

This project is designed to apply the following programming concepts:

- **Language:** JavaScript (Browser / ECMAScript environment)
- **Built-in Functions:** `prompt()` and `alert()`, JavaScript's built-in browser functions for input and output. These are not custom-written functions, so they do not conflict with the "no function" rule in the assignment instructions.
- **Variables & Scope:** State management using dynamic variable assignment (`let saldo`, `let pilihan`, `let jumlah`, `let transaksi`)
- **Data Types:**
  - `Number` for financial amounts and balance calculations
  - `String` for user choice handling and raw inputs
- **Operators:**
  - Arithmetic: `+=` and `-=` for updating account balances
  - Comparison: `>`, `<=`, `===`, and `!==` for input validation and branching logic
  - Logical: `&&` to combine multiple conditions in one check
- **Control Flow & Conditional Statements:**
  - `do...while` loop for continuous interactive menu execution, repeating while the user has not chosen to exit and answers "Y" to continue
  - `if / else if / else` conditional statements for menu routing, and for validating that deposit/withdrawal amounts are greater than 0 and that withdrawals do not exceed the current balance
---

## 5. Input
The program receives:
- **Menu Selection:** Option `1`, `2`, `3`, or `4` chosen by the user via `prompt()`.
- **Setoran (Deposit):** A value entered when Option `2` is chosen, e.g. `800000`, added to the balance if greater than 0.
- **Penarikan (Withdrawal):** A value entered when Option `3` is chosen, e.g. `300000`, deducted from the balance if greater than 0 and not more than the current balance.
- **Lanjut Transaksi (Continue):** A `Y`/`N` answer asked after every transaction (except Option `4`), converted to uppercase before being checked. Answering `N` also ends the session, the same as choosing Option `4`.

> **Note:** amounts of `0` or below are rejected for both deposit and withdrawal. Text instead of a number is also rejected, since it fails the "greater than 0" check.
---

## 6. Process
The program processes user actions using conditional structures and balance tracking logic. If the menu choice is:
- **Option 1 (Cek Saldo)** → the program displays the current balance: `"Saldo Anda: Rp " + saldo`
- **Option 2 (Setor Uang)** → the program asks for the deposit amount:
  - Amount `> 0` → `saldo += jumlah`, then shows `"Setor uang berhasil.\nSaldo Anda: Rp " + saldo`
  - Amount `<= 0` (including 0, a negative number, or text that fails to convert to a number) → shows `"Jumlah setoran harus lebih dari 0."`
- **Option 3 (Tarik Uang)** → the program asks for the withdrawal amount:
  - Amount `> 0` and `<= saldo` → `saldo -= jumlah`, then shows `"Penarikan uang berhasil.\nSisa saldo Anda: Rp " + saldo`
  - Amount `<= 0` → shows `"Jumlah penarikan harus lebih dari 0."`
  - Amount `> saldo` → shows `"Saldo tidak mencukupi."`
- **Option 4 (Keluar)** → the program shows `"Terima kasih telah menggunakan ATM Sederhana.\nSaldo akhir Anda: Rp " + saldo` and ends the session.
- **Any other input (Invalid Option)** → the program shows `"Pilihan menu tidak valid."`

After every choice except Option `4`, the program asks whether the user wants to continue with another transaction (`Y`/`N`):
- Answer is `"Y"` → the loop repeats, back to the main menu.
- Answer is `"N"` → the program shows `"Transaksi selesai.\nSaldo akhir Anda: Rp " + saldo` and the session ends.
---

## 7. Output
The program displays:
- The main ATM transaction menu (`ATM SEDERHANA`) with options 1–4
- The current account balance with a `Rp` prefix, as a plain number (no thousands separator), e.g. `Rp 1500000`
- A one-line success message for deposits and withdrawals with the updated balance
- A rejection message when a deposit or withdrawal amount is 0, negative, or not a valid number
- A plain "Saldo tidak mencukupi." message when a withdrawal exceeds the balance, with no exclamation mark and no balance shown
- A "Pilihan menu tidak valid." message for an unrecognized menu option
- A closing message with the final balance, shown either when the user selects Option `4` or answers "N" to the continue prompt

---

![Demo Running](https://github.com/Attharya/Kelompok-5/blob/main/GIF%202%20(3).gif?raw=true)

---

## 8. Algorithm

The algorithm used in the program is described in:

[pseudocode.txt](pseudocode.txt)

---

## 9. Flowchart

The flowchart is created using Flowgorithm:

[ATM_sederhana.fprg](ATM_sederhana.fprg)

---

## 10. JavaScript Implementation

The JavaScript implementation of the program is available in:

[program.js](program.js)

---

## 11. Testing

The program is tested using several test scenarios.

Testing documentation:

[test-cases.md](test-cases.md)
