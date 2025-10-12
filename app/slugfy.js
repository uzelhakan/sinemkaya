export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, '-')     // boşlukları tire yap
    .replace(/[^\w\-]+/g, '') // özel karakterleri sil
    .replace(/\-\-+/g, '-')   // fazla tireyi azalt
    .replace(/^-+/, '')       // baştaki tireyi sil
    .replace(/-+$/, '');      // sondaki tireyi sil
}
