let saldo = 1000000;
let pilihan;

do {
    pilihan = prompt(
        "==============================\n" +
        "       ATM SEDERHANA\n" +
        "==============================\n" +
        "1. Cek Saldo\n" +
        "2. Setor Uang\n" +
        "3. Tarik Uang\n" +
        "4. Keluar\n" +
        "==============================\n" +
        "Pilih menu: "
    );

    if (pilihan === "1") {
        alert("Saldo Anda: Rp " + saldo);
    }

    else if (pilihan === "2") {
        let jumlah = Number(
            prompt("Masukkan jumlah uang yang ingin disetor: ")
        );

        if (jumlah <= 0 || isNaN(jumlah)) {
            alert("Jumlah setoran tidak valid!");
        } else {
            saldo = saldo + jumlah;
            alert(
                "Setoran berhasil!\n" +
                "Jumlah setoran: Rp " + jumlah + "\n" +
                "Saldo sekarang: Rp " + saldo
            );
        }
    }

    else if (pilihan === "3") {
        let jumlah = Number(
            prompt("Masukkan jumlah uang yang ingin ditarik: ")
        );

        if (jumlah <= 0 || isNaN(jumlah)) {
            alert("Jumlah penarikan tidak valid!");
        }
        else if (jumlah > saldo) {
            alert(
                "Saldo tidak mencukupi!\n" +
                "Saldo Anda: Rp " + saldo
            );
        }
        else {
            saldo = saldo - jumlah;
            alert(
                "Penarikan berhasil!\n" +
                "Jumlah penarikan: Rp " + jumlah + "\n" +
                "Sisa saldo: Rp " + saldo
            );
        }
    }

    else if (pilihan === "4") {
        alert(
            "Terima kasih!\n" +
            "Saldo akhir Anda: Rp " + saldo
        );
    }

    else {
        alert("Pilihan tidak tersedia!");
    }

} while (pilihan !== "4");
