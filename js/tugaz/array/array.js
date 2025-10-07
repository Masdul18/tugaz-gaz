let kegiatan = [
    "shalat shubuh",
    "mengaji",
    "sarapan",
    "belajar",
    "istirahat",
];
console.log("kegiatan", kegiatan)

// 1.   nambah 2 kegiatan baru di malam hari (akhir) dengan shalat isya dan tidur.
kegiatan.push(
    "shalat isya",
    "tidur",
);
console.log(kegiatan)
// 2.   nambah kegiatan di jam 3 pagi dengan shalat shubuh
kegiatan.unshift(
    "shalat tahajjud"
);
console.log(kegiatan)

// 3.   
kegiatan.shift()
console.log(kegiatan);
// 4.
kegiatan.pop()
console.log(kegiatan);

// 5.
kegiatan[3] = "olahraga";
console.log(kegiatan);
// 6.
kegiatan.splice(2,3);
console.log(kegiatan);

// 7.
console.log("ngitung", kegiatan.length)