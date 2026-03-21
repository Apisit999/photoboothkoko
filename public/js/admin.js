fetch("/api/bookings")
    .then(res => res.json())
    .then(data => {

        const list = document.getElementById("list")

        list.innerHTML = ""

        data.forEach((b, i) => {

            list.innerHTML += `
<div class="booking-card">

<h3>${b.name}</h3>

<p><b>แพ็กเกจ:</b> ${b.package}</p>
<p><b>วันที่:</b> ${b.date}</p>
<p><b>เวลา:</b> ${b.time}</p>
<p><b>สถานที่:</b> ${b.location}</p>
<p><b>จังหวัด:</b> ${b.province}</p>
<p><b>เบอร์:</b> ${b.phone}</p>

<button class="delete-btn" onclick="deleteBooking(${i})">
ลบ
</button>

</div>
`

        })

    })

async function deleteBooking(id) {

    if (!confirm("ต้องการลบรายการนี้หรือไม่")) {
        return
    }

    await fetch("/api/bookings/" + id, {
        method: "DELETE"
    })

    alert("ลบสำเร็จ")
    location.reload()

}

async function deleteAll() {

    if (!confirm("ต้องการลบข้อมูลทั้งหมดหรือไม่")) {
        return
    }

    await fetch("/api/bookings", {
        method: "DELETE"
    })

    alert("ลบข้อมูลทั้งหมดแล้ว")
    location.reload()

}