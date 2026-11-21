/* === BÖLEK 1/8: BAZA WE IKONKALAR === */
var githubBaza = [
  { id: "1", t: "Kagyz A4 DOUBLE A 80gms (500 list)", p: 78, cost: 65, s: 10, c: "Kagyz", sub: "Printer kagyzy", d: "Ýokary hilli ak A4 printer kagyzy, 80g/m², 500 sahypa." },
  { id: "2", t: "Faýl Dolphin 40micr 100s", p: 20, cost: 15, s: 4, c: "Ofis", sub: "Faýl we papkalar", d: "A4 ölçegli berk polipropilen faýllar, 100 sanylyk gap." },
  { id: "3", t: "Ruçka Pensan My-Tech 0.7mm gök", p: 3.5, cost: 2, s: 50, c: "Ýazuw", sub: "Şarikli ruçkalar", d: "Inçe 0.7mm uçly ýumşak ýazýan gök şarikli ruçka." },
  { id: "4", t: "Depder 48 list gözenek Hatber", p: 6, cost: 4, s: 35, c: "Kagyz", sub: "Mekdep depderleri", d: "48 sahypalyk gözenekli mekdep depderi, galyň daşlyk." },
  { id: "5", t: "Kalkulýator CASIO DJ-120D Plus", p: 145, cost: 115, s: 3, c: "Ofis", sub: "Kalkulýatorlar", d: "12 razrýadly ofis kalkulýatory, gün batareýasy." },
  { id: "6", t: "Depder 12 list gözenek", p: 2, cost: 1.2, s: 80, c: "Kagyz", sub: "Mekdep depderleri", d: "Başlangyç synplar üçin 12 sahypalyk gözenekli depder." },
  { id: "7", t: "Depder 12 list çyzykly", p: 2, cost: 1.2, s: 75, c: "Kagyz", sub: "Mekdep depderleri", d: "Başlangyç synplar üçin 12 sahypalyk çyzykly depder." },
  { id: "8", t: "Ýönekeý galam HB Maped", p: 2.5, cost: 1.5, s: 60, c: "Ýazuw", sub: "Ýönekeý galamlar", d: "Döwülmeýän grafit özegi bolan ýönekeý galam." },
  { id: "9", t: "Pozgyç Maped Soft", p: 3, cost: 1.8, s: 40, c: "Ýazuw", sub: "Pozgyç we uçlaýjylar", d: "Kagyzy zaýalamaýan ýumşak ak pozgyç." },
  { id: "10", t: "Albom surat üçin 24 list", p: 12, cost: 8, s: 25, c: "Döredijilik", sub: "Surat albomlary", d: "Surat çekmek üçin galyň kagyzly 24 sahypalyk albom." },
  { id: "11", t: "Reňkli galamlar 12 reňk Faber-Castell", p: 24, cost: 17, s: 20, c: "Döredijilik", sub: "Reňkli galamlar", d: "12 sany ýagty reňkli ýokary hilli galamlar toplumy." },
  { id: "12", t: "Sirkul we çyzgyç toplumy Maped", p: 28, cost: 20, s: 15, c: "Ýazuw", sub: "Çyzuw esbaplary", d: "Metal sirkul we çyzgyç toplumy." },
  { id: "13", t: "Gündelik (Dnewnik) mekdep üçin", p: 15, cost: 10, s: 30, c: "Kagyz", sub: "Gündelik we bloknotlar", d: "Gaty daşlykly standart mekdep gündeligi." }
];

var hSvg0 = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
var hSvg1 = '<svg width="16" height="16" viewBox="0 0 24 24" fill="#f43f5e" stroke="#f43f5e" stroke-width="2.1"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
var shSvg = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

var lImg = document.getElementById("logoImg");
if (lImg) {
  lImg.onload = function () { lImg.style.display = "block"; document.getElementById("logoTxt").style.display = "none"; };
  lImg.onerror = function () {
    if (!this.dataset.t) { this.dataset.t = "1"; this.src = "img/logo.jpg"; }
    else { this.style.display = "none"; document.getElementById("logoTxt").style.display = "block"; }
  };
}

var cats = [
  { id: "Ofis", tk: "Ofis üçin", ru: "Для офиса", i: "🗂️", img: "img/ofis.jpg" },
  { id: "Torba", tk: "Mekdep üçin", ru: "Для школы", i: "🎒", img: "img/mekdep.jpg" },
  { id: "Kagyz", tk: "Kagyz önümleri", ru: "Бумажная продукция", i: "📄", img: "img/kagyz.jpg" },
  { id: "Ýazuw", tk: "Ýazuw esbaplary", ru: "Письменные товары", i: "🖊️", img: "img/yazuw.jpg" },
  { id: "Döredijilik", tk: "Döredijilik", ru: "Творчество", i: "🎨", img: "img/doredijilik.jpg" },
  { id: "Kitap", tk: "Kitaplar", ru: "Книги", i: "📚", img: "img/kitaplar.jpg" },
  { id: "Oýunjak", tk: "Oýunjaklar", ru: "Игрушки", i: "🧸", img: "img/oyunjak.jpg" },
  { id: "Baýramçylyk", tk: "Baýramçylyk", ru: "Праздник", i: "🎈", img: "img/bayramcylyk.jpg" },
  { id: "Umumy", tk: "Umumy harytlar", ru: "Общие товары", i: "🛍️", img: "img/umumy.jpg" }
];
/* === BÖLEK 2/8: TM/RU TERJIME WE AKYLLY KATEGORIÝA === */
var dictPairs = [
  ["тетрадь", "depder"], ["ручка", "ruçka"], ["шариковая", "şarikli"], ["гелевая", "gelli"],
  ["карандаш", "galam"], ["простой", "ýönekeý"], ["цветные", "reňkli"], ["ластик", "pozgyç"],
  ["точилка", "uçlaýjy"], ["линейка", "çyzgyç"], ["циркуль", "sirkul"], ["маркер", "marker"],
  ["бумага", "kagyz"], ["альбом", "albom"], ["дневник", "gündelik"], ["блокнот", "bloknot"],
  ["папка", "papka"], ["файл", "faýl"], ["степлер", "stepler"], ["скобы", "skoba"],
  ["ножницы", "gaýçy"], ["клей", "ýelim"], ["калькулятор", "kalkulýator"], ["пенал", "penal"],
  ["рюкзак", "rukzak"], ["краски", "boýaglar"], ["акварель", "akwarel"], ["гуашь", "guaş"],
  ["кисть", "çotga"], ["пластилин", "plastilin"], ["книга", "kitap"], ["черная", "gara"],
  ["синяя", "gök"], ["красная", "gyzyl"], ["зеленая", "ýaşyl"], ["клетку", "gözenek"],
  ["линию", "çyzykly"], ["лист", "list"], ["набор", "toplum"], ["для школы", "mekdep üçin"],
  ["для офиса", "ofis üçin"], ["umumy", "общие"], ["şarikli ruçkalar", "шариковые ручки"],
  ["mekdep depderleri", "школьные тетради"], ["printer kagyzy", "офисная бумага"],
  ["ýönekeý galamlar", "простые карандаши"], ["reňkli galamlar", "цветные карандаши"],
  ["pozgyç we uçlaýjylar", "ластики и точилки"], ["çyzuw esbaplary", "чертежные принадлежности"],
  ["faýl we papkalar", "файлы и папки"], ["kalkulýatorlar", "калькуляторы"],
  ["surat albomlary", "альбомы для рисования"], ["gündelik we bloknotlar", "дневники и блокноты"]
];

