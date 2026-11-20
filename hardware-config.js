// Edite livremente: fornecedores (HARDWARE_VENDORS) e quais aparecem em cada país (HARDWARE_CONFIG).
// type: "sw" = software · "hw" = catraca/hardware · "both" = os dois
const HARDWARE_VENDORS = {
  termalsoft: { name: "TermálSoft",                 model: "",                       type: "sw",   color: "#0D9488" },
  gantner:    { name: "Gantner",                    model: "GAT Relaxx · Net.Access", type: "both", color: "#2563EB" },
  cominfo:    { name: "Cominfo",                    model: "",                       type: "sw",   color: "#7C3AED" },
  enigoo:     { name: "Enigoo / AISY",              model: "",                       type: "sw",   color: "#DB2777" },
  metra:      { name: "Metra",                      model: "SPA / Engineering",      type: "sw",   color: "#EA580C" },
  zkteco:     { name: "ZKTeco",                     model: "InBio / Pro",            type: "hw",   color: "#16A34A" },
  bgpms:      { name: "Spa / Hotel PMS",  model: "",                       type: "sw",   color: "#0369A1" },
  baltic:     { name: "Baltic Spa Systems",         model: "",                       type: "sw",   color: "#0891B2" },
  generic:    { name: "Generic RFID",               model: "",                       type: "hw",   color: "#64748B" }
};
const HARDWARE_CONFIG = [
  { flags:["hu"], name:"Magyarország", en:"Hungary",   accent:"#477050", vendors:["termalsoft","gantner","cominfo"] },
  { flags:["sk"], name:"Slovensko",    en:"Slovakia",  accent:"#0B4EA2", vendors:["termalsoft","gantner","cominfo"] },
  { flags:["cz"], name:"Česko",        en:"Czechia",   accent:"#D7141A", vendors:["enigoo","gantner","cominfo"] },
  { flags:["pl"], name:"Polska",       en:"Poland",    accent:"#DC143C", vendors:["gantner","zkteco","generic"] },
  { flags:["hr"], name:"Hrvatska",     en:"Croatia",   accent:"#171796", vendors:["metra","zkteco"] },
  { flags:["rs"], name:"Srbija",       en:"Serbia",    accent:"#C6363C", vendors:["metra","zkteco"] },
  { flags:["si"], name:"Slovenija",    en:"Slovenia",  accent:"#005DA4", vendors:["metra","zkteco"] },
  { flags:["ro"], name:"România",      en:"Romania",   accent:"#002B7F", vendors:["generic","zkteco"] },
  { flags:["bg"], name:"България",     en:"Bulgaria",  accent:"#00966E", vendors:["bgpms","generic"] },
  { flags:["al"], name:"Shqipëria",    en:"Albania",   accent:"#E41E20", vendors:["bgpms","generic"] },
  { flags:["lt","lv","ee"], name:"Baltics", en:"Lithuania · Latvia · Estonia", accent:"#006A44", vendors:["baltic","generic"] }
];
