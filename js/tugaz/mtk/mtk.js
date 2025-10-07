let a = 15
let b = 4


let  penjumlahan = a + b;
let  pengurangan = a - b;
let  perkalian = a * b;
let  pembagian = a / b;
let  sisaBagi = a % b;
let  pangkat = a ** b;

console.log("a + b =", penjumlahan);
console.log("a - b =", pengurangan);
console.log("a * b =", perkalian);
console.log("a / b =", pembagian);
console.log("a % b =", sisaBagi);
console.log("a ** b =", pangkat);

// chalengge

let r = 7
let π = 22/7

let L = π * (r ** 2) 

console.log("L = π * r ** 2", L);

let  score = 100

// 1. Tambah 50 poin
// 2. Kurangi 25 poin
// 3. Kalikan dengan 2
// 4. Bagi dengan 4
// 5. Ambil sisa bagi 30

score += 50
score -= 25
score *= 2
score /= 4
score %= 30

console.log("score akhir", score);

// yeah

let lantai = 5

lantai++;
++lantai;
lantai--;
--lantai;

console.log("lantai akhir", lantai);

// yeah ming!! i do it ( •̀ ω •́ )✧

let  nilaiMatematika = 85;
let  nilaiBahasaIndonesia = 78;
let  nilaiIPA = 92;
let  nilaiMinimal = 75;

// Lengkapi kondisi berikut:
let  lulusMatematika = nilaiMatematika <= nilaiMinimal;
let  lulusBahasaIndonesia = nilaiBahasaIndonesia <= nilaiMinimal; 
let  lulusIPA = nilaiIPA <= nilaiMinimal;
 
// Cek apakah lulus semua mata pelajaran
let lulusMapel = true


let lulusSemuaMapel = lulusMatematika && lulusBahasaIndonesia && lulusIPA;
( lulusMatematika <= nilaiMinimal );
(lulusBahasaIndonesia <= nilaiMinimal);
(lulusIPA <= nilaiMinimal);


// Cek apakah ada yang lulus (minimal 1 mapel)
let  adaYangLulus = lulusSemuaMapel || lulusMapel;




console.log("Lulus Matematika:", lulusMatematika);
console.log("Lulus Bahasa Indonesia:", lulusBahasaIndonesia);
console.log("Lulus IPA", lulusIPA);
console.log("Lulus Semua Mapel:", lulusSemuaMapel);
console.log("Ada Yang Lulus:", adaYangLulus)

// dazed


let  password = "JavaScript123";
let  panjangPassword = password.length;

// Kriteria password:
let  panjangCukup = password > 8;

let  tidakTerlalu = password < 10;


let  passwordValid = panjangPassword && 
( password > 8 );
( password < 10);
console.log("Password valid:", passwordValid);

// mumet


let  nama = "Warrior";
let  level = 10;
let  baseHP = 100;
let  baseAttack = 25;
let  baseDefense = 15;


// Hitung stats berdasarkan level
let  totalHP = baseHP + ( level * 10 ) // baseHP + (level * 10)
let  totalAttack =  baseAttack + ( level * 3) // baseAttack + (level * 3)
let  totalDefense = baseDefense + ( level * 2 )// baseDefense + (level * 2)

// Hitung Combat Power (CP)
let  combatPower = (totalHP + totalAttack + totalDefense) * level // (totalHP  totalAttack + totalDefense) * level

// Tentukan rank berdasarkan CP (gunakan operator ternary)
let  rank = 
combatPower >= 2000 ? "S" :
combatPower >= 1500 ? "A" :
combatPower >= 1000 ? "B" : "C"
 

console.log(`=== ${nama} Level ${level} ===`);
console.log("HP:", totalHP);
console.log("Attack:", totalAttack);
console.log("Defense:", totalDefense);
console.log("Combat Power:", combatPower);
console.log("Rank:", rank)



// tambah mumet bikin aku cacophobia

// Player 1
let  player1HP = 120;
let  player1Attack = 30;
let  player1Name = "amoguz";


// Player 2
let  player2HP = 100;
let  player2Attack = 35;
let  player2Name = "obunga";

console.log("=== BATTLE START ===");


// Turn 1: Player 1 menyerang Player 2
player2HP -= player1Attack;

console.log(`${player1Name} menyerang ${player2Name} sebesar ${player1Attack} damage!`);
console.log(`${player2Name} HP tersisa: ${player2HP}`);


// Turn 2: Player 2 menyerang Player 1
player1HP -= player2Attack;
console.log(`${player2Name} menyerang ${player1Name} sebesar ${player2Attack} damage!`);
console.log(`${player1Name} HP tersisa: ${player1HP}`);
// Tentukan pemenang (gunakan operator ternary)

let  pemenang =
player1HP > player2HP ? player1Name :
player2HP > player1HP ? player2Name : "Draw"
console.log(`=== PEMENANG: ${pemenang} ===`);


// kurang seru pak !!!

let  angka = 15;

// Cek apakah ganjil atau genap
let  isGenap = angka % 2;
let statusGanjilGenap = isGenap ? "Genap" : "Ganjil";  // "Ganjil"

// Cek kondisi FizzBuzz
let  isKelipatanTiga = angka % 3;
let  isKelipatanLima = angka % 5;


let  isKelipatanTigaDanLima = statusGanjilGenap &&
( angka % 3);
( angka % 5);
let hasilFizzBuzz = isKelipatanTigaDanLima ? "FizzBuzz" : isKelipatanTiga ? "Fizz" : isKelipatanLima ? "Buzz" : angka;

console.log(`Angka: ${angka}`);
console.log(`Status: ${statusGanjilGenap}`);
console.log(`FizzBuzz: ${hasilFizzBuzz}`);

// nggak ngerti ganjil-genap

let  hargaAsli = 250000;
let  isMember = true;
let  jumlahBeli = 3;
 
// Logika diskon:
// -Bukan member: tidak ada diskon
// -Member + beli 1 item: diskon 5%
// -Member + beli 2-3 item: diskon 10%
// -Member + beli >3 item: diskon 15%
 
let persenDiskon =
!isMember ? 0 :
jumlahBeli === 1 ? 5 :
jumlahBeli >= 2 && jumlahBeli <= 3 ? 10 : 15;

let  nominalDiskon = (hargaAsli * persenDiskon)/100; // saya tak mengerti persen-persenan
let  hargaSetelahDiskon = hargaAsli - nominalDiskon;


console.log(`Harga Asli: Rp ${hargaAsli}`);
console.log(`Status Member: ${isMember ? "Ya" : "Tidak"}`);
console.log(`Jumlah Item: ${jumlahBeli}`);
console.log(`Diskon: ${persenDiskon}% (Rp ${nominalDiskon})`);
console.log(`Harga Final: Rp ${hargaSetelahDiskon}`);

// ERROR CODE : Perbaiki yang salah!
let  umur = "20";
let  batasUmur = 18;

let  bisaBerkendara = (umur >= batasUmur); // Apakah hasilnya sesuai ekspektasi?
 
console.log("boleh jalan",bisaBerkendara)

let  poin = 100;
poin == poin + 50; // Apakah poin bertambah?

let  x = 10;
let  y = x++;
let  z = ++x;
console.log("x:", x, "y:", y, "z:", z); // Prediksi hasilnya!

let  hasil = 10 + 5 * 2; // Berapa hasilnya? 30 atau 20?
console.log("hasil", hasil)