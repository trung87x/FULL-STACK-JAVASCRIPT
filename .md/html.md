# HTML

## R: Mục lục

- [R-1: Khung tài liệu tối thiểu](#i-1-khung-tài-liệu-tối-thiểu)
- [R-2: Thẻ ngữ nghĩa thường dùng](#i-2-thẻ-ngữ-nghĩa-thường-dùng)
- [R-3: Văn bản & liên kết](#i-3-văn-bản--liên-kết)
- [R-4: Ảnh, SVG, video](#i-4-ảnh-svg-video)
- [R-5: Form cơ bản](#i-5-form-cơ-bản)
- [R-6: Bảng](#i-6-bảng)
- [R-7: Meta & SEO cơ bản](#i-7-meta--seo-cơ-bản)
- [R-8: Truy cập (a11y)](#i-8-truy-cập-a11y)
- [R-9: Mẫu layout nhanh](#i-9-mẫu-layout-nhanh)

---

## I-1: Khung tài liệu tối thiểu

```html
<!-- Cấu trúc HTML cơ bản -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

---

## I-2: Thẻ ngữ nghĩa thường dùng

```html
<!-- Header -->
<header>
  <h1>Trang Demo</h1>
</header>
```

```html
<!-- Navigation -->
<nav>
  <a href="/">Trang chủ</a> | <a href="/bai-viet">Bài viết</a> |
  <a href="/lien-he">Liên hệ</a>
</nav>
```

```html
<!-- Main content -->
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

```html
<!-- Sidebar -->
<aside>
  <h3>Mục lục</h3>
  <ol>
    <li>Giới thiệu</li>
    <li>Nội dung</li>
    <li>Kết luận</li>
  </ol>
</aside>
```

```html
<!-- Footer -->
<footer>
  <p>© 2025 Demo Site</p>
</footer>
```

---

## I-3: Văn bản & liên kết

```html
<!-- Heading -->
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
```

```html
<!-- Paragraph -->
<p>
  Đoạn văn <strong>đậm</strong> <em>nghiêng</em> <mark>đánh dấu</mark>
  <code>code</code>
</p>
```

```html
<!-- List -->
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

```html
<!-- Link -->
<a href="/lien-he">Liên hệ</a>
<a href="https://tailwindcss.com" target="_blank" rel="noopener">
  Tailwind CSS
</a>
```

---

## I-4: Ảnh, SVG, video

```html
<!-- Image -->
<img src="https://picsum.photos/640/360" alt="Cảnh thiên nhiên" />
```

```html
<!-- SVG -->
<svg width="48" height="48" viewBox="0 0 24 24" aria-label="Ngôi sao">
  <path
    d="M12 17.3l-5.4 3.3 1.5-6.1L3 9.7l6.2-.5L12 3.6l2.8 5.6 6.2.5-5.1 4.8 1.5 6.1z"
    fill="#444"
  />
</svg>
```

---

## I-5: Form cơ bản

```html
<!-- Form -->
<label for="name">Tên</label>
<input id="name" type="text" placeholder="Nhập tên" />
```

---

## I-6: Bảng

```html
<!-- Table -->
<table>
  <thead>
    <tr>
      <th>Từ</th>
      <th>Nghĩa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>apple</td>
      <td>quả táo</td>
    </tr>
    <tr>
      <td>run</td>
      <td>chạy</td>
    </tr>
    <tr>
      <td>beautiful</td>
      <td>xinh đẹp</td>
    </tr>
  </tbody>
</table>
```

---

## I-7: Meta & SEO cơ bản

```html
<!-- Meta SEO -->
<meta name="description" content="Website học từ vựng nhanh, dễ nhớ." />
```

```html
<!-- Open Graph -->
<meta property="og:title" content="EnglishKid" />
<meta property="og:description" content="Kho từ vựng minh hoạ." />
<meta property="og:image" content="https://example.com/cover.png" />
```

```html
<!-- Favicon -->
<link rel="icon" href="/favicon.ico" />
```

```html
<!-- Button & Link -->
<a href="/pricing">Xem bảng giá</a>
<button type="button">Mở thông báo</button>
```

---

## I-8: Truy cập (a11y)

```html
<!-- Heading hợp lý -->
<h1>Trang Demo</h1>
<h2>Mục chính</h2>
<h3>Mục phụ</h3>
```

```html
<!-- Alt text -->
<img src="apple.jpg" alt="Quả táo đỏ" />
<img src="border.png" alt="" />
```

```html
<!-- Thay cho <header> -->
<div role="banner">Header trang</div>
<!-- Thông báo khẩn -->
<div role="alert">Đăng nhập thất bại</div>
<!-- Hộp thoại -->
<div role="dialog">Đây là dialog</div>
<!-- Nút bấm -->
<span role="button" tabindex="0">Bấm vào đây</span>
```

---

## I-9: Mẫu layout nhanh

```html
<!-- Card grid -->
<section>
  <h2>Card grid</h2>
  <div>
    <article>Card 1</article>
    <article>Card 2</article>
    <article>Card 3</article>
  </div>
</section>
```
