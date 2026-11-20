// Cole aqui o LINK (ou só o ID) do vídeo do YouTube de cada país.
// Aceita: https://www.youtube.com/watch?v=XXXXXXXXXXX · https://youtu.be/XXXXXXXXXXX · .../embed/XXXXXXXXXXX · .../shorts/XXXXXXXXXXX · ou só o ID.
// Se um país ficar vazio, o site usa o vídeo de "en" (inglês) como reserva.
//
// URL final -> chave usada:
//   seusite.com/           -> en
//   seusite.com/hungary    -> hungary     seusite.com/slovakia -> slovakia
//   seusite.com/czechia    -> czechia     seusite.com/poland   -> poland
//   seusite.com/croatia    -> croatia     seusite.com/serbia   -> serbia
//   seusite.com/romania    -> romania     seusite.com/bulgaria -> bulgaria
const COUNTRY_CONFIG = {
  en:       { youtubeId: "COLE_O_LINK_AQUI" },
  hungary:  { youtubeId: "COLE_O_LINK_AQUI" },
  slovakia: { youtubeId: "COLE_O_LINK_AQUI" },
  czechia:  { youtubeId: "COLE_O_LINK_AQUI" },
  poland:   { youtubeId: "COLE_O_LINK_AQUI" },
  croatia:  { youtubeId: "COLE_O_LINK_AQUI" },
  serbia:   { youtubeId: "COLE_O_LINK_AQUI" },
  romania:  { youtubeId: "COLE_O_LINK_AQUI" },
  bulgaria: { youtubeId: "COLE_O_LINK_AQUI" }
};
// Link de checkout único (igual em todas as rotas, preço €99)
const CHECKOUT_URL = "#checkout";
