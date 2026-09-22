# Testing

## Test Case 1

**Input:**
Pilih menu = 1

**Expected Output:**
"SALDO ANDA"
“Rp 1.000.000”

**Actual Output:**
"SALDO ANDA"
“Rp 1.000.000”

**Status:** PASS

---

## Test Case 2

**Input:**
Pilih menu = 2
Jumlah setoran = 800000

**Expected Output:**
“SETORAN BERHASIL”
"Saldo diterima: Rp 800.000"
“SALDO TERBARU Rp 1.800.000”

**Actual Output:**
“SETORAN BERHASIL”
"Saldo diterima: Rp 800.000"
“SALDO TERBARU Rp 1.800.000”

**Status:** PASS

---


## Test Case 3

**Input:**
Pilih menu = 3
Jumlah penarikan = 300000

**Expected Output:**
“PENARIKAN”
"Harap menunggu...
 Uang sedang keluar."
“Sisa saldo: Rp 1.500.000”

**Actual Output:**
“PENARIKAN”
"Harap menunggu...
 Uang sedang keluar."
“Sisa saldo: Rp 1.500.000”

**Status:** PASS

---

## Test Case 4

**Input:**
Pilih menu = 3
Jumlah penarikan = 2000000

**Expected Output:**
“Saldo tidak mencukupi!”
"Saldo Anda: Rp 1.500.000"

**Actual Output:**
“Saldo tidak mencukupi!”
"Saldo Anda: Rp 1.500.000"

**Status:** PASS

---

## Test Case 5

**Input:**
Pilih menu = 2
Jumlah setoran = 0

**Expected Output:**
“Jumlah setoran tidak valid!”

**Actual Output:**
“Jumlah setoran tidak valid!”

**Status:** PASS

---

## Test Case 6

**Input:**
Pilih menu = 3
Jumlah penarikan = 0

**Expected Output:**
“Jumlah penarikan tidak valid!”

**Actual Output:**
“Jumlah penarikan tidak valid!”

**Status:** PASS

---

## Test Case 7

**Input:**
Pilih menu = 5

**Expected Output:**
“Pilihan tidak tersedia!”

**Actual Output:**
“Pilihan tidak tersedia!”

**Status:** PASS

---

## Test Case 8

**Input:**
Pilih menu = 4

**Expected Output:**
“TERIMA KASIH”
"Saldo akhir Anda:"
"Rp 1.500.000"
“Silakan ambil kartu Anda.”

**Actual Output:**
“TERIMA KASIH”
"Saldo akhir Anda:"
"Rp 1.500.000"
“Silakan ambil kartu Anda.”

**Status:** PASS 

