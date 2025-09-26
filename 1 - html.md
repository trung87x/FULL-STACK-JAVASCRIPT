# ✅ TỔNG HỢP 10 NGỮ CẢNH HTML CƠ BẢN

---

## I-1: Khung tài liệu tối thiểu

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

---

## I-2: Thẻ ngữ nghĩa thường dùng

```html
<header>
  <h1>Trang Demo</h1>
</header>

<nav>
  <a href="/">Trang chủ</a> | <a href="/bai-viet">Bài viết</a> |
  <a href="/lien-he">Liên hệ</a>
</nav>

<main>
  <section>
    <h2>Giới thiệu</h2>
    <article>
      <h3>Bài viết mẫu</h3>
      <p>Đây là nội dung bài viết minh hoạ cho cấu trúc HTML ngữ nghĩa.</p>
    </article>
  </section>

  <aside>
    <h3>Mục lục</h3>
    <ol>
      <li>Giới thiệu</li>
      <li>Nội dung chính</li>
      <li>Kết luận</li>
    </ol>
  </aside>
</main>

<footer>
  <p>© 2025 Demo Site</p>
</footer>
```

---

## I-3: Văn bản & liên kết

```html
<h1>Trang Demo Văn bản</h1>
<h2>Phần phụ 1</h2>
<h3>Mục nhỏ hơn</h3>

<p>Đây là một đoạn văn bản đơn giản để minh họa.</p>
<p>
  Đoạn này có <strong>từ in đậm</strong>, <em>từ in nghiêng</em>,
  <mark>được đánh dấu</mark>, và một đoạn <code>code</code>.
</p>

<h2>Danh sách</h2>
<ul>
  <li>Táo</li>
  <li>Chuối</li>
  <li>Cam</li>
</ul>

<ol>
  <li>Bước 1: Mở file HTML</li>
  <li>Bước 2: Chỉnh sửa nội dung</li>
  <li>Bước 3: Lưu lại</li>
</ol>

<h2>Liên kết</h2>
<p>
  Đây là
  <a href="https://tailwindcss.com" target="_blank" rel="noopener"
    >tài liệu Tailwind CSS</a
  >
  (mở tab mới).
</p>
<p>Đây là <a href="/lien-he">trang liên hệ</a> (điều hướng trong site).</p>
```

---

## I-4: Ảnh, SVG, video

```html
<img src="https://picsum.photos/640/360" alt="Cảnh thiên nhiên với núi và hồ" />

<svg
  width="48"
  height="48"
  viewBox="0 0 24 24"
  aria-label="Biểu tượng ngôi sao"
  role="img"
>
  <path
    d="M12 17.3l-5.4 3.3 1.5-6.1L3 9.7l6.2-.5L12 3.6l2.8 5.6 6.2.5-5.1 4.8 1.5 6.1z"
    fill="#444"
  />
</svg>
```

---

## I-5: Form cơ bản

```html
<label for="q">Tìm kiếm</label>
<input id="q" name="q" type="search" class="border" placeholder="Nhập từ khoá">
```

---

## I-6: Bảng

```html
<thead>
  <tr>
    <th>Từ</th>
    <th>Nghĩa</th>
    <th>Từ loại</th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>apple</td>
    <td>quả táo</td>
    <td>danh từ</td>
  </tr>
  <tr>
    <td>run</td>
    <td>chạy</td>
    <td>động từ</td>
  </tr>
  <tr>
    <td>beautiful</td>
    <td>xinh đẹp</td>
    <td>tính từ</td>
  </tr>
</tbody>
```

---

## I-7: Meta & SEO cơ bản

```html
<meta name="description" content="Website học từ vựng tiếng Anh nhanh chóng, dễ nhớ và thân thiện với mọi người.">

<meta property="og:title" content="EnglishKid - Học từ vựng nhanh">
<meta property="og:description" content="Kho từ vựng có ví dụ minh hoạ, hỗ trợ tìm kiếm nhanh.">
<meta property="og:image" content="https://example.com/cover.png">

<link rel="icon" href="/favicon.ico">

<h1>Meta & SEO cơ bản</h1>

<a href="/pricing">Xem bảng giá</a>

<button type="button" onclick="alert('Bạn đã nhấn nút!')">Mở thông báo</button>
```

---

## I-8: Truy cập (a11y) tối thiểu cần nhớ

```html
<h1>Trang Demo A11y</h1>
<h2>Mục chính</h2>
<h3>Mục phụ</h3>

<img src="apple.jpg" alt="Quả táo đỏ tươi" />
<img src="border.png" alt="" />

<form>
  <div>
    <label for="email">Email</label>
    <input id="email" type="email" name="email" />
  </div>
  <div>
    <label for="pw">Mật khẩu</label>
    <input id="pw" type="password" name="pw" />
  </div>
  <button type="submit">Đăng nhập</button>
</form>

<a href="/home">Trang chủ</a>
<button type="button">Mở modal</button>

<div role="alert" aria-live="assertive">
  Đăng nhập thất bại. Vui lòng thử lại.
</div>
```

---

## I-9: Mẫu layout nhanh (Grid/Flex)

### Card grid 3 cột responsive

```html
<section>
  <h2>Card grid</h2>
  <div>
    <article>Card 1</article>
    <article>Card 2</article>
    <article>Card 3</article>
  </div>
</section>
```

### Sidebar layout

```html
<section>
  <h2>Sidebar layout</h2>
  <div>
    <aside>Sidebar</aside>
    <main>Main content</main>
  </div>
</section>
```
---
croll-smooth`.  
