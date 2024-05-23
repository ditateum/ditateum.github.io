// Get Value PAI
const pai1 = document.getElementById("pai1-value");
const pai2 = document.getElementById("pai2-value");
const pai3 = document.getElementById("pai3-value");
const pai4 = document.getElementById("pai4-value");
const pai5 = document.getElementById("pai5-value");

// Get Value PPKN
const ppkn1 = document.getElementById("ppkn1-value");
const ppkn2 = document.getElementById("ppkn2-value");
const ppkn3 = document.getElementById("ppkn3-value");
const ppkn4 = document.getElementById("ppkn4-value");
const ppkn5 = document.getElementById("ppkn5-value");

// Get Value BI
const bi1 = document.getElementById("bi1-value");
const bi2 = document.getElementById("bi2-value");
const bi3 = document.getElementById("bi3-value");
const bi4 = document.getElementById("bi4-value");
const bi5 = document.getElementById("bi5-value");

// Get Value MTK
const mtk1 = document.getElementById("mtk1-value");
const mtk2 = document.getElementById("mtk2-value");
const mtk3 = document.getElementById("mtk3-value");
const mtk4 = document.getElementById("mtk4-value");
const mtk5 = document.getElementById("mtk5-value");

// Get Value IPA
const ipa1 = document.getElementById("ipa1-value");
const ipa2 = document.getElementById("ipa2-value");
const ipa3 = document.getElementById("ipa3-value");
const ipa4 = document.getElementById("ipa4-value");
const ipa5 = document.getElementById("ipa5-value");

// Get Value IPS
const ips1 = document.getElementById("ips1-value");
const ips2 = document.getElementById("ips2-value");
const ips3 = document.getElementById("ips3-value");
const ips4 = document.getElementById("ips4-value");
const ips5 = document.getElementById("ips5-value");

// Get Value BING
const bing1 = document.getElementById("bing1-value");
const bing2 = document.getElementById("bing2-value");
const bing3 = document.getElementById("bing3-value");
const bing4 = document.getElementById("bing4-value");
const bing5 = document.getElementById("bing5-value");

const btnSubmbit = document.getElementById("hitung");
const result = document.getElementById("result");

btnSubmbit.addEventListener("click", function () {
  const rataRataSMT1 =
    (Number(pai1.value) +
      Number(ppkn1.value) +
      Number(bi1.value) +
      Number(mtk1.value) +
      Number(ipa1.value) +
      Number(ips1.value) +
      Number(bing1.value)) /
    7;

  const rataRataSMT2 =
    (Number(pai2.value) +
      Number(ppkn2.value) +
      Number(bi2.value) +
      Number(mtk2.value) +
      Number(ipa2.value) +
      Number(ips2.value) +
      Number(bing2.value)) /
    7;

  const rataRataSMT3 =
    (Number(pai3.value) +
      Number(ppkn3.value) +
      Number(bi3.value) +
      Number(mtk3.value) +
      Number(ipa3.value) +
      Number(ips3.value) +
      Number(bing3.value)) /
    7;

  const rataRataSMT4 =
    (Number(pai4.value) +
      Number(ppkn4.value) +
      Number(bi4.value) +
      Number(mtk4.value) +
      Number(ipa4.value) +
      Number(ips4.value) +
      Number(bing4.value)) /
    7;

  const rataRataSMT5 =
    (Number(pai5.value) +
      Number(ppkn5.value) +
      Number(bi5.value) +
      Number(mtk5.value) +
      Number(ipa5.value) +
      Number(ips5.value) +
      Number(bing5.value)) /
    7;

  const rataRataTotal =
    (rataRataSMT1 + rataRataSMT2 + rataRataSMT3 + rataRataSMT4 + rataRataSMT5) /
    5;

  const nilaiAkhir = 0.5 * rataRataTotal + 0.2 * 93 + 0.3 * 83.6;
  console.log(nilaiAkhir);

  result.innerText = `Hasil Akhir Perhitungan = ${nilaiAkhir}`;
});