function trText(str, targetLang) {
  if (!str) return "";
  var res = String(str);
  for (var i = 0; i < dictPairs.length; i++) {
    var ruW = dictPairs[i][0], tkW = dictPairs[i][1];
    var from = targetLang === "tk" ? ruW : tkW;
    var to = targetLang === "tk" ? tkW : ruW;
    var rx = new RegExp(from, "gi");
    res = res.replace(rx, function (m) {
      return m[0] === m[0].toUpperCase() ? to.charAt(0).toUpperCase() + to.slice(1) : to;
    });
  }
  return res;
}

function detectCatSub(name) {
  var s = String(name).toLowerCase();
  if (/ручк|ruck|ruçk/.test(s)) return { c: "Ýazuw", sub: "Şarikli ruçkalar" };
  if (/карандаш|galam/.test(s)) return { c: "Ýazuw", sub: /цвет|reňk/.test(s) ? "Reňkli galamlar" : "Ýönekeý galamlar" };
  if (/ластик|стиралк|pozgy|точилк|uçla/.test(s)) return { c: "Ýazuw", sub: "Pozgyç we uçlaýjylar" };
  if (/линейк|çyzgy|циркуль|sirkul/.test(s)) return { c: "Ýazuw", sub: "Çyzuw esbaplary" };
  if (/маркер|marker|корректор|замазк/.test(s)) return { c: "Ýazuw", sub: "Marker we korrektorlar" };
  if (/тетрад|depder/.test(s)) return { c: "Kagyz", sub: "Mekdep depderleri" };
  if (/бумаг|kagyz|a4|а4/.test(s)) return { c: "Kagyz", sub: "Printer kagyzy" };
  if (/блокнот|bloknot|дневник|gündelik|gundelik/.test(s)) return { c: "Kagyz", sub: "Gündelik we bloknotlar" };
  if (/альбом|albom|скетчбук/.test(s)) return { c: "Döredijilik", sub: "Surat albomlary" };
  if (/краск|boýag|гуаш|акварел|кист|çotga|пластилин|холст/.test(s)) return { c: "Döredijilik", sub: "Boýag we çotgalar" };
  if (/папк|papka|файл|faýl/.test(s)) return { c: "Ofis", sub: "Faýl we papkalar" };
  if (/калькулятор|kalkulýator/.test(s)) return { c: "Ofis", sub: "Kalkulýatorlar" };
  if (/степлер|stepler|скоб|дырокол|скотч|ножниц|gaýçy|клей|ýelim/.test(s)) return { c: "Ofis", sub: "Ofis esbaplary" };
  if (/пенал|penal|рюкзак|rukzak|портфел|сумк|обложк/.test(s)) return { c: "Torba", sub: "Mekdep torba we penallar" };
  if (/книг|kitap|сказк|словарь|пропис|атлас/.test(s)) return { c: "Kitap", sub: "Okuw kitaplary" };
  if (/лего|lego|кукл|машин|пазл|шахмат|игра|oýun|мяч/.test(s)) return { c: "Oýunjak", sub: "Çaga oýunjaklary" };
  if (/шар|şar|свеч|подар|лента|конверт/.test(s)) return { c: "Baýramçylyk", sub: "Baýramçylyk bezegleri" };
  return { c: "Umumy", sub: "Umumy harytlar" };
}
/* === BÖLEK 3/8: YATDA SAKLAÝJY, KEŞBEK WE MEKDEP BAZARY === */
function lsGet(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

var db = lsGet("ay_db_v15", githubBaza);
var favs = lsGet("ay_favs", []);
var views = lsGet("ay_views", {});
var orders = lsGet("ay_orders", []);
var cbBal = parseFloat(lsGet("ay_cb", 0)) || 0;
var cbMeta = lsGet("ay_cb_meta", { spent: 0, earned: 0 });
var userAddr = lsGet("ay_uaddr", { nm: "", ph: "", ad: "" });
var admPassSaved = lsGet("ay_apass", "1234");
var m1 = lsGet("ay_m1", "aycyzuw.tm.arkadag@gmail.com");
var m2 = lsGet("ay_m2", "aycyzuw.tm2026@gmail.com");
var smsPh = lsGet("ay_sms", "+99365637644");
var st = lsGet("ay_st", { s: 0, p: 0, c: 0 });

var cart = [], lang = "tk", taps = 0, tt, curDet = null, curQtyItem = null;
var fLow = false, fUnder10 = false;
var curGrade = 1, curTier = "cheap", curSchoolItems = [];

function ico(c) { for (var i = 0; i < cats.length; i++) if (cats[i].id === c) return cats[i].i; return "📦"; }
function catName(c) { for (var i = 0; i < cats.length; i++) if (cats[i].id === c) return cats[i][lang]; return c; }

function getProdImgUrl(x) {
  if (x.img && String(x.img).trim() !== "") {
    var s = String(x.img).trim();
    if (s.indexOf("http") === 0 || s.indexOf("data:") === 0 || s.indexOf("img/") === 0) return s;
    return "img/" + s + (s.indexOf(".") === -1 ? ".jpg" : "");
  }
  return "img/" + x.id + ".jpg";
}

function getCbTier() {
  var sp = cbMeta.spent || 0;
  if (sp >= 1000) return { rate: 0.05, pct: 5, tk: "🥇 ALTYN DEREJE", ru: "🥇 ЗОЛОТОЙ СТАТУС", nextTk: "Iň ýokary VIP dereje!", nextRu: "Максимальный VIP статус!", prog: 100, left: 0 };
  if (sp >= 300) return { rate: 0.03, pct: 3, tk: "🥈 KÜMÜŞ DEREJE", ru: "🥈 СЕРЕБРЯНЫЙ СТАТУС", nextTk: "Altyn (5%)", nextRu: "Золото (5%)", prog: Math.min(100, Math.round(((sp - 300) / 700) * 100)), left: Math.max(0, 1000 - sp) };
  return { rate: 0.02, pct: 2, tk: "🥉 BÜRÜNÇ DEREJE", ru: "🥉 БРОНЗОВЫЙ СТАТУС", nextTk: "Kümüş (3%)", nextRu: "Серебро (3%)", prog: Math.min(100, Math.round((sp / 300) * 100)), left: Math.max(0, 300 - sp) };
}

function updCbUI() {
  var t = getCbTier();
  document.getElementById("profCbVal").innerText = cbBal.toFixed(2);
  document.getElementById("cbAvail").innerText = cbBal.toFixed(2);
  document.getElementById("cbUseWrap").style.display = cbBal > 0 ? "block" : "none";
  document.getElementById("cbTierName").innerText = t[lang];
  document.getElementById("cbRateTxt").innerText = t.pct + (lang === "tk" ? "% Keşbek" : "% Кэшбэк");
  document.getElementById("cbProgBar").style.width = Math.max(8, t.prog) + "%";
  document.getElementById("cbNextTier").innerText = lang === "tk" ? t.nextTk : t.nextRu;
  document.getElementById("cbProgLeft").innerText = t.left > 0
    ? (lang === "tk" ? "Indiki derejä: " + t.left.toFixed(0) + " m galdy" : "До след. уровня: " + t.left.toFixed(0) + " m")
    : (lang === "tk" ? "VIP Altyn dereje işjeň" : "VIP Золото активно");
  document.getElementById("cbTotalSpent").innerText = (cbMeta.spent || 0).toFixed(2);
  document.getElementById("cbTotalEarned").innerText = (cbMeta.earned || 0).toFixed(2);
}

function findBestMatch(kw, tier) {
  var matches = db.filter(function (x) { return x.s > 0 && x.t.toLowerCase().indexOf(kw.toLowerCase()) > -1; });
  if (!matches.length) return null;
  matches.sort(function (a, b) { return a.p - b.p; });
  if (tier === "cheap") return matches[0];
  if (tier === "pro") return matches[matches.length - 1];
  return matches[Math.floor(matches.length / 2)];
}

function buildSchoolList() {
  var gScroll = document.getElementById("gradeScroll");
  if (!gScroll) return;
  gScroll.innerHTML = "";
  for (var g = 1; g <= 12; g++) {
    var gp = document.createElement("div");
    gp.className = "g-pill" + (g === curGrade ? " act" : "");
    gp.innerHTML = "<b>" + g + "</b><span>" + (lang === "tk" ? "synp" : "класс") + "</span>";
    (function (gr) { gp.onclick = function () { curGrade = gr; buildSchoolList(); }; })(g);
    gScroll.appendChild(gp);
  }
  var wrap = document.getElementById("schoolListWrap"); wrap.innerHTML = "";
  curSchoolItems = []; var tot = 0;
  var recipe = curGrade <= 4 ? [
    { kw: "12 list gözenek", defName: "Depder 12 list gözenek", q: 5, p: 2, c: "Kagyz" },
    { kw: "12 list çyzyk", defName: "Depder 12 list çyzykly", q: 5, p: 2, c: "Kagyz" },
    { kw: "ruçka", defName: "Ruçka gök şarikli", q: 3, p: 3.5, c: "Ýazuw" },
    { kw: "galam", defName: "Ýönekeý galam HB", q: 3, p: 2.5, c: "Ýazuw" },
    { kw: "pozgyç", defName: "Pozgyç ýumşak", q: 2, p: 3, c: "Ýazuw" },
    { kw: "albom", defName: "Surat albomy 24 list", q: 1, p: 12, c: "Döredijilik" },
    { kw: "gündelik", defName: "Mekdep gündeligi", q: 1, p: 15, c: "Kagyz" }
  ] : [
    { kw: "48 list", defName: "Depder 48 list gözenek", q: 8, p: 6, c: "Kagyz" },
    { kw: "ruçka", defName: "Ruçka gök 0.7mm", q: 5, p: 3.5, c: "Ýazuw" },
    { kw: "galam", defName: "Ýönekeý galam HB", q: 3, p: 2.5, c: "Ýazuw" },
    { kw: "sirkul", defName: "Sirkul we çyzgyç toplumy", q: 1, p: 28, c: "Ýazuw" },
    { kw: "gündelik", defName: "Mekdep gündeligi", q: 1, p: 15, c: "Kagyz" }
  ];
  var mult = curTier === "cheap" ? 0.85 : (curTier === "pro" ? 1.35 : 1);
  for (var i = 0; i < recipe.length; i++) {
    var r = recipe[i], real = findBestMatch(r.kw, curTier);
    var itemObj = real ? { id: real.id, t: real.t, p: real.p, cost: real.cost || 0, s: real.s, c: real.c, img: real.img || "", q: r.q }
      : { id: "S_" + curGrade + "_" + i, t: r.defName, p: +(r.p * mult).toFixed(1), cost: +(r.p * 0.7).toFixed(1), s: 20, c: r.c, img: "", q: r.q };
    curSchoolItems.push(itemObj); tot += itemObj.p * itemObj.q;
    var row = document.createElement("div"); row.className = "b-item";
    var th = document.createElement("div"); th.className = "b-thumb";
    var im = document.createElement("img"); im.src = getProdImgUrl(itemObj);
    (function (ic) { im.onerror = function () { this.parentElement.innerHTML = ic; }; })(ico(itemObj.c));
    th.appendChild(im);
    row.appendChild(th);
    row.innerHTML += '<div class="b-mid"><h5>' + trText(itemObj.t, lang) + '</h5><span>' + itemObj.q + (lang === "tk" ? " sany × " : " шт × ") + itemObj.p + ' m</span></div><div class="b-right"><b>' + (itemObj.p * itemObj.q).toFixed(1) + ' m</b></div>';
    wrap.appendChild(row);
  }
  document.getElementById("schoolTotal").innerText = tot.toFixed(2);
}
/* === BÖLEK 4/8: SEBET MUKDARY WE HALANANLAR === */
function flyToCart(el) {
  if (!el) return;
  var r = el.getBoundingClientRect();
  var target = document.getElementById("navCartBtn").getBoundingClientRect();
  var dot = document.createElement("div");
  dot.className = "fly-dot"; dot.innerText = "+1";
  dot.style.left = (r.left + r.width / 2 - 14) + "px";
  dot.style.top = r.top + "px";
  document.body.appendChild(dot);
  requestAnimationFrame(function () {
    dot.style.left = (target.left + target.width / 2 - 10) + "px";
    dot.style.top = (target.top + 4) + "px";
    dot.style.opacity = "0.2"; dot.style.transform = "scale(0.6)";
  });
  setTimeout(function () { dot.remove(); }, 650);
}

function getCartQty(id) { for (var i = 0; i < cart.length; i++) if (cart[i].id === id) return cart[i].q; return 0; }

function setExactQty(p, val) {
  var n = parseInt(val, 10);
  if (isNaN(n) || n <= 0) {
    cart = cart.filter(function (it) { return it.id !== p.id; });
  } else {
    var maxS = p.s || p.max || 999;
    if (n > maxS) { alert(lang === "tk" ? "Bu harytdan " + maxS + " sany elýeterli!" : "Доступно только " + maxS + " шт!"); n = maxS; }
    var found = false;
    for (var i = 0; i < cart.length; i++) if (cart[i].id === p.id) { cart[i].q = n; found = true; }
    if (!found) cart.push({ id: p.id, t: p.t, p: p.p, cost: p.cost || 0, c: p.c || "Umumy", img: p.img || "", q: n, max: maxS });
  }
  updCart(); render();
  if (curDet && curDet.id === p.id) updDetBtn(p);
}

function promptQty(p) {
  curQtyItem = p;
  document.getElementById("qtyItemTitle").innerText = trText(p.t, lang);
  var inp = document.getElementById("qtyInput");
  inp.value = getCartQty(p.id) || 1;
  inp.max = p.s || p.max || 999;
  document.getElementById("qpMaxBtn").innerText = lang === "tk" ? "Ählisi" : "Все";
  document.getElementById("qpMaxBtn").onclick = function () { inp.value = p.s || p.max || 50; };
  document.getElementById("qtyModal").classList.add("open");
  setTimeout(function () { inp.focus(); inp.select(); }, 100);
}
window.setPresetQ = function (n) { if (curQtyItem) document.getElementById("qtyInput").value = Math.min(n, curQtyItem.s || curQtyItem.max || 999); };
document.getElementById("btnConfirmQty").onclick = function () {
  if (curQtyItem) setExactQty(curQtyItem, document.getElementById("qtyInput").value);
  document.getElementById("qtyModal").classList.remove("open");
};

function addCart(p, btnEl) {
  var cur = getCartQty(p.id);
  var maxS = p.s || 999;
  if (cur + 1 > maxS) { alert(lang === "tk" ? "Bu harytdan " + maxS + " sany elýeterli!" : "Доступно только " + maxS + " шт!"); return; }
  setExactQty(p, cur + 1);
  if (btnEl) flyToCart(btnEl);
}

function toggleFav(id) {
  var idx = favs.indexOf(id);
  if (idx > -1) favs.splice(idx, 1); else favs.push(id);
  lsSet("ay_favs", favs);
  render(); renderFavs();
  if (curDet && curDet.id === id) updDetFav(id);
}

function updDetFav(id) {
  var isF = favs.indexOf(id) > -1;
  var btn = document.getElementById("detTopFav");
  btn.innerHTML = isF ? hSvg1 : hSvg0;
  document.getElementById("detLikes").innerText = (isF ? 1 : 0) + (parseInt(id, 36) % 5 + 1);
}
/* === BÖLEK 5/8: HARYT DETAIL WE HARYT KARTLARY === */
function updDetBtn(x) {
  var w = document.getElementById("detBarWrap"); w.innerHTML = "";
  var q = getCartQty(x.id);
  if (x.s <= 0) {
    w.innerHTML = '<button class="btn1" disabled style="opacity:.6">' + (lang === "tk" ? "Gutarandy" : "Нет в наличии") + '</button>';
  } else if (q > 0) {
    var box = document.createElement("div"); box.className = "iqty"; box.style.height = "44px";
    var bm = document.createElement("button"); bm.innerText = "−"; bm.onclick = function () { setExactQty(x, q - 1); };
    var sp = document.createElement("span"); sp.innerText = q + (lang === "tk" ? " sany (üýtget)" : " шт (изм.)"); sp.onclick = function () { promptQty(x); };
    var bp = document.createElement("button"); bp.innerText = "+"; bp.disabled = q >= x.s; bp.onclick = function () { addCart(x, bp); };
    box.appendChild(bm); box.appendChild(sp); box.appendChild(bp); w.appendChild(box);
  } else {
    var b = document.createElement("button"); b.className = "btn1";
    b.innerText = lang === "tk" ? "🛒 Sebede goş" : "🛒 Добавить в корзину";
    b.onclick = function () { addCart(x, b); };
    w.appendChild(b);
  }
}

function openDet(x) {
  curDet = x;
  views[x.id] = (views[x.id] || (parseInt(x.id, 36) % 40 + 12)) + 1;
  lsSet("ay_views", views);
  var titleTr = trText(x.t, lang);
  document.getElementById("detTopTitle").innerText = titleTr;
  document.getElementById("detName").innerText = titleTr;
  document.getElementById("detPrc").innerText = x.p + " m";
  document.getElementById("detViews").innerText = views[x.id];
  document.getElementById("detCat").innerText = catName(x.c);
  document.getElementById("detSub").innerText = trText(x.sub || "Umumy", lang);
  document.getElementById("detCode").innerText = "#" + x.id;
  document.getElementById("detDesc").innerText = x.d ? trText(x.d, lang) : (lang === "tk" ? titleTr + " — ýokary hilli original kanselýariýa önümi." : titleTr + " — качественный оригинальный товар.");
  document.getElementById("detTopShare").innerHTML = shSvg;
  updDetFav(x.id); updDetBtn(x);

  var iw = document.getElementById("detImgWrap"); iw.innerHTML = "";
  var im = document.createElement("img"); im.src = getProdImgUrl(x);
  (function (ic) { im.onerror = function () { iw.innerHTML = ic; }; })(ico(x.c));
  iw.appendChild(im);

  document.getElementById("detTopFav").onclick = function () { toggleFav(x.id); };
  document.getElementById("detTopShare").onclick = function () {
    var txt = titleTr + " — " + x.p + " m\n" + location.href;
    if (navigator.share) navigator.share({ title: titleTr, text: txt }).catch(function () {});
  };

  var simBox = document.getElementById("detSim"); simBox.innerHTML = "";
  var scnt = 0;
  for (var i = 0; i < db.length; i++) {
    var s = db[i];
    if (s.id !== x.id && s.c === x.c && scnt < 10) {
      var sc = document.createElement("div"); sc.className = "sim-card";
      var si = document.createElement("div"); si.className = "sim-img";
      var simg = document.createElement("img"); simg.src = getProdImgUrl(s);
      (function (ic) { simg.onerror = function () { this.parentElement.innerHTML = ic; }; })(ico(s.c));
      si.appendChild(simg);
      var sb = document.createElement("div"); sb.style.padding = "8px";
      sb.innerHTML = '<div style="font-size:13.5px;font-weight:800;color:var(--p);margin-bottom:2px">' + s.p + ' m</div><div style="font-size:11.5px;height:30px;overflow:hidden">' + trText(s.t, lang) + '</div>';
      sc.appendChild(si); sc.appendChild(sb);
      (function (item) { sc.onclick = function () { openDet(item); document.getElementById("detPage").scrollTop = 0; }; })(s);
      simBox.appendChild(sc); scnt++;
    }
  }
  document.getElementById("detPage").classList.add("open");
}

function makeCard(x) {
  var card = document.createElement("div"); card.className = "card";
  card.onclick = function () { openDet(x); };
  var isLiked = favs.indexOf(x.id) > -1;
  var fbtn = document.createElement("button");
  fbtn.className = "fav-btn" + (isLiked ? " liked" : "");
  fbtn.innerHTML = isLiked ? hSvg1 : hSvg0;
  fbtn.onclick = function (e) { e.stopPropagation(); toggleFav(x.id); };
  card.appendChild(fbtn);

  var pimg = document.createElement("div"); pimg.className = "pimg";
  var img = document.createElement("img"); img.src = getProdImgUrl(x);
  (function (ic) { img.onerror = function () { this.parentElement.innerHTML = ic; }; })(ico(x.c));
  pimg.appendChild(img);

  var info = document.createElement("div"); info.className = "cbody";
  info.innerHTML = '<div class="prc">' + x.p + ' m</div><div class="ttl">' + trText(x.t, lang) + '</div>';

  var q = getCartQty(x.id);
  if (x.s <= 0) {
    var btn = document.createElement("button"); btn.className = "add"; btn.disabled = true;
    btn.innerText = lang === "tk" ? "Gutarandy" : "Нет в наличии";
    info.appendChild(btn);
  } else if (q > 0) {
    var qbox = document.createElement("div"); qbox.className = "iqty";
    qbox.onclick = function (e) { e.stopPropagation(); };
    var bm = document.createElement("button"); bm.innerText = "−"; bm.onclick = function () { setExactQty(x, q - 1); };
    var sp = document.createElement("span"); sp.innerText = q; sp.onclick = function () { promptQty(x); };
    var bp = document.createElement("button"); bp.innerText = "+"; bp.disabled = q >= x.s; bp.onclick = function () { addCart(x, bp); };
    qbox.appendChild(bm); qbox.appendChild(sp); qbox.appendChild(bp);
    info.appendChild(qbox);
  } else {
    var btn = document.createElement("button"); btn.className = "add";
    btn.innerText = lang === "tk" ? "+ Sebede goş" : "+ В корзину";
    btn.onclick = function (e) { e.stopPropagation(); addCart(x, btn); };
    info.appendChild(btn);
  }
  card.appendChild(pimg); card.appendChild(info);
  return card;
}
/* === BÖLEK 6/8: KATEGORIÝALAR, FILTER WE TÄZE SEBET === */
function makeCatCard(c, fc) {
  var d = document.createElement("div"); d.className = "ccard";
  var box = document.createElement("div"); box.className = "cbox";
  if (c.img) {
    var im = document.createElement("img"); im.src = c.img; im.alt = c[lang];
    im.onerror = function () { box.innerHTML = c.i; };
    box.appendChild(im);
  } else box.innerHTML = c.i;
  var sp = document.createElement("span"); sp.innerText = c[lang];
  d.appendChild(box); d.appendChild(sp);
  d.onclick = function () {
    fc.value = c.id; document.getElementById("fsub").value = "";
    renderFilterList(); showTab("home"); render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return d;
}

function renderFilterList() {
  var wrap = document.getElementById("fListWrap");
  if (!wrap) return;
  var fc = document.getElementById("fcat"), fsub = document.getElementById("fsub");
  var curCat = fc.value, curSub = fsub.value;
  wrap.innerHTML = "";

  if (!curCat) {
    var rAll = document.createElement("div");
    rAll.className = "flist-row" + (curCat === "" ? " act" : "");
    rAll.innerHTML = "<span>" + (lang === "tk" ? "Ähli kategoriýalar" : "Все категории") + "</span><span>›</span>";
    rAll.onclick = function () { fc.value = ""; fsub.value = ""; renderFilterList(); };
    wrap.appendChild(rAll);
    for (var i = 0; i < cats.length; i++) {
      var c = cats[i], row = document.createElement("div");
      row.className = "flist-row";
      row.innerHTML = "<span>" + c[lang] + "</span><span>›</span>";
      (function (cid) { row.onclick = function () { fc.value = cid; fsub.value = ""; renderFilterList(); }; })(c.id);
      wrap.appendChild(row);
    }
  } else {
    var back = document.createElement("div"); back.className = "flist-back";
    back.innerHTML = "<span>‹</span><span>" + (lang === "tk" ? "Ähli kategoriýalar" : "Все категории") + "</span>";
    back.onclick = function () { fc.value = ""; fsub.value = ""; renderFilterList(); };
    wrap.appendChild(back);

    var head = document.createElement("div"); head.className = "flist-head";
    head.innerText = catName(curCat); wrap.appendChild(head);

    var rAllSub = document.createElement("div");
    rAllSub.className = "flist-row" + (curSub === "" ? " act" : "");
    rAllSub.innerHTML = "<span>" + (lang === "tk" ? "Ähli harytlar" : "Все товары") + "</span><span>›</span>";
    rAllSub.onclick = function () { fsub.value = ""; renderFilterList(); };
    wrap.appendChild(rAllSub);

    var subs = {};
    for (var j = 0; j < db.length; j++) if (db[j].c === curCat && db[j].sub) subs[db[j].sub] = 1;
    var keys = Object.keys(subs);
    for (var k = 0; k < keys.length; k++) {
      var sname = keys[k], srow = document.createElement("div");
      srow.className = "flist-row" + (curSub === sname ? " act" : "");
      srow.innerHTML = "<span>" + trText(sname, lang) + "</span><span>›</span>";
      (function (sn) { srow.onclick = function () { fsub.value = (fsub.value === sn) ? "" : sn; renderFilterList(); }; })(sname);
      wrap.appendChild(srow);
    }
  }
}

function initF() {
  var g1 = document.getElementById("cgrid1"), g2 = document.getElementById("cgrid2"), fc = document.getElementById("fcat");
  g1.innerHTML = ""; g2.innerHTML = "";
  for (var i = 0; i < cats.length; i++) {
    g1.appendChild(makeCatCard(cats[i], fc));
    g2.appendChild(makeCatCard(cats[i], fc));
  }
  renderFilterList(); buildSchoolList();
}

function render() {
  var qv = document.getElementById("q").value.trim(), q = qv.toLowerCase();
  var fc = document.getElementById("fcat").value, fsub = document.getElementById("fsub").value;
  var hz = document.getElementById("hideZero").checked, pg = document.getElementById("pgrid");
  document.getElementById("clrQ").style.display = qv ? "block" : "none";

  var isFiltered = Boolean(qv || fc || fsub || fLow || fUnder10);
  document.getElementById("homeTopBlocks").style.display = isFiltered ? "none" : "block";

  var cb = document.getElementById("catBanner");
  if (fc) {
    cb.style.display = "flex";
    document.getElementById("catBannerTitle").innerText = catName(fc) + (fsub ? " › " + trText(fsub, lang) : "");
  } else cb.style.display = "none";

  pg.innerHTML = "";
  var cnt = 0;
  for (var i = 0; i < db.length; i++) {
    var x = db[i];
    var trTitle = trText(x.t, lang).toLowerCase();
    var okLow = !fLow || (x.s > 0 && x.s <= 5);
    var ok10 = !fUnder10 || (x.p <= 10);
    if ((!hz || x.s > 0) && okLow && ok10 && (x.t.toLowerCase().indexOf(q) > -1 || trTitle.indexOf(q) > -1 || String(x.id).toLowerCase().indexOf(q) > -1) && (!fc || x.c === fc) && (!fsub || x.sub === fsub)) {
      if (cnt < 120) pg.appendChild(makeCard(x));
      cnt++;
    }
  }
  if (!cnt) pg.innerHTML = '<div class="empty-box" style="grid-column:1/-1"><p>' + (lang === "tk" ? "Haryt tapylmady" : "Товары не найдены") + '</p></div>';
}

function resetAllFilters() {
  document.getElementById("q").value = "";
  document.getElementById("fcat").value = "";
  document.getElementById("fsub").value = "";
  document.getElementById("fOnlyLow").checked = false;
  fLow = false; fUnder10 = false;
  document.getElementById("chipLow").classList.remove("act");
  document.getElementById("chip10").classList.remove("act");
  renderFilterList(); render();
}

function renderFavs() {
  var fg = document.getElementById("fgrid"); fg.innerHTML = ""; var found = 0;
  for (var i = 0; i < db.length; i++) if (favs.indexOf(db[i].id) > -1) { fg.appendChild(makeCard(db[i])); found++; }
  if (!found) fg.innerHTML = '<div class="empty-box" style="grid-column:1/-1"><p>' + (lang === "tk" ? "Halanan haryt ýok" : "Нет избранных товаров") + '</p></div>';
}

function renderStockList() {
  var sl = document.getElementById("stockList"); sl.innerHTML = "";
  for (var i = 0; i < db.length; i++) {
    var x = db[i], row = document.createElement("div"); row.className = "adm-row";
    row.innerHTML = '<span style="max-width:65%"><b>[' + x.id + ']</b> ' + x.t + '</span>';
    var inp = document.createElement("input"); inp.type = "number"; inp.value = x.s;
    inp.style.cssText = "width:65px;padding:4px 6px;margin:0;text-align:center";
    (function (idx) { inp.onchange = function () { db[idx].s = Math.max(0, parseFloat(this.value) || 0); lsSet("ay_db_v15", db); render(); }; })(i);
    row.appendChild(inp); sl.appendChild(row);
  }
}

function renderOrders() {
  var ol = document.getElementById("olist");
  if (!orders.length) { ol.innerHTML = '<div class="empty-box"><p>' + (lang === "tk" ? "Heniz sargyt ýok" : "Заказов пока нет") + '</p></div>'; return; }
  var h = "";
  for (var i = orders.length - 1; i >= 0; i--) {
    var o = orders[i];
    h += '<div style="background:var(--c);border:1px solid var(--b);padding:12px;border-radius:12px;margin-bottom:8px;font-size:13px"><b>Sargyt ' + o.id + ' — ' + o.tot + '</b><br><span style="color:var(--m)">' + o.nm + ' (' + o.ph + ') - ' + o.ad + '</span><div style="margin-top:6px;white-space:pre-wrap;font-size:11.5px;background:var(--g);padding:8px;border-radius:8px">' + o.det + '</div></div>';
  }
  ol.innerHTML = h;
}

function updCart() {
  var c = 0, subTot = 0, cl = document.getElementById("clist");
  cl.innerHTML = "";
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]; c += item.q; subTot += item.p * item.q;
    var row = document.createElement("div"); row.className = "citem-new";

    var imgDiv = document.createElement("div"); imgDiv.className = "citem-img";
    var im = document.createElement("img"); im.src = getProdImgUrl(item);
    (function (ic) { im.onerror = function () { this.parentElement.innerHTML = ic; }; })(ico(item.c));
    imgDiv.appendChild(im);

    var body = document.createElement("div"); body.className = "citem-body";
    var top = document.createElement("div"); top.className = "citem-top";
    top.innerHTML = '<div class="citem-title">' + trText(item.t, lang) + '</div>';
    var delBtn = document.createElement("button"); delBtn.className = "citem-del"; delBtn.innerText = "✕";
    (function (it) { delBtn.onclick = function () { setExactQty(it, 0); }; })(item);
    top.appendChild(delBtn);

    var bot = document.createElement("div"); bot.className = "citem-bot";
    bot.innerHTML = '<div class="citem-prc">' + (item.p * item.q).toFixed(2) + ' m.</div>';
    var qc = document.createElement("div"); qc.className = "qctrl-new";
    var bm = document.createElement("button"); bm.innerText = "‹";
    var qn = document.createElement("span"); qn.innerText = item.q;
    var bp = document.createElement("button"); bp.innerText = "›"; bp.disabled = item.q >= item.max;
    (function (it) {
      bm.onclick = function () { setExactQty(it, it.q - 1); };
      qn.onclick = function () { promptQty(it); };
      bp.onclick = function () { if (it.q < it.max) setExactQty(it, it.q + 1); };
    })(item);
    qc.appendChild(bm); qc.appendChild(qn); qc.appendChild(bp);
    bot.appendChild(qc);

    body.appendChild(top); body.appendChild(bot);
    row.appendChild(imgDiv); row.appendChild(body);
    cl.appendChild(row);
  }

  var delivCost = (subTot > 0 && subTot < 100) ? 20 : 0;
  var grandTot = subTot + delivCost;
  var useCb = document.getElementById("useCbChk").checked;
  var finalPay = useCb ? Math.max(0, grandTot - cbBal) : grandTot;

  document.getElementById("cnt").innerText = c;
  document.getElementById("navCartLbl").innerText = subTot > 0 ? (subTot.toFixed(2) + " m.") : (lang === "tk" ? "Sebet" : "Корзина");
  document.getElementById("sumSub").innerText = "+" + subTot.toFixed(2) + " m.";
  document.getElementById("sumDel").innerText = delivCost > 0 ? ("+" + delivCost.toFixed(2) + " m.") : (lang === "tk" ? "Mugt (0 m.)" : "Бесплатно");
  document.getElementById("sumTot").innerText = grandTot.toFixed(2) + " m.";
  document.getElementById("chkFinalTot").innerText = finalPay.toFixed(2) + " m.";
  document.getElementById("chkDelivTxt").innerText = delivCost > 0
/* === BÖLEK 7/8: SAHYPALAR WE 1688 STILI KAMERA === */
function showTab(t) {
  var s = document.querySelectorAll(".sec"), n = document.querySelectorAll(".nbtn");
  for (var i = 0; i < s.length; i++) s[i].classList.remove("act");
  for (var j = 0; j < n.length; j++) n[j].classList.toggle("act", n[j].getAttribute("data-t") === t);
  document.getElementById("s-" + t).classList.add("act");

  document.getElementById("searchWrap").style.display = (t === "home") ? "block" : "none";
  document.getElementById("filterBar").style.display = (t === "home") ? "grid" : "none";

  if (t === "fav") renderFavs();
  if (t === "orders") renderOrders();
  if (t === "prof") updCbUI();
  if (t === "school") buildSchoolList();
}

function setL(l) {
  lang = l;
  document.getElementById("ltm").classList.toggle("act", l === "tk");
  document.getElementById("lru").classList.toggle("act", l === "ru");
  var els = document.querySelectorAll("[data-tk]");
  for (var i = 0; i < els.length; i++) els[i].innerText = els[i].getAttribute("data-" + l);
  document.getElementById("q").placeholder = l === "tk" ? "Gözleg..." : "Поиск...";
  updCbUI(); initF(); render(); updCart();
}

function updRep() {
  document.getElementById("repSales").innerText = st.s.toFixed(2) + " m";
  document.getElementById("repProfit").innerText = st.p.toFixed(2) + " m";
  document.getElementById("repCount").innerText = st.c;
}

var curSlide = 0;
function goSlide(n) {
  curSlide = n;
  var tr = document.getElementById("slideTrack"), dots = document.querySelectorAll(".sdot");
  if (tr) tr.style.transform = "translateX(-" + (curSlide * 100) + "%)";
  for (var d = 0; d < dots.length; d++) dots[d].classList.toggle("act", d === curSlide);
}
setInterval(function () { goSlide((curSlide + 1) % 3); }, 4000);

document.getElementById("btnClearCart").onclick = function () {
  if (confirm(lang === "tk" ? "Sebedi doly arassalamalymy?" : "Очистить всю корзину?")) {
    cart = []; updCart(); render();
  }
};
document.getElementById("btnOpenCheckout").onclick = function () {
  if (userAddr.nm && !document.getElementById("nm").value) document.getElementById("nm").value = userAddr.nm;
  if (userAddr.ph && !document.getElementById("ph").value) document.getElementById("ph").value = userAddr.ph;
  if (userAddr.ad && !document.getElementById("ad").value) document.getElementById("ad").value = userAddr.ad;
  updCart();
  document.getElementById("chkPage").classList.add("open");
};
document.getElementById("chkBack").onclick = function () { document.getElementById("chkPage").classList.remove("open"); };
document.getElementById("useCbChk").onchange = updCart;

/* KAMERA FUNKSIÝALARY */
var camStream = null, flashOn = false;
function stopCamera() {
  if (camStream) { camStream.getTracks().forEach(function (tr) { tr.stop(); }); camStream = null; }
  flashOn = false;
  document.getElementById("camFlashBtn").classList.remove("on");
}

document.getElementById("btnCam").onclick = function () {
  document.getElementById("scanResultBox").style.display = "none";
  document.getElementById("camPreview").style.display = "none";
  document.getElementById("camNote").value = "";
  document.getElementById("camFull").classList.add("open");
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(function (stream) { camStream = stream; document.getElementById("camVideo").srcObject = stream; })
      .catch(function () {});
  }
};

