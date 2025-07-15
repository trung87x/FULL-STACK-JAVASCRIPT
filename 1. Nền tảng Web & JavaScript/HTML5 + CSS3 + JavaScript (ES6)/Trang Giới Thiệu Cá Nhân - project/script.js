// 🎨 Thay đổi màu nền
const bgSelector = document.getElementById("bgSelector");
bgSelector.addEventListener("change", () => {
  const color = bgSelector.value;
  if (color) {
    document.body.style.backgroundColor = color;
  }
});

// 📨 Xử lý form liên hệ
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("⚠️ Vui lòng nhập đầy đủ TÊN và EMAIL.");
    return;
  }

  alert("🎉 Cảm ơn bạn đã liên hệ, " + name + "!");
  contactForm.reset();
});
