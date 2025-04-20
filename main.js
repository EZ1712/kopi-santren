
const audio = document.getElementById('audio')
const monitor = document.getElementById('monitor')

document.addEventListener('click', function() {
    var audio = document.getElementById('myAudio')
    audio.onplay()
})

function pause() {
    var audio = document.getElementById('audio')
    audio.pause()
}

monitor.addEventListener('click', function() {
    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
})

const quotesList = [
    "CHILL YOUR MIND",
    "kopi bukanlah hanya minuman, tapi juga cerita dan kenangan",
    "EAT | SLEEP | COFFE | REPEAT",
    "LIFE BEGINS AFTER COFFEE",
    "Cobalt[Co] Flourine[F] Iron[Fe] ",
    "Coffee makes everything better",
    "I NEED A HUGe cup of coffee",
    "ideas come after coffee",
    "LIFE IS SIMPLE",
    "GOOD MOOD BY COFFEE"
];

let currentIndex = 0;

function quotes() {
    var quotes = document.getElementById("quotes");
    quotes.innerText = quotesList[currentIndex];
    currentIndex = (currentIndex + 1) % quotesList.length;

}
setInterval(quotes,2500)

const image = document.getElementById("imgSub")
function changeImage() {
    var gambar = document.getElementById("picture");
    gambar.src = "asset/homepage-img2.jpeg";
    var title = document.getElementById("title")
    title.innerText = "Barista di Sudut Kota: Menyajikan Rasa, Meracik Cerita"
    var description = document.getElementById("description")
    description.innerText = "Aroma kopi yang harum memenuhi udara pagi yang sejuk. Mereka dengan cekatan menuangkan espresso dan menghias latte. Para pelanggan mulai berdatangan, memesan kopi favorit mereka. Suasana hangat tercipta dari senyuman barista dan kopi yang disajikan"
    
}

function changeImage2() {
    var gambar = document.getElementById("picture")
    gambar.src = "asset/homepage-img3.jpeg"
    var title = document.getElementById("title")
    title.innerText = "TRAINING"
    var description = document.getElementById("description")
    description.innerText = "Untuk menjaga dan meningkatkan kualitas kopi, kami tim barista selalu belajar dan bereksperimen untuk menciptakan kopi yang berkualitas dengan rasa yang nikmat"
}

function changeImage3() {
    var gambar = document.getElementById("picture")
    gambar.style.width = "auto"
    gambar.src = "asset/homepage-img.jpeg"
    var title = document.getElementById("title")
    title.innerText = "STUDI BANDING"
    var description = document.getElementById("description")
    description.innerText = "Ini adalah ketika kami sedang berkunjung ke cafe yang terkenal dengan kopi yang berkualitas tinggi dengan suasana yang nyaman. selama kunjungan kami mempelajari teknik pembuatan kopi yang baru dan berbagi pengalaman dengan barista lokal"
}


function up() {
    window.scrollTo(0,0)
}

const instagram = document.getElementById('instagram')
const facebook = document.getElementById('facebook')
const x = document.getElementById('x')
const discord = document.getElementById('discord')
const pixiv = document.getElementById('pixiv')
const github = document.getElementById('github')

function changeProfile1() {
    var imgProfile = document.getElementById("imgProfile")
    imgProfile.src = "asset/profile/sochi-profile.png"
    var name = document.getElementById("name")
    name.innerText = "SHOCHICHUL MUSLIM"
    var role = document.getElementById("role")
    role.innerText = "TRAINER"
    var quotesProfile = document.getElementById("quotesProfile")
    quotesProfile.innerText = '"If you do something you get the best thing, if you do nothing you get the worsting"'

    instagram.href = 'https://www.instagram.com/sochichulmuslim/?__pwa=1'
    instagram.style.display = "block"
    facebook.style.display = "none"
    x.style.display = "none"
    discord.style.display = "none"
    pixiv.style.display = "none"
    github.style.display = "none"
}