document.getElementById("camCloseBtn").onclick = function () {
  stopCamera(); document.getElementById("camFull").classList.remove("open");
};

document.getElementById("camFlashBtn").onclick = function () {
  if (!camStream) return;
  var track = camStream.getVideoTracks()[0];
  if (track && track.getCapabilities && track.getCapabilities().torch) {
    flashOn = !flashOn;
    track.applyConstraints({ advanced: [{ torch: flashOn }] });
    this.classList.toggle("on", flashOn);
  }
};

function searchByCamKeywords(kw) {
  var q = kw.toLowerCase();
  var matches = db.filter(function (x) { return x.t.toLowerCase().indexOf(q) > -1 || String(x.id).indexOf(q) > -1; });
  var rb = document.getElementById("scanResultBox"); rb.style.display = "block";
  if (!matches.length) {
    rb.innerHTML = lang === "tk" ? "ℹ️ Bazada tapylmady. Aşakda adyny ýazyp dükana ugradyň:" : "ℹ️ Не найдено. Напишите название ниже и отправьте:";
    return;
  }
  var html = "<b>🔍 Tapylan harytlar:</b><br>";
  for (var i = 0; i < Math.min(3, matches.length); i++) {
    html += '<div style="padding:5px 0;border-bottom:1px solid var(--b);cursor:pointer;display:flex;justify-content:space-between" onclick="openCamProd(\'' + matches[i].id + '\')"><span>' + trText(matches[i].t, lang) + '</span><b>' + matches[i].p + ' m ›</b></div>';
  }
  rb.innerHTML = html;
}

