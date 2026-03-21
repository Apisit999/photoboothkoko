function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    })

}

function toggleMenu() {

    const menu = document.getElementById("navMenu")

    menu.classList.toggle("active")

}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    })
}

function toggleLang() {
    const menu = document.getElementById("lang-options")
    menu.style.display = menu.style.display === "block" ? "none" : "block"
}

function changeLang(lang) {

    setLanguage(lang)

    const flag = document.getElementById("lang-flag")
    const text = document.getElementById("lang-text")

    if (lang === "th") {
        flag.src = "https://flagcdn.com/w20/th.png"
        text.innerText = "ไทย"
    }

    if (lang === "en") {
        flag.src = "https://flagcdn.com/w20/gb.png"
        text.innerText = "English"
    }

    document.getElementById("lang-options").style.display = "none"

}

const translations = {

    th: {

        brand: "KoKo Wedding",

        home: "หน้าแรก",
        services: "บริการ",
        gallery: "รายละเอียด",
        packages: "แพ็กเกจ",
        contact: "ติดต่อ",

        hero_subtitle: "สร้างความทรงจำให้ทุกงานสำคัญของคุณ",

        services_title: "บริการของเรา",
        hero_title: "โฟโต้บูธ โกโก้",

        service1_title: "📸 บริการถ่ายภาพ Photobooth",
        service1_desc: "บริการ Photobooth สำหรับทุกงานสำคัญ",
        service1_desc2: "ถ่ายภาพสนุกๆพร้อมพร็อพหลากหลายและไฟสตูดิโอคุณภาพ",

        service2_title: "🖨 พิมพ์ทันที",
        service2_desc: "พิมพ์ภาพถ่ายได้ทันทีภายในไม่กี่วินาที",
        service2_desc2: "แขกในงานสามารถรับรูปกลับบ้านเป็นที่ระลึกได้ทันที",

        service3_title: "📱 QR Download Photo",
        service3_desc: "ดาวน์โหลดภาพผ่าน QR Code ได้ทันที",
        service3_desc2: "สะดวกรวดเร็วแชร์ลงโซเชียลได้ทันที",

        service4_title: "👨‍💼 ทีมงานดูแลหน้างาน",
        service4_desc: "ทีมงานมืออาชีพคอยดูแลตลอดระยะเวลางาน",
        service4_desc2: "ช่วยจัดท่าถ่ายภาพและดูแลอุปกรณ์ให้พร้อมใช้งาน",

        service5_title: "🖼 Online Gallery",
        service5_desc: "รวมภาพถ่ายทั้งหมดจากภายในงาน",
        service5_desc2: "สามารถเข้าชมและดาวน์โหลดภาพได้ตลอดเวลา",

        gallery_title: "ผลงาน",

        package_title: "แพ็กเกจ",

        start: "เริ่มต้น",
        standard: "มาตรฐาน",
        premium: "พรีเมียม",

        hour2: "2 ชั่วโมง",
        hour3: "3 ชั่วโมง",
        hour4: "4 ชั่วโมง",

        price1: "เริ่มต้น 7,900 บาท",
        price2: "เริ่มต้น 8,900 บาท",
        price3: "เริ่มต้น 9,900 บาท",
        price4: "เริ่มต้น 11,900 บาท",
        price5: "เริ่มต้น 13,900 บาท",
        price6: "เริ่มต้น 15,900 บาท",
        price7: "เริ่มต้น 12,400 บาท",
        price8: "เริ่มต้น 14,400 บาท",
        price9: "เริ่มต้น 16,400 บาท",

        select_package: "เลือกแพ็กเกจ",

        contact_title: "ติดต่อเรา",
        phone: "โทรศัพท์",
        chat_now: "แชททันที",

        footer_text: "© 2026 Photobooth Koko Wedding",

        contact_btn: "📞 ติดต่อเรา",
        contact_desc: "ติดต่อเราได้ทุกช่องทาง ทีมงานผู้เชี่ยวชาญพร้อมให้คำปรึกษาและช่วยเหลือคุณ",

        phone_title: "โทรศัพท์",
        open_time: "เวลาทำการ: 9:00-18:00 น.",
        call_us: "โทรหาเรา",

        line_title: "Line Official",
        line_reply: "ตอบกลับเร็ว ภายใน 10 นาที",

        facebook_title: "Facebook",
        facebook_desc: "ติดตามข่าวสารและอัปเดต",
        facebook_btn: "ไปที่ Facebook",
        instagram_btn: "ไปที่ อินสตาแกรม",
        instagram_desc: "ติดตามภาพผลงานและบรรยากาศงานจริง",
        event_title: "งานอีเวนต์",
        back_btn: "← กลับ",
        party_title: "งานปาร์ตี้",
        wedding_title: "งานแต่งงาน",





    },

    en: {

        brand: "KoKo Wedding",

        home: "Home",
        services: "Services",
        gallery: "Details",
        packages: "Packages",
        contact: "Contact",

        hero_title: "Photobooth KOKO",
        hero_subtitle: "Create memories for your special event",

        services_title: "Our Services",

        service1_title: "📸 Photobooth Service",
        service1_desc: "Photobooth service for all events",
        service1_desc2: "Fun photos with props and studio lighting",

        service2_title: "🖨 Instant Print",
        service2_desc: "Print photos instantly within seconds",
        service2_desc2: "Guests receive printed photos as souvenirs",

        service3_title: "📱 Download the QR image immediately",
        service3_desc: "Download photos instantly via QR Code",
        service3_desc2: "Quickly share to social media",

        service4_title: "👨‍💼 Event Staff",
        service4_desc: "Professional team available throughout the event",
        service4_desc2: "Assist with posing and equipment",

        service5_title: "🖼 Online Gallery",
        service5_desc: "All photos from the event",
        service5_desc2: "View and download anytime",

        gallery_title: "Gallery",

        package_title: "Packages",

        start: "Starter",
        standard: "Standard",
        premium: "Premium",

        hour2: "2 Hours",
        hour3: "3 Hours",
        hour4: "4 Hours",

        price1: "Starting 7,900 THB",
        price2: "Starting 8,900 THB",
        price3: "Starting 9,900 THB",
        price4: "Starting 11,900 THB",
        price5: "Starting 13,900 THB",
        price6: "Starting 15,900 THB",
        price7: "Starting 12,400 THB",
        price8: "Starting 14,400 THB",
        price9: "Starting 16,400 THB",

        select_package: "Select Package",

        contact_title: "Contact Us",
        phone: "Phone",
        chat_now: "Chat Now",

        footer_text: "© 2026 Photobooth Koko Wedding",
        contact_btn: "📞 Contact Us",

        contact_desc: "Contact us through any channel. Our professional team is ready to assist you.",

        phone_title: "Phone",
        open_time: "Business Hours: 9:00 AM - 6:00 PM",
        call_us: "Call Us",

        line_title: "Line Official",
        line_reply: "Fast reply within 10 minutes",

        facebook_title: "Facebook",
        facebook_desc: "Follow news and updates",
        facebook_btn: "Visit Facebook",
        instagram_btn: "Go to Instagram",
        instagram_desc: "Follow the images of the work and the atmosphere of the actual event",
        event_title: "Events",
        back_btn: "← Back",
        party_title: "Parties",
        wedding_title: "Weddings",
    }

}


