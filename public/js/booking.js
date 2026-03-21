async function sendBooking() {

    const data = {

        package: document.getElementById("package").value,
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        location: document.getElementById("location").value,
        province: document.getElementById("province").value,
        phone: document.getElementById("phone").value

    }

    const res = await fetch("/api/booking", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })

    const result = await res.json()

    alert("จองสำเร็จ")

}
data.forEach((b, i) => {

    list.innerHTML += `
<div class="booking-card">

<h3>${b.name}</h3>

<p>แพ็กเกจ: ${b.package}</p>
<p>วันที่: ${b.date}</p>
<p>เวลา: ${b.time}</p>

<button onclick="deleteBooking(${i})">ลบ</button>

</div>
`

})