window.openCamProd = function (id) {
  stopCamera(); document.getElementById("camFull").classList.remove("open");
  for (var i = 0; i < db.length; i++) if (db[i].id === id) { openDet(db[i]); break; }
};

document.getElementById("camSnapBtn").onclick = function () {
  var vid = document.getElementById("camVideo"), cv = document.createElement("canvas");
  cv.width = vid.videoWidth || 300; cv.height = vid.videoHeight || 300;
  cv.getContext("2d").drawImage(vid, 0, 0, cv.width, cv.height);
  var prev = document.getElementById("camPreview");
  prev.src = cv.toDataURL("image/jpeg", 0.7); prev.style.display = "block";
  searchByCamKeywords("depder");
};

document.getElementById("camFile").onchange = function (e) {
  var file = e.target.files[0]; if (!file) return;
  var rd = new FileReader();
  rd.onload = function (ev) {
    var prev = document.getElementById("camPreview");
    prev.src = ev.target.result; prev.style.display = "block";
    searchByCamKeywords(file.name.replace(/\.[^/.]+$/, ""));
  };
  rd.readAsDataURL(file);
};

document.getElementById("camNote").onkeyup = function () { if (this.value.trim().length >= 2) searchByCamKeywords(this.value.trim()); };

document.getElementById("btnSendCam").onclick = function () {
  var note = document.getElementById("camNote").value.trim() || "Surat boýunça gözleg";
  var mainMail = m1 || "aycyzuw.tm.arkadag@gmail.com";
  var btn = this; btn.disabled = true; btn.innerText = "...";
  fetch("https://formsubmit.co" + encodeURIComponent(mainMail), {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ _subject: "AÝ-ÇYZUW Kamera Gözlegi", _captcha: "false", Sorag: note, Musderi: userAddr.ph || "Näbelli" })
  }).finally(function () {
    btn.disabled = false; btn.innerText = "📩 Ugrat";
    stopCamera(); document.getElementById("camFull").classList.remove("open");
    alert(lang === "tk" ? "Talabyňyz dükana ugradyldy!" : "Запрос отправлен в магазин!");
  });
};
/* === BÖLEK 8/8: 5 SÜTÜNLİ EXCEL, GMAIL SARGYT WE SAZLAMALAR === */
document.getElementById("btnImport").onclick = function () {
  var raw = document.getElementById("pasteBox").value.trim();
  if (!raw) return alert("Excel maglumatyny goýuň!");
  var lines = raw.split(/\r?\n/), added = 0;
  for (var i = 0; i < lines.length; i++) {
    var cols = lines[i].split("\t");
    if (cols.length < 4) continue;
    var id = cols[0].trim();
    var t = cols[1].trim();
    var cost = parseFloat(String(cols[2]).replace(",", ".")) || 0;
    var p = parseFloat(String(cols[3]).replace(",", ".")) || 0;
    var imgUrl = cols[4] ? cols[4].trim() : "";
    if (!id || !t) continue;

    var autoCat = detectCatSub(t);
    var found = false;
    for (var j = 0; j < db.length; j++) {
      if (String(db[j].id) === id) {
        db[j].t = t; db[j].cost = cost; db[j].p = p;
        db[j].c = autoCat.c; db[j].sub = autoCat.sub;
        if (imgUrl) db[j].img = imgUrl;
        if (db[j].s <= 0) db[j].s = 20;
        found = true; break;
      }
    }
    if (!found) {
      db.push({ id: id, t: t, cost: cost, p: p, s: 20, c: autoCat.c, sub: autoCat.sub, img: imgUrl });
    }
    added++;
  }
  lsSet("ay_db_v15", db); render(); renderStockList(); initF();
  document.getElementById("admStat").innerText = "✅ Ýüklendi: " + added + " | Jemi: " + db.length;
  document.getElementById("pasteBox").value = "";
};

