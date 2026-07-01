# 7aDy.bug 官方網站

淡江大傳系第 41 屆畢製行銷組「7aDy.bug」的對外形象網站。
概念：**「我們幫品牌 Debug」**——瓢蟲（ladybug）× Debug，找出問題、解決問題。
純靜態網站（HTML / CSS / vanilla JS），無任何框架、無需付費、無需伺服器。

## 檔案結構

```
7adybug-site/
├── index.html      首頁（品牌主張、三步驟、數據）
├── about.html      團隊（故事、七位成員、技能、經歷）
├── works.html      作品（視覺 / 競賽 / 新聞 / 影音 / 社群）
├── services.html   服務與方案（六大服務、流程、三種預算方案）
├── contact.html    聯絡（表單 + Email/IG/電話）
├── styles.css      全站樣式（設計系統）
├── script.js       互動（游標、打字機、滾動浮現、數字跳動）
└── assets/         之後放照片 / logo 的資料夾
```

## 怎麼免費上線（三選一，都 0 元）

1. **Netlify Drop（最快，拖曳即可）**
   到 https://app.netlify.com/drop ，把整個 `7adybug-site` 資料夾拖進去，馬上得到一個網址。之後可在設定改成自訂網域。
2. **GitHub Pages**：把資料夾上傳到一個 GitHub repo → Settings → Pages → 選 main 分支 → 完成。
3. **Cloudflare Pages / Vercel**：連結 GitHub repo 或直接上傳，免費方案即可。

## 之後要換上「真的東西」（我先用佔位）

- **成員照片**：`about.html` 目前用姓氏字母頭像。把七張去背/方形照片放進 `assets/`，再把每張 `.avatar` 換成 `<img>` 即可（要我幫你改就說一聲，也可以直接從你們的履歷 PDF 幫你裁圖）。
- **作品圖 / 影片**：`works.html` 目前是文字卡。可加上作品縮圖或 IG/YouTube 連結。
- **聯絡表單**：`contact.html` 的表單用 **formsubmit.co** 寄到 `77ady.bug@gmail.com`。
  ⚠️ **第一次有人送出表單時，Gmail 會收到一封 formsubmit 的啟用確認信，點一下啟用後，之後的訊息才會正常寄達。**

## 我為了「誠實」做的一個決定

履歷 PDF 裡的「預算方案」頁，是用其他組別（怪本室、七曜計劃、HERstory…）過去替品牌做的案例，來示意各價位能做到什麼。
放到你們自己的官網上，若直接把那些案例當成 7aDy.bug 的作品會造成誤解，所以我把「預算方案」改寫成**乾淨的三種價位級距 + 交付內容**（不掛別組的品牌/IG）。作品頁只放你們自己真正做過的東西。
（這跟我先前批評 STONE9「合作對象頁誤導」是同一個原則。）
```
