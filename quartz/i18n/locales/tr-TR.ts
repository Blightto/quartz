import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Başlık",
    description: "İçerik sağlanmadı",
  },
  components: {
    callout: {
      note: "Not",
      abstract: "Özet",
      info: "Bilgi",
      todo: "Yapılacaklar",
      tip: "İpucu",
      success: "Başarılı",
      question: "Soru",
      warning: "Uyarı",
      failure: "Başarısız",
      danger: "Tehlike",
      bug: "Hata",
      example: "Örnek",
      quote: "Alıntı",
    },
    backlinks: {
      title: "Geri Bağlantılar",
      noBacklinksFound: "Geri bağlantı bulunamadı",
    },
    themeToggle: {
      lightMode: "Aydınlık Mod",
      darkMode: "Karanlık Mod",
    },
    explorer: {
      title: "Tarayıcı",
    },
    footer: {
      createdWith: "Kullanılarak oluşturuldu",
    },
    graph: {
      title: "Grafik Görünümü",
    },
    recentNotes: {
      title: "En son notlar",
      seeRemainingMore: ({ remaining }) => `{remaining} tane daha gör →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `${targetSlug} içerir`,
      linkToOriginal: "Orijinale bağlantı",
    },
    search: {
      title: "Ara",
      searchBarPlaceholder: "Bir şeyler ara",
    },
    tableOfContents: {
      title: "İçindekiler",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} dakika okuma süresi`,
    },
  },
  pages: {
    rss: {
      recentNotes: "En son notlar",
      lastFewNotes: ({ count }) => `En son ${count} tane not`,
    },
    error: {
      title: "Bulunamadı",
      notFound: "Bu sayfa özel veya böyle bir sayfa yok",
      home: "Ana sayfaya geri dön",
    },
    folderContent: {
      folder: "Dosya",
      itemsUnderFolder: ({ count }) => `Bu dosyada ${count} tane içerik var.`,
    },
    tagContent: {
      tag: "Etiket",
      tagIndex: "Etiket Dizini",
      itemsUnderTag: ({ count }) => `Bu etikete sahip ${count} tane içerik var.`,
      showingFirst: ({ count }) => `İlk ${count} tane etiket gösteriliyor.`,
      totalTags: ({ count }) => `Toplam ${count} tane etiket var.`,
    },
  },
} as const satisfies Translation