function setLanguage(lang) {

    document.querySelectorAll("[data-lang]").forEach(el => {

        const key = el.getAttribute("data-lang")

        if (translations[lang][key]) {
            el.innerText = translations[lang][key]
        }

    })

    translateServices(lang)
    translatePackages(lang)
    translateContact(lang)

}


// แปล Services
function translateServices(lang) {

    const cards = document.querySelectorAll("#services .card")

    if (cards.length === 0) return

    cards[0].querySelector("h3").innerText = translations[lang].service1_title
    cards[0].querySelectorAll("p")[0].innerText = translations[lang].service1_desc
    cards[0].querySelectorAll("p")[1].innerText = translations[lang].service1_desc2

    cards[1].querySelector("h3").innerText = translations[lang].service2_title
    cards[1].querySelectorAll("p")[0].innerText = translations[lang].service2_desc
    cards[1].querySelectorAll("p")[1].innerText = translations[lang].service2_desc2

    cards[2].querySelector("h3").innerText = translations[lang].service3_title
    cards[2].querySelectorAll("p")[0].innerText = translations[lang].service3_desc
    cards[2].querySelectorAll("p")[1].innerText = translations[lang].service3_desc2

    cards[3].querySelector("h3").innerText = translations[lang].service4_title
    cards[3].querySelectorAll("p")[0].innerText = translations[lang].service4_desc
    cards[3].querySelectorAll("p")[1].innerText = translations[lang].service4_desc2

    cards[4].querySelector("h3").innerText = translations[lang].service5_title
    cards[4].querySelectorAll("p")[0].innerText = translations[lang].service5_desc
    cards[4].querySelectorAll("p")[1].innerText = translations[lang].service5_desc2

}


