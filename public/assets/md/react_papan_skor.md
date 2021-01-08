
# Web Aplikasi Scoreboard dengan React Hooks

Belajar membangun web React Hooks sederhana

![Photo by [Artem Sapegin](https://unsplash.com/@sapegin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/react?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/10944/1*8yz3hkO3ynHV2qYGARynJg.jpeg)*Photo by [Artem Sapegin](https://unsplash.com/@sapegin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/react?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

Halo teman-teman ini adalah tulisan pertama saya, semoga ini menjadi awal yang baik untuk kita. Point dari tulisan ini adalah belajar tentang React dengan membuat aplikasi papan skor dilengkapi dengan timer. Bagi yang belum familiar dengan React, jangan takut.
> # *“React atau ReactJS adalah library dari Javascript untuk membangun user interface”*

Untuk penjelasan tentang konsep, alasan menggunakan react teman-teman bisa membacanya di halaman home dari web official [**ReactJS](https://reactjs.org)**.

## React Hooks

Pada judul artikel ini ada kata “Hooks” setelah React, nah React Hooks ini adalah pembaruan dari React 16.8 yang memungkinkan membuat komponen dengan state dan fitur lain dari React tanpa menulis sebuah Class, melainkan hanya Function. Dengan begitu ada sedikit perbedaan dalam membangun sebuah web aplikasi menggunakan React Hooks dibanding versi sebelumnya. Dari [**dokumentasinya](https://reactjs.org/docs/hooks-intro.html)**, mereka mengatakan motivasi kenapa mereka memperkenalkan cara baru dalam menulis React adalah, Hooks memecahkan berbagai masalah ketidakterhubungan (*unconnected problem*) yang sudah ditemui sejak 5 tahun kebelakang.

Nah cukup penjelasan sederhananya, sekarang waktunya mulai untuk membangun web aplikasi kita. Berikut adalah *packages* yang akan kita install nantinya pada aplikasi React kita :

[**Styled Components](https://www.styled-components.com/docs/basics#motivation) — **adalah solusi bagaimana mengeksplorasi CSS untuk styling pada komponen React secara optimal.

## Panduan Sederhana :

1. Untuk baris perintah *command-line*, saya tidak *mention* menekan “Enter” untuk menghemat waktu. Silahkan tekan “Enter” setelah mengetik *command*.

1. Saya mengasumsikan teman-teman menggunakan aplikasi *command-line* berbasis UNIX seperti “Power Shell” pada Windows atau “Terminal” pada Mac atau aplikasi pihak ketiga lainnya yang sefungsi.

1. Potongan kode yang diawali dengan “$” mengindikasi bahwa itu “command” dan perlu dijalankan pada aplikasi *command-line* yang saya sebutkan pada poin 2. Selain dari itu adalah *source code* di file aplikasi kita.

Untuk* full source code-*nya di :
[https://github.com/zulnabil/react-scoreboard](https://github.com/zulnabil/react-scoreboard)

## Buat Project

Saya mengasumsikan bahwa komputer kita sudah terinstall NodeJS dan NPM.

Pertama, install package create-react-app secara global :

    $ npm install -g create-react-app

Setelah terinstall, inisialisasi project web aplikasi kita :

    $ create-react-app **react-scoreboard**

Lalu masuk ke direktori project yang baru saja kita buat :

    $ cd **react-scoreboard**

Install package tambahan untuk styling React Component :

    $ npm install **styled-components** —-save

## Let’s Code!

Selanjutnya buka *code editor* kesayangan kita. Disini saya menggunakan [Visual Studio Code](https://code.visualstudio.com/) yang menggunakan perintah ini pada direktori agar langsung menuju pada project kita :

    $ code .

Kemudian buat folder “components” di dalam /src :

![react-scoreboard/src/components](https://cdn-images-1.medium.com/max/2000/1*RNMs9LZ3ylQZc2ehaoA-tg.png)*react-scoreboard/src/components*

### Membuat Component Timer

*Component* ini sebagai timer yang merepresentasi durasi dari permainan seperti misalnya Sepak Bola.
Terimakasih kepada [*Dan Abramov](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) *yang sudah memberi solusi menggunakan *method* “setInterval()” pada React Hooks.
Buat file “Timer.jsx” di dalam folder “components” tadi, kemudian ketikkan atau salin kode di bawah ini :

<iframe src="https://medium.com/media/c5dcbe352b36e3565b9e747f059a20fc" frameborder=0></iframe>

### Membuat Component Score

*Component *ini sebagai fitur yang menampilkan Point dari Score diikuti dengan tombol “Plus” dan “Minus” untuk menambah dan mengurang.
Buat file “Score.jsx” pada folder “components”, dan kodenya di bawah ini :

<iframe src="https://medium.com/media/e1ad954682b6648ea76bf6f2c373c6e6" frameborder=0></iframe>

### Membuat Component Foul

*Component* ini sebagai fitur yang menampilkan Point Foul juga diikuti tombol “Plus” dan “Minus”.
Buat file “Foul.jsx” pada folder “components”, dan kodenya di bawah ini :

<iframe src="https://medium.com/media/37dcec109885d6bfb2556a31f6406c8e" frameborder=0></iframe>

### Membuat Component PanelScoreboard

Setelah membuat beberapa *component* kecil, sekarang kita akan membuat lagi *“*PanelScoreboard” sebagai *parent* yang akan mengimpor *component* sebelumnya sebagai *child-*nya.
Buat file “PanelScoreboard.jsx” pada folder “components”, dan kodenya di bawah ini :

<iframe src="https://medium.com/media/bbb82e43fb5dd30a0d68314053a8cb9b" frameborder=0></iframe>

### Membuat Component InputTeam

Disini kita memerlukan masukan *user* berupa nama Tim A dan Tim B yang akan ditampilkan pada papan skor.
Buat file “InputTeam.jsx” pada folder “components”, dan kodenya di bawah ini :

<iframe src="https://medium.com/media/21d1779c5f6af3848bac3f83fad4047e" frameborder=0></iframe>

### Membuat Component ScoreBoard

Ini adalah *component *terakhir yang akan kita buat semoga teman-teman belum bosan membuat *component* 😃.
“ScoreBoard” akan menjadi *parent* bagi “PanelScoreboard” dan “InputTeam” yang mengandung validasi ketika *user* sudah memasukkan nama tim, panel papan skor akan muncul dan siap bermain. Berikut kodenya :

<iframe src="https://medium.com/media/fb0854336636c7b949171c46f9a867a2" frameborder=0></iframe>

### Mengedit App.js

Hal yang terakhir harus dilakukan adalah mengedit file “App.js” di folder “/src”, *replace* semua kodenya dengan kode ini :

<iframe src="https://medium.com/media/c9405530a18c3d217a3cf3d9aba29f51" frameborder=0></iframe>

## Menjalankan Local Server

Setelah kita cukup lelah membuat beberapa komponen di atas, sekarang waktunya menguji web aplikasi kita dengan menjalankannya.

Menjalankan React Project cukup dengan perintah berikut pada direktori project kita :

    $ npm start

Tunggu beberapa saat lalu secara otomatis *browser *kita membuka alamat [http://localhost:3000](http://localhost:3000) dan taraaaa web aplikasi kita berjalan dengan baik 😄

Untuk* full source code-*nya di :
[https://github.com/zulnabil/react-scoreboard](https://github.com/zulnabil/react-scoreboard)

![](https://cdn-images-1.medium.com/max/2000/1*1R4SOBGwHiAe3Je-WF7srw.gif)

![](https://cdn-images-1.medium.com/max/2000/1*wRz_7fULiWi-QjxXeIqi_g.gif)