document.getElementById("btnOrd").onclick = function () {
  var nm = document.getElementById("nm").value.trim();
  var ph = document.getElementById("ph").value.trim();
  var ad = document.getElementById("ad").value.trim();
  var nt = document.getElementById("nt").value.trim();
  if (!nm || !ph || !ad) return alert(lang === "tk" ? "Adyňyzy, telefonyňyzy we salgyňyzy ýazyň!" : "Заполните имя, телефон и адрес!");

  var btn = this; btn.disabled = true; btn.innerText = lang === "tk" ? "Iberilýär..." : "Отправка...";
  var det = "", subTot = 0, prof = 0;
  var baseSiteUrl = location.origin + location.pathname.replace(/\/[^\/]*$/, "/");

  for (var i = 0; i < cart.length; i++) {
    var it = cart[i];
    var rawImg = getProdImgUrl(it);
    var fullImgLink = (rawImg.indexOf("http") === 0 || rawImg.indexOf("data:") === 0) ? rawImg : (baseSiteUrl + rawImg);

    det += (i + 1) + ". " + it.t + " [Kod: " + it.id + "]\n";
    det += "   Sany: " + it.q + " | Baha: " + it.p + " m | Jemi: " + (it.p * it.q).toFixed(2) + " m\n";
    det += "   Suraty: " + fullImgLink + "\n\n";

    subTot += it.p * it.q;
    prof += (it.p - (it.cost || 0)) * it.q;
    for (var j = 0; j < db.length; j++) if (db[j].id === it.id) db[j].s = Math.max(0, db[j].s - it.q);
  }

  var delivCost = (subTot > 0 && subTot < 100) ? 20 : 0;
  var grandTot = subTot + delivCost;
  var tierInfo = getCbTier();
  var useCb = document.getElementById("useCbChk").checked;
  var usedAmt = useCb ? Math.min(grandTot, cbBal) : 0;
  var payTot = grandTot - usedAmt;
  var earnedCb = +(subTot * tierInfo.rate).toFixed(2);

  cbBal = +(cbBal - usedAmt + earnedCb).toFixed(2);
  cbMeta.spent = +((cbMeta.spent || 0) + payTot).toFixed(2);
  cbMeta.earned = +((cbMeta.earned || 0) + earnedCb).toFixed(2);
  lsSet("ay_cb", cbBal); lsSet("ay_cb_meta", cbMeta); updCbUI();

  var oid = "#" + String(Date.now()).slice(-5), totStr = payTot.toFixed(2) + " m";
  det += "Harytlar jemi: " + subTot.toFixed(2) + " m | Eltip bermek: " + delivCost.toFixed(2) + " m";
  if (usedAmt > 0) det += "\nUlanylan keşbek: -" + usedAmt.toFixed(2) + " m";
  if (nt) det += "\nMüşderi belligi: " + nt;

  orders.push({ id: oid, nm: nm, ph: ph, ad: ad, det: det, tot: totStr });
  st.s += payTot; st.p += prof; st.c += 1;
  lsSet("ay_db_v15", db); lsSet("ay_orders", orders); lsSet("ay_st", st);

  var mainMail = m1 || "aycyzuw.tm.arkadag@gmail.com";
  var payload = {
    _subject: "AÝ-ÇYZUW Täze Sargyt " + oid + " (" + totStr + ")",
    _template: "table",
    _captcha: "false",
    Sargyt_ID: oid,
    Musderi_Ady: nm,
    Telefon: ph,
    Salgy: ad,
    Bellik: nt || "Ýok",
    Harytlar_we_Suratlar: det,
    Eltip_bermek: delivCost.toFixed(2) + " m",
    Jemi_Toleg: totStr
  };
  if (m2) payload._cc = m2;

  fetch("https://formsubmit.co" + encodeURIComponent(mainMail), {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload)
  }).finally(function () {
    btn.disabled = false; btn.innerText = lang === "tk" ? "Sargyt et" : "Заказать";
    document.getElementById("useCbChk").checked = false;
    document.getElementById("chkPage").classList.remove("open");
    cart = []; updCart(); render();
    alert(lang === "tk" ? "Sargydyňyz kabul edildi! (" + oid + ")" : "Ваш заказ принят! (" + oid + ")");
    showTab("orders");
  });
};

