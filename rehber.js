const ad = document.getElementById('ad')
const soyad = document.getElementById('soyad')
const email = document.getElementById('mail')
const form = document.getElementById('form-rehber')
const kisiList = document.querySelector('.kisi-listesi')

//event listenerların tanımlanması. butona basıldığında işlemi gerçekleştirir 
form.addEventListener('submit' , kaydet);


//eklenilen değerleri diziye aktarmak için oluşturduk 
const tumKisiDizi = []



function kaydet(e){
    e.preventDefault()
//.value ile objemize degerler aktarıldı                                   
    const eklenecekKisi = {
      ad:ad.value,
      soyad:soyad.value,
      mail:email.value      
    }
    
    const sonuc = veriKontrolEt(eklenecekKisi)
         if(sonuc.durum)
         {
             kisiyiEkle(eklenecekKisi)
  }
         else{
             bilgiOlustur(sonuc.mesaj, sonuc.durum)
         }
}





function kisiyiEkle(eklenecekKisi){
    const olusturlanTRelementi = document.createElement('tr')
    olusturlanTRelementi.innerHTML = `<td>${eklenecekKisi.ad}</td>
    <td>${eklenecekKisi.soyad}</td>
    <td>${eklenecekKisi.mail}</td>
    <td>
        <button class="btn btn--edit"><i class="far fa-edit"></i></button>
        <button class="btn btn--delete"><i class="far fa-trash-alt"></i></button>
        </td>`

 kisiList.appendChild(olusturlanTRelementi)
 tumKisiDizi.push(eklenecekKisi) //eklenilen değerleri diziye aktardık  


}




/*forma boşluklara yazılan değerleri kontrol eder kişi paremetresi 
kaydet fnksiyonunun içindeki eklenecek kişiye ulaşır   const sonuc = veriKontrolEt(eklenecekKisi)
*/

function veriKontrolEt(kisi){
 //objlerde in kullanımı -dizi olsaydı of  
 for(const deger in kisi){
     //! kişi objesi içindeki değerleri gezer ardından altta if kontrolü yapıyoruz 
    if(kisi[deger]){
        console.log("kaydedildi")
  }
  else {

    const sonuc = {
        durum:false,
        mesaj:'boş alan bırakma'
    }
return  sonuc

  }
 }
 alanTemzile()
 return{
     durum:true,
     mesaj: 'Kaydedildi'
 }
}






//ekrana çıkan başarlı veya hata var hatalarını gösteren kısım
                                                                         
function bilgiOlustur(mesaj, durum){
const olusturulanBilgi = document.createElement('div')
olusturulanBilgi.textContent = mesaj
olusturulanBilgi.className = 'bilgi'

/*
if(durum){olusturulanBilgi.classList.add('bilgi--success')}else olusturulanBilgi.classList.add('bilgi--error')}*/ //kısa hali altta 
olusturulanBilgi.classList.add(durum ? 'bilgi--success' : 'bilgi--error')

document.querySelector('.container').insertBefore(olusturulanBilgi,form)

//settimeout  verdiğimiz süre sonnda kodu çalıştırır - setinterval verdiğimiz süre boyunca kodeu çalısıır





setTimeout(function() {

const silinecekDiv = document.querySelector('.bilgi')

//silinecek div true ise yani undifaynd değil ise ekranda sınıfı bilgi olan kutu varsa sil
if(silinecekDiv){
    silinecekDiv.remove()
}

},2000)
}



//boş değerler değişkene atanır 
function alanTemzile(){
    ad.value = ''
    soyad.value = ''
    email.value = ''
}


console.log(tumKisiDizi)