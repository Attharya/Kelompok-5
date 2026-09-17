const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000000;

// Fungsi format Rupiah
function rupiah(angka) {
    return new Intl.NumberFormat("id-ID").format(angka);
}

// Menampilkan menu utama
function menu() {
    console.clear();

    console.log("==============================");
    console.log("       ATM SEDERHANA          ");
    console.log("==============================");
    console.log("1. Cek Saldo");
    console.log("2. Setor Uang");
    console.log("3. Tarik Uang");
    console.log("4. Keluar");
    console.log("==============================");

    rl.question("Pilih menu: ", function (pilihan) {

        switch (pilihan) {

            // =========================
            // 1. CEK SALDO
            // =========================
            case "1":
                console.clear();

                console.log("\n\n");
                console.log("================================");
                console.log("          SALDO ANDA");
                console.log("================================");
                console.log("\n");

                // SALDO DIBUAT MENONJOL
                console.log("       Rp " + rupiah(saldo));

                console.log("\n");
                console.log("================================");
                console.log("\n");

                console.log("Menu:");
                console.log("1. Kembali ke menu utama");
                console.log("2. Keluar");

                rl.question("\nPilih: ", function (pilihanSaldo) {

                    if (pilihanSaldo === "1") {
                        menu();
                    } else if (pilihanSaldo === "2") {
                        keluar();
                    } else {
                        console.log("Pilihan tidak valid.");
                        setTimeout(menu, 1500);
                    }
                });

                break;


            // =========================
            // 2. SETOR UANG
            // =========================
            case "2":
                rl.question("\nMasukkan jumlah uang yang ingin disetor: Rp ", function (jumlah) {

                    jumlah = Number(jumlah);

                    if (jumlah <= 0 || isNaN(jumlah)) {
                        console.log("\nJumlah setoran tidak valid!");
                        setTimeout(menu, 1500);
                    } else {

                        saldo += jumlah;

                        console.clear();

                        console.log("\n\n");
                        console.log("================================");
                        console.log("       SETORAN BERHASIL");
                        console.log("================================");

                        console.log("\nSaldo diterima: Rp " + rupiah(jumlah));

                        console.log("\n--------------------------------");

                        // SALDO TERBARU DIBUAT MENONJOL
                        console.log("\n       SALDO TERBARU");
                        console.log("       Rp " + rupiah(saldo));

                        console.log("\n--------------------------------");

                        console.log("\nApakah Anda ingin melanjutkan");
                        console.log("atau sudah selesai?");
                        console.log("\n1. Lanjut");
                        console.log("2. Selesai");

                        rl.question("\nPilih: ", function (pilihan) {

                            if (pilihan === "1") {
                                menu();
                            } else if (pilihan === "2") {
                                keluar();
                            } else {
                                console.log("Pilihan tidak valid.");
                                setTimeout(menu, 1500);
                            }
                        });
                    }
                });

                break;


            // =========================
            // 3. TARIK UANG
            // =========================
            case "3":
                rl.question("\nMasukkan jumlah uang yang ingin ditarik: Rp ", function (jumlah) {

                    jumlah = Number(jumlah);

                    if (jumlah <= 0 || isNaN(jumlah)) {

                        console.log("\nJumlah penarikan tidak valid!");
                        setTimeout(menu, 1500);

                    } else if (jumlah > saldo) {

                        console.log("\nSaldo tidak mencukupi!");
                        console.log("Saldo Anda: Rp " + rupiah(saldo));

                        setTimeout(menu, 2000);

                    } else {

                        saldo -= jumlah;

                        console.clear();

                        console.log("\n\n");
                        console.log("================================");
                        console.log("          PENARIKAN");
                        console.log("================================");

                        console.log("\n");
                        console.log(" Harap menunggu...");
                        console.log(" Uang sedang keluar.");

                        console.log("\n");
                        console.log("--------------------------------");

                        console.log("\n Sisa saldo:");
                        console.log(" Rp " + rupiah(saldo));

                        console.log("\n--------------------------------");

                        console.log("\n1. Lanjut");
                        console.log("2. Selesai");

                        rl.question("\nPilih: ", function (pilihan) {

                            if (pilihan === "1") {
                                menu();
                            } else if (pilihan === "2") {
                                keluar();
                            } else {
                                console.log("Pilihan tidak valid.");
                                setTimeout(menu, 1500);
                            }
                        });
                    }
                });

                break;


            // =========================
            // 4. KELUAR
            // =========================
            case "4":
                keluar();
                break;


            // =========================
            // PILIHAN SALAH
            // =========================
            default:
                console.log("\nPilihan tidak tersedia!");
                setTimeout(menu, 1500);
        }
    });
}


// Fungsi keluar
function keluar() {

    console.clear();

    console.log("\n\n");
    console.log("================================");
    console.log("     TERIMA KASIH");
    console.log("================================");

    console.log("\nSaldo akhir Anda:");
    console.log("Rp " + rupiah(saldo));

    console.log("\nSilakan ambil kartu Anda.");
    console.log("================================\n");

    rl.close();
}


// Menjalankan program
menu();