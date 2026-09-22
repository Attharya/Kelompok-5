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
- **Language:** JavaScript (Browser / ECMAScript environment)
- **Built-in Functions:** `prompt()` and `alert()` for standard user input/output handling
- **Variables & Scope:** State management using dynamic variable assignment (`let saldo`, `let pilihan`, `let jumlah`, `let transaksi`)
- **Data Types:**
  - `Number` for financial amounts and balance calculations
  - `String` for user choice handling and raw inputs
- **Operators:**
  - Arithmetic: `+=` and `-=` for updating account balances
  - Comparison: `<=`, `===`, and `!==` for input validation and branching logic
  - Logical: `&&` to combine the loop's exit conditions
- **Control Flow & Conditional Statements:**
  - `do...while` loop for continuous interactive menu execution, repeating while the user has not chosen to exit and answers "Y" to continue
  - `if / else if` conditional statements for menu routing
- **Algorithms & Methods:**
  - `Number()` conversion for turning prompt input into a numeric value
  - String concatenation with `\n` for multi-line alert messages
---

## 5. Input
The program receives:
- **Menu Selection:** Option `1`, `2`, `3`, or `4` chosen by the user via `prompt()`.
- **Setoran (Deposit):** A value entered when Option `2` is chosen, added to the balance.
- **Penarikan (Withdrawal):** A value entered when Option `3` is chosen, deducted from the balance.
- **Lanjut Transaksi (Continue):** A `Y`/`N` answer asked after every transaction (except Option `4`), converted to uppercase before being checked.

> **Note:** the program does not validate these inputs. A deposit or withdrawal of `0`, a negative number, or text instead of a number is accepted the same way as any other value — see Option 2 and Option 3 below.
---

## 6. Process
The program processes user actions using conditional structures and balance tracking logic. If the menu choice is:
- **Option 1 (Cek Saldo)** → the program displays the current balance: `"Saldo Anda: Rp " + saldo`
- **Option 2 (Setor Uang)** → the program asks for the deposit amount and always adds it to the balance, with no validation:
  - `saldo += jumlah`, then shows `"Setor uang berhasil.\nSaldo Anda: Rp " + saldo`
  - There is currently no check for an amount of `0`, a negative amount, or non-numeric text. All of these are still treated as a successful deposit. If the user types text instead of a number, the balance becomes invalid and stays broken for the rest of the session — every later transaction is affected too, until the program is closed and started over.
- **Option 3 (Tarik Uang)** → the program asks for the withdrawal amount and checks it against the balance:
  - Amount `<= saldo` → `saldo -= jumlah`, then shows `"Penarikan uang berhasil.\nSisa Saldo Anda: Rp " + saldo`
  - Amount `> saldo` → shows `"Saldo tidak mencukupi."`
  - There is no separate check for an amount of `0` or a negative amount. A negative withdrawal amount still satisfies `jumlah <= saldo`, so it is treated as a valid withdrawal — and because subtracting a negative number is the same as adding it, the balance *increases* instead of decreasing.
- **Option 4 (Keluar)** → the program shows `"Terima kasih telah menggunakan ATM Sederhana."` and, based on the loop condition, ends the session. The final balance is **not** shown in this message.
- **Any other input (Invalid Option)** → the program does not display any message. Execution simply falls through to the "continue transaction?" prompt below.

After every choice except Option `4`, the program asks: *"Terima kasih telah menggunakan layanan ATM Sederhana.\nApakah Anda ingin melakukan transaksi lain? (Y/N)"*. The loop continues only if the answer (uppercased) is `"Y"` **and** the previous menu choice was not `"4"`.
---

## 7. Output
The program displays:
- The main ATM transaction menu (`ATM SEDERHANA`) with options 1–4
- The current account balance with a `Rp` prefix, as a plain number (no thousands separator), e.g. `Rp 1500000`
- A one-line success message for deposits and withdrawals with the updated balance
- A plain "Saldo tidak mencukupi." message when a withdrawal exceeds the balance, with no exclamation mark and no balance shown
- A thank-you message on exit, with **no final balance shown**
- No message at all for an unrecognized menu option
- If text is entered instead of a number, the balance becomes invalid and every balance shown afterward is affected, until the program is restarted
---

![Demo Running](https://github.com/Attharya/Kelompok-5/blob/main/GIF%202%20(1).gif?raw=true)

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

