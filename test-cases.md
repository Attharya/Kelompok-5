# Testing

## Test Case 1

**Input:**
Pilih menu = 1
Transaksi lain = Y

**Expected Output:**
"Saldo Anda: Rp 1000000"
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Actual Output:**
"Saldo Anda: Rp 1000000"
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Status:** PASS

---

## Test Case 2

**Input:**
Pilih menu = 2
Jumlah setoran = 800000
Transaksi lain = Y

**Expected Output:**
"Setor uang berhasil."
"Saldo Anda: Rp 1800000"
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Actual Output:**
"Setor uang berhasil."
"Saldo Anda: Rp 1800000"
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Status:** PASS

---

## Test Case 3

**Input:**
Pilih menu = 3
Jumlah penarikan = 300000
Transaksi lain = Y

**Expected Output:**
"Penarikan uang berhasil."
"Sisa Saldo Anda: Rp 1500000"
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Actual Output:**
"Penarikan uang berhasil."
"Sisa Saldo Anda: Rp 1500000"
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Status:** PASS

---

## Test Case 4

**Input:**
Pilih menu = 3
Jumlah penarikan = 2000000
Transaksi lain = Y

**Expected Output:**
"Saldo tidak mencukupi."
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Actual Output:**
"Saldo tidak mencukupi."
“Terima kasih telah menggunakan layanan ATM Sederhana.”

**Status:** PASS

---

## Test Case 5

**Input:**
Pilih menu = 2
Jumlah setoran = 0
Transaksi lain = Y

**Expected Output:**
"Jumlah setoran harus lebih dari 0."

**Actual Output:**
"Jumlah setoran harus lebih dari 0."

**Status:** PASS

---

## Test Case 6

**Input:**
Pilih menu = 3
Jumlah penarikan = 0
Transaksi lain = Y

**Expected Output:**
"Jumlah penarikan harus lebih dari 0."

**Actual Output:**
"Jumlah penarikan harus lebih dari 0."

**Status:** PASS

---

## Test Case 7

**Input:**
Pilih menu = 5
Transaksi lain = Y

**Expected Output:**
"Pilihan menu tidak valid."

**Actual Output:**
"Pilihan menu tidak valid."

**Status:** PASS

---

## Test Case 8

**Input:**
Pilih menu = 4

**Expected Output:**
"Terima kasih telah menggunakan ATM Sederhana."
"Saldo akhir Anda: Rp 1500000"

**Actual Output:**
"Terima kasih telah menggunakan ATM Sederhana."
"Saldo akhir Anda: Rp 1500000"

**Status:** PASS