// แปล Packages
function translatePackages(lang) {

    const cards = document.querySelectorAll("#pricing .card")

    if (cards.length === 0) return

    cards[0].querySelector("h3").innerText = translations[lang].start
    cards[0].querySelectorAll("p")[1].innerText = translations[lang].hour2
    cards[0].querySelectorAll("p")[2].innerText = translations[lang].price1

    cards[1].querySelector("h3").innerText = translations[lang].start
    cards[1].querySelectorAll("p")[1].innerText = translations[lang].hour3
    cards[1].querySelectorAll("p")[2].innerText = translations[lang].price2

    cards[2].querySelector("h3").innerText = translations[lang].start
    cards[2].querySelectorAll("p")[1].innerText = translations[lang].hour4
    cards[2].querySelectorAll("p")[2].innerText = translations[lang].price3

    cards[3].querySelector("h3").innerText = translations[lang].standard
    cards[3].querySelectorAll("p")[1].innerText = translations[lang].hour2
    cards[3].querySelectorAll("p")[2].innerText = translations[lang].price4

    cards[4].querySelector("h3").innerText = translations[lang].standard
    cards[4].querySelectorAll("p")[1].innerText = translations[lang].hour3
    cards[4].querySelectorAll("p")[2].innerText = translations[lang].price5

    cards[5].querySelector("h3").innerText = translations[lang].standard
    cards[5].querySelectorAll("p")[1].innerText = translations[lang].hour4
    cards[5].querySelectorAll("p")[2].innerText = translations[lang].price6

    cards[6].querySelector("h3").innerText = translations[lang].premium
    cards[6].querySelectorAll("p")[1].innerText = translations[lang].hour2
    cards[6].querySelectorAll("p")[2].innerText = translations[lang].price7

    cards[7].querySelector("h3").innerText = translations[lang].premium
    cards[7].querySelectorAll("p")[1].innerText = translations[lang].hour3
    cards[7].querySelectorAll("p")[2].innerText = translations[lang].price8

    cards[8].querySelector("h3").innerText = translations[lang].premium
    cards[8].querySelectorAll("p")[1].innerText = translations[lang].hour4
    cards[8].querySelectorAll("p")[2].innerText = translations[lang].price9

    document.querySelectorAll(".select-btn").forEach(btn => {
        btn.innerText = translations[lang].select_package
    })

}
// แปล Contact
function translateContact(lang) {

    const section = document.querySelector("#contact")

    if (!section) return

    const t = translations[lang]

    // ปุ่มติดต่อ
    const btn = section.querySelector(".contact-btn")
    if (btn) btn.innerText = t.contact_btn

    // ข้อความหัวข้อ
    const desc = section.querySelector(".contact-header h2")
    if (desc) desc.innerText = t.contact_desc

    // โทรศัพท์
    const phoneTitle = section.querySelector(".phone").parentElement.querySelector("h3")
    if (phoneTitle) phoneTitle.innerText = t.phone_title

    const time = section.querySelector(".time")
    if (time) time.innerText = t.open_time

    const callBtn = section.querySelector('a[href^="tel"]')
    if (callBtn) callBtn.innerText = t.call_us

    // LINE
    const lineCard = section.querySelector(".line").parentElement
    const lineTitle = lineCard.querySelector("h3")
    if (lineTitle) lineTitle.innerText = t.line_title

    const lineDesc = lineCard.querySelector(".desc")
    if (lineDesc) lineDesc.innerText = t.line_reply

    const chatBtn = lineCard.querySelector("a")
    if (chatBtn) chatBtn.innerText = t.chat_now

    // FACEBOOK
    const fbCard = section.querySelector(".facebook").parentElement
    const fbTitle = fbCard.querySelector("h3")
    if (fbTitle) fbTitle.innerText = t.facebook_title

    const fbDesc = fbCard.querySelector(".desc")
    if (fbDesc) fbDesc.innerText = t.facebook_desc

    const fbBtn = fbCard.querySelector("a")
    if (fbBtn) fbBtn.innerText = t.facebook_btn

}