function changeProfile2() {
    var imgProfile = document.getElementById("imgProfile")
    imgProfile.src = "asset/profile/enza-profile.png"
    var name = document.getElementById("name")
    name.innerText = "ENZA SABRI SABILILLAH"
    var role = document.getElementById("role")
    role.innerText = "BARISTA"
    var quotesProfile = document.getElementById("quotesProfile")
    quotesProfile.innerText = '"laki-laki tulus tidak gila wanita, tapi bisa gila hanya karna satu wanita (walaupun tidak nyata)"'
    instagram.href = 'https://www.instagram.com/rizak_istinafiyan/?__pwa=1'
    facebook.href = 'https://web.facebook.com/kang.nolep.838367/'
    x.href = 'https://x.com/kangnoleplah?t=xtSdm1e7mBOUElX1_eUpuQ&s=08'
    discord.href = 'https://discordapp.com/users/1229008700254064720'
    pixiv.href = 'https://www.pixiv.net/en/users/95968432'
    github.href = 'https://github.com/EZ1712'

    instagram.style.display = "block"
    facebook.style.display = "block"
    x.style.display = "block"
    discord.style.display = "block"
    pixiv.style.display = "block"
    github.style.display = "block"
 }

 function changeProfile3() {
    var imgProfile = document.getElementById("imgProfile")
    imgProfile.src = "asset/profile/fardan-profile.png"
    var name = document.getElementById("name")
    name.innerText = "FARDAN FATHUR RAHMAN"
    var role = document.getElementById("role")
    role.innerText = "BARISTA"
    var quotesProfile = document.getElementById("quotesProfile")
    quotesProfile.innerText = '"Suro Diro Joyo ningrat lembur dining Pangastuti bahwa segala Angkara murka akan dengan seribu kebaikan"'

    instagram.href = 'https://www.instagram.com/fardanfathur24/?__pwa=1'
    facebook.style.display = "none"
    x.style.display = "none"
    discord.style.display = "none"
    pixiv.style.display = "none"
    github.style.display = "none"
}

function changeProfile4() {
    var imgProfile = document.getElementById("imgProfile")
    imgProfile.src = "asset/profile/asrof-profile.png"
    var name = document.getElementById("name")
    name.innerText = "ASYROF RAMADHAN"
    var role = document.getElementById("role")
    role.innerText = "BARISTA"
    var quotesProfile = document.getElementById("quotesProfile")
    quotesProfile.innerText = '"Dipuji tidak melambung,dicaci tidak tumbang"'

    instagram.href = 'https://www.instagram.com/___srop___/?__pwa=1'
    facebook.style.display = "none"
    x.style.display = "none"
    discord.style.display = "none"
    pixiv.style.display = "none"
    github.style.display = "none"
}

function changeProfile5() {
    var imgProfile = document.getElementById("imgProfile")
    imgProfile.src = "asset/profile/anaz-profile.png"
    var name = document.getElementById("name")
    name.innerText = "ANAZ NUR AKBAR"
    var role = document.getElementById("role")
    role.innerText = "BARISTA"
    var quotesProfile = document.getElementById("quotesProfile")
    quotesProfile.innerText = '"klo di kabulkan berarti baik, klo tidak berarti ada yang lebih baik"'

    instagram.href = 'https://www.instagram.com/n4z_04/?__pwa=1'
    facebook.href = 'https://web.facebook.com/abay.abayakbar.5'
    facebook.style.display = "block"
    x.style.display = "none"
    discord.style.display = "none"
    pixiv.style.display = "none"
    github.style.display = "none"
}

function changeProfile6() {
    var imgProfile = document.getElementById("imgProfile")
    imgProfile.src = "asset/profile/seno-profile.png"
    var name = document.getElementById("name")
    name.innerText = "ADI SENO"
    var role = document.getElementById("role")
    role.innerText = "BARISTA"
    var quotesProfile = document.getElementById("quotesProfile")
    quotesProfile.innerText = '"kapan yah adalah caraku menunjukan bahwa aku juga mw"'

    instagram.href = "https://www.instagram.com/maverickkk28_?igsh=MThyOWJuY2ZiZHlueQ%3D%3D"
    facebook.style.display = "none"
    x.style.display = "none"
    discord.style.display = "none"
    pixiv.style.display = "none"
    github.style.display = "none"
}