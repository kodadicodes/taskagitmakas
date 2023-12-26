// this parametresini secim karşılıyor
function oyunuBaslat (secim){
    // Kullanıcının seçimi
    let kullanicininSecimi = secim.id; // Kullanıcının seçimini alır ve kullanicininSecimi değişkenine atar.

    // PC tarafından oluturulan rastgele seçim
    let rastgeleSayi = Math.floor(Math.random()*3); // 0 ile 3 arasında rastgele bir sayı üretir.
    let bilgisayarSecimi = ["tas","kagit","makas"][rastgeleSayi]; // Rastgele sayıyı kullanarak bir seçim yapar.

    // Puanlamaları dizi şeklinde değişkene aktaralım
    let oyunPuanlamalari = {
        "tas":{"makas":1,"tas":0.5,"kagit":0}, // Taşın diğer seçeneklere karşı kazandığı puanlar.
        "kagit":{"makas":0,"tas":1,"kagit":0.5}, // Kağıdın diğer seçeneklere karşı kazandığı puanlar.
        "makas":{"makas":0.5, "tas":0,"kagit":1} // Makasın diğer seçeneklere karşı kazandığı puanlar.
    } // Oyunun puanlama sistemini tanımlar.

    // Diziden seçimimize karşılık gelen puanı alalım
    let kullanicininPuani = oyunPuanlamalari[kullanicininSecimi][bilgisayarSecimi]; // Kullanıcının puanını hesaplar.

    // Kayıtlı resimlerin kaynak adreslerini alalım
    let kayitliResimler = {
        "tas":document.getElementById("tas").src, // Taş resminin kaynak URL'sini alır.
        "kagit":document.getElementById("kagit").src, // Kağıt resminin kaynak URL'sini alır.
        "makas":document.getElementById("makas").src // Makas resminin kaynak URL'sini alır.
    } // Her seçeneğin karşılık gelen resminin kaynak URL'sini alır.

    // Temiz bir sonuç ekranı için tüm resimleri silelim
    document.getElementById("tas").remove(); // Taş resmini kaldırır.
    document.getElementById("kagit").remove(); // Kağıt resmini kaldırır.
    document.getElementById("makas").remove(); // Makas resmini kaldırır.

    // Sildiğimiz nesnelerin yerine sonuçlar için yeni nesneler oluşturalım
    let kullaniciResmi = document.createElement("img") // Kullanıcının seçimini temsil eden bir resim oluşturur.
    let bilgisayarResmi = document.createElement("img") // Bilgisayarın seçimini temsil eden bir resim oluşturur.
    let sonuc = document.createElement("div") // Sonucu göstermek için bir div oluşturur.

    // Resim nesnelerine secimlere göre uygun kaynakları bağlayalım
    kullaniciResmi.src = kayitliResimler[kullanicininSecimi]; // Kullanıcının seçimine uygun resim kaynağını atar.
    bilgisayarResmi.src = kayitliResimler[bilgisayarSecimi]; // Bilgisayarın seçimine uygun resim kaynağını atar.

    // OLuşturduğumuz resimleri kapsayıcısı altına monte edelim 
    document.getElementById("container").appendChild(kullaniciResmi); // Kullanıcının resmini belirli bir konuma ekler.
    document.getElementById("container").appendChild(bilgisayarResmi); // Bilgisayarın resmini belirli bir konuma ekler.
    document.getElementById("container").appendChild(sonuc); // Sonucu belirli bir konuma ekler.

    // Puana bakarak şart kontrolüyle sonucu yazdıralım
    if (kullanicininPuani==0){
        sonuc.innerHTML="KAYBETTİNİZ" // Kullanıcının puanı 0 ise kaybetti anlamına gelir.
    }
    else if(kullanicininPuani==0.5){
        sonuc.innerHTML="BERABERE" // Kullanıcının puanı 0.5 ise berabere anlamına gelir.
    }
    else{
        sonuc.innerHTML="KAZANDINIZ" // Kullanıcının puanı 1 ise kazandı anlamına gelir.
    }
}
