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

### header

```html
<header>
  <h1>Trang Demo</h1>
</header>
```

### nav

```html
<nav>
  <a href="/">Trang chủ</a> | <a href="/bai-viet">Bài viết</a> | <a href="/lien-he">Liên hệ</a>
</nav>
```

### main + section + article

```html
<main>
  <section>
    <h2>Giới thiệu</h2>
    <article>
      <h3>Bài viết mẫu</h3>
      <p>Đây là nội dung minh hoạ.</p>
    </article>
  </section>
</main>
```

### aside

```html
<aside>
  <h3>Mục lục</h3>
  <ol>
    <li>Giới thiệu</li>
    <li>Nội dung</li>
    <li>Kết luận</li>
  </ol>
</aside>
```

### footer

```html
<footer>
  <p>© 2025 Demo Site</p>
</footer>
```

---

## I-3: Văn bản & liên kết

### heading

```html
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
```

### paragraph + inline

```html
<p>Đoạn văn <strong>đậm</strong> <em>nghiêng</em> <mark>đánh dấu</mark> <code>code</code></p>
```

### list

```html
<ul>
  <li>Táo</li>
  <li>Chuối</li>
  <li>Cam</li>
</ul>

<ol>
  <li>B1</li>
  <li>B2</li>
</ol>
```

### link

```html
<a href="/lien-he">Liên hệ</a>
<a href="https://tailwindcss.com" target="_blank" rel="noopener">Tailwind CSS</a>
```

---

## I-4: Ảnh, SVG, video

### img

```html
<img src="https://picsum.photos/640/360" alt="Cảnh thiên nhiên" />
```

### svg

```html
<svg width="48" height="48" viewBox="0 0 24 24" aria-label="Ngôi sao">
  <path d="M12 17.3l-5.4 3.3 1.5-6.1L3 9.7l6.2-.5L12 3.6l2.8 5.6 6.2.5-5.1 4.8 1.5 6.1z" fill="#444"/>
</svg>
```

### video

```html
<video controls>
  <source src="demo.mp4" type="video/mp4">
  Trình duyệt không hỗ trợ video.
</video>
```

---

## I-5: Form cơ bản

### input text

```html
<label for="name">Tên</label>
<input id="name" type="text" placeholder="Nhập tên">
```

### input email

```html
<label for="email">Email</label>
<input id="email" type="email" required>
```

### password

```html
<label for="pw">Mật khẩu</label>
<input id="pw" type="password" minlength="6">
```

### checkbox

```html
<input id="remember" type="checkbox">
<label for="remember">Ghi nhớ đăng nhập</label>
```

### radio

```html
<input id="free" type="radio" name="plan" checked>
<label for="free">Gói Free</label>

<input id="pro" type="radio" name="plan">
<label for="pro">Gói Pro</label>
```

### button

```html
<button type="submit">Đăng nhập</button>
```

---

## I-6: Bảng

### table

```html
<table>
  <thead>
    <tr>
      <th>Từ</th>
      <th>Nghĩa</th>
      <th>Từ loại</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>apple</td><td>quả táo</td><td>danh từ</td></tr>
    <tr><td>run</td><td>chạy</td><td>động từ</td></tr>
    <tr><td>beautiful</td><td>xinh đẹp</td><td>tính từ</td></tr>
  </tbody>
</table>
```

---

## I-7: Meta & SEO cơ bản

### meta description

```html
<meta name="description" content="Website học từ vựng nhanh, dễ nhớ.">
```

### open graph

```html
<meta property="og:title" content="EnglishKid">
<meta property="og:description" content="Kho từ vựng minh hoạ.">
<meta property="og:image" content="https://example.com/cover.png">
```

### favicon

```html
<link rel="icon" href="/favicon.ico">
```

### button vs link

```html
<a href="/pricing">Xem bảng giá</a>
<button type="button">Mở thông báo</button>
```

---

## I-8: Truy cập (a11y)

### heading order

```html
<h1>Trang Demo</h1>
<h2>Mục chính</h2>
<h3>Mục phụ</h3>
```

### img alt

```html
<img src="apple.jpg" alt="Quả táo đỏ" />
<img src="border.png" alt="" />
```

### form label

```html
<label for="email">Email</label>
<input id="email" type="email">

<label for="pw">Mật khẩu</label>
<input id="pw" type="password">
```

### button + link

```html
<a href="/home">Trang chủ</a>
<button>Mở modal</button>
```

### alert

```html
<div role="alert">Đăng nhập thất bại</div>
```

---

## I-9: Mẫu layout nhanh

### card grid

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

### sidebar layout

```html
<section>
  <h2>Sidebar</h2>
  <div>
    <aside>Sidebar</aside>
    <main>Main content</main>
  </div>
</section>
```

---