document.getElementById("openSchoolBuilder").onclick = function () { showTab("school"); window.scrollTo({ top: 0, behavior: "smooth" }); };
document.getElementById("backFromSchool").onclick = function () { showTab("home"); };
var tTabs = document.querySelectorAll(".t-tab");
for (var ti = 0; ti < tTabs.length; ti++) {
  tTabs[ti].onclick = function () {
    for (var k = 0; k < tTabs.length; k++) tTabs[k].classList.remove("act");
    this.classList.add("act"); curTier = this.getAttribute("data-tier"); buildSchoolList();
  };
}
document.getElementById("btnAddAllSchool").onclick = function () {
  for (var i = 0; i < curSchoolItems.length; i++) setExactQty(curSchoolItems[i], getCartQty(curSchoolItems[i].id) + curSchoolItems[i].q);
  flyToCart(this);
  alert(lang === "tk" ? curGrade + "-nji synp toplumy sebede goşuldy!" : "Набор для " + curGrade + " класса добавлен!");
};
document.getElementById("detBack").onclick = function () { document.getElementById("detPage").classList.remove("open"); };
document.getElementById("logoBtn").onclick = function () {
  taps++; clearTimeout(tt); tt = setTimeout(function () { taps = 0; }, 800);
  if (taps === 3) { taps = 0; document.getElementById("admLogin").classList.add("open"); } else showTab("home");
};
document.getElementById("ltm").onclick = function () { setL("tk"); };
document.getElementById("lru").onclick = function () { setL("ru"); };
document.getElementById("q").onkeyup = render;
document.getElementById("hideZero").onchange = render;
document.getElementById("clrQ").onclick = function () { document.getElementById("q").value = ""; render(); };
document.getElementById("btnExitCat").onclick = resetAllFilters;
document.getElementById("btnAll").onclick = resetAllFilters;
document.getElementById("chipLow").onclick = function () { fLow = !fLow; this.classList.toggle("act", fLow); document.getElementById("fOnlyLow").checked = fLow; render(); };
document.getElementById("chip10").onclick = function () { fUnder10 = !fUnder10; this.classList.toggle("act", fUnder10); render(); };
document.getElementById("btnSort").onclick = function () { document.getElementById("sm").classList.add("open"); };
document.getElementById("btnFilt").onclick = function () { renderFilterList(); document.getElementById("fm").classList.add("open"); };
document.getElementById("btnApplyF").onclick = function () { fLow = document.getElementById("fOnlyLow").checked; document.getElementById("chipLow").classList.toggle("act", fLow); render(); document.getElementById("fm").classList.remove("open"); };
document.getElementById("btnResetF").onclick = function () { resetAllFilters(); document.getElementById("fm").classList.remove("open"); };
document.getElementById("srt1").onclick = function () { db.sort(function (a, b) { return a.p - b.p; }); render(); document.getElementById("sm").classList.remove("open"); };
document.getElementById("srt2").onclick = function () { db.sort(function (a, b) { return b.p - a.p; }); render(); document.getElementById("sm").classList.remove("open"); };
document.getElementById("goOrd").onclick = function () { showTab("orders"); };
document.getElementById("backProf").onclick = function () { showTab("prof"); };
document.getElementById("goLang").onclick = function () { setL(lang === "tk" ? "ru" : "tk"); };
document.getElementById("goDark").onclick = function () { document.body.classList.toggle("dark"); };
document.getElementById("goAddr").onclick = function () { document.getElementById("svNm").value = userAddr.nm; document.getElementById("svPh").value = userAddr.ph; document.getElementById("svAd").value = userAddr.ad; document.getElementById("addrModal").classList.add("open"); };
document.getElementById("btnSaveAddr").onclick = function () { userAddr = { nm: document.getElementById("svNm").value.trim(), ph: document.getElementById("svPh").value.trim(), ad: document.getElementById("svAd").value.trim() }; lsSet("ay_uaddr", userAddr); document.getElementById("addrModal").classList.remove("open"); alert("Ýatda saklandy!"); };
document.getElementById("goCall").onclick = function () { location.href = "tel:" + String(smsPh).replace(/[^0-9+]/g, ""); };
document.getElementById("goSms").onclick = function () { location.href = "sms:" + String(smsPh).replace(/[^0-9+]/g, ""); };
document.getElementById("btnCheckAdm").onclick = function () {
  if (document.getElementById("admPass").value === admPassSaved) {
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("admMail1").value = m1; document.getElementById("admMail2").value = m2; document.getElementById("admSms").value = smsPh;
    document.getElementById("admStat").innerText = "Jemi haryt sany: " + db.length;
    updRep(); renderStockList(); document.getElementById("admLogin").classList.remove("open"); showTab("prof");
  } else alert("Nädogry parol!");
};
document.getElementById("btnSaveMail").onclick = function () {
  var np = document.getElementById("admNewPass").value.trim();
  if (np) { admPassSaved = np; lsSet("ay_apass", admPassSaved); document.getElementById("admNewPass").value = ""; }
  m1 = document.getElementById("admMail1").value.trim();
  m2 = document.getElementById("admMail2").value.trim();
  smsPh = document.getElementById("admSms").value.trim();
  lsSet("ay_m1", m1); lsSet("ay_m2", m2); lsSet("ay_sms", smsPh);
  alert("Ýatda saklandy!");
};
document.getElementById("btnResetRep").onclick = function () { st = { s: 0, p: 0, c: 0 }; lsSet("ay_st", st); updRep(); };
document.getElementById("btnClear").onclick = function () { if (confirm("Arassalamalymy?")) { localStorage.removeItem("ay_db_v15"); db = githubBaza.slice(); render(); renderStockList(); initF(); } };
document.getElementById("btnLogout").onclick = function () { document.getElementById("adminPanel").style.display = "none"; };
document.getElementById("btnCopyGit").onclick = function () { if (navigator.clipboard) navigator.clipboard.writeText("var githubBaza = " + JSON.stringify(db, null, 2) + ";").then(function () { alert("Kopiýalandy!"); }); };

var nbtns = document.querySelectorAll(".nbtn");
for (var i = 0; i < nbtns.length; i++) nbtns[i].onclick = function () { showTab(this.getAttribute("data-t")); };
var clsBtns = document.querySelectorAll(".cls");
for (var j = 0; j < clsBtns.length; j++) clsBtns[j].onclick = function () { document.getElementById(this.getAttribute("data-m")).classList.remove("open"); };

updCbUI(); initF(); render(); updCart();

