let saldo = 1000000;
let pilihan;
let transaksi;

do {
    pilihan = prompt(
        "========================\n" +
        "       ATM SEDERHANA\n" +
        "========================\n" +
        "1. Cek Saldo\n" +
        "2. Setor Uang\n" +
        "3. Tarik Uang\n" +
        "4. Keluar\n" +
        "========================\n" +
        "Pilih menu:"
    );

    if (pilihan === "1") {
        alert(
            "Saldo Anda: Rp " + saldo
        );
    }

    else if (pilihan === "2") {
        let jumlah = Number(
            prompt("Masukkan jumlah uang yang ingin disetor:")
        );

        if (jumlah > 0) {
            saldo += jumlah;

            alert(
                "Setor uang berhasil.\n" +
                "Saldo Anda: Rp " + saldo
            );
        }

        else {
            alert(
                "Jumlah setoran harus lebih dari 0."
            );
        }
    }

    else if (pilihan === "3") {
        let jumlah = Number(
            prompt("Masukkan jumlah uang yang ingin ditarik:")
        );

        if (jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah;

            alert(
                "Penarikan uang berhasil.\n" +
                "Sisa saldo Anda: Rp " + saldo
            );
        }

        else if (jumlah <= 0) {
            alert(
                "Jumlah penarikan harus lebih dari 0."
            );
        }

        else {
            alert(
                "Saldo tidak mencukupi."
            );
        }
    }

    else if (pilihan === "4") {
        alert(
            "Terima kasih telah menggunakan ATM Sederhana.\n" +
            "Saldo akhir Anda: Rp " + saldo
        );
    }

    else {
        alert(
            "Pilihan menu tidak valid."
        );
    }

    if (pilihan !== "4") {
        transaksi = prompt(
            "========================\n" +
            "Terima kasih telah menggunakan\n" +
            "layanan ATM Sederhana.\n" +
            "========================\n" +
            "Apakah Anda ingin melakukan transaksi lain?\n" +
            "(Y/N)"
        );

        transaksi = transaksi.toUpperCase();

        if (transaksi === "N") {
            alert(
                "Transaksi selesai.\n" +
                "Saldo akhir Anda: Rp " + saldo
            );
        }
    }

} while (pilihan !== "4" && transaksi === "Y");
