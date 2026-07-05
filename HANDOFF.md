# 7aDy.bug 官網 · 完整交接與記憶檔

> 用途:1) 給組員看懂網站怎麼運作、怎麼改;2) 給接手的人（或 AI）一次掌握全部脈絡。**動手前先讀這份。**
> 最後更新:2026-07（v5 Brand Debug Lab，已上線根網域；配色已改封面紅黃藍、字距已放鬆）

---

## 1. 這是什麼

**7aDy.bug**（唸作 ladybug）＝ 淡江大學大眾傳播學系**第 41 屆畢業製作行銷組**的**招商官網**。
目的:讓**企業/廠商**看完覺得「這組專業、有創意、值得合作」，願意找我們做整合行銷、社群內容、線下活動、O2O 展演。

- 品牌概念:**Brand Debug Lab（品牌偵錯實驗室）**——名字＝瓢蟲（ladybug）＋ Debug，「替品牌找出卡住成長的 bug，再把它修好」。
- 風格:手作企劃檔案室 × 品牌診斷報告，活潑又專業。主軸「抓 bug」貫穿全站，**別稀釋掉**（這是跟另一組 STONE9 最大的區隔）。

## 2. 網址與託管（重要）

| 用途 | 網址 |
|---|---|
| **正式網址（給廠商就給這個）** | **https://meganlin0000.github.io** |
| 備援（舊網址，也還通） | https://meganlin0000.github.io/ladybug/ |

- 託管:**GitHub Pages（免費）**，帳號 `Meganlin0000`。
- **兩個 repo，內容一樣**:`meganlin0000.github.io`（正式根網址）＋ `ladybug`（備援）。
- 本機工作資料夾:**`~/Desktop/7adybug-site/`**（唯一，之前桌面那個 `meganlin0000.github.io/` 重複資料夾已被刪掉，不用管）。
- git 有兩個 remote:`origin`→ladybug、`usersite`→meganlin0000.github.io。

## 3. 團隊與聯絡

| id | 姓名 | 角色 |（照片＝`assets/team/0X.jpg`）
|--|--|--|
|01|吳苡榛|行銷企劃|
|02|陳曉恩|行銷企劃|
|03|林采頤|行銷企劃 / 財務|
|04|李汭琳|統籌|
|05|李宜臻|視覺設計|
|06|賴欣妤|社群影音 / 公關|
|07|李佩芹|社群影音 / 視覺設計|

Email `77ady.bug@gmail.com`｜IG `@7ady.bug_`｜電話 `0908 787 823`
⚠️ 照片↔姓名是我看照片配的，**請組員再核對**。

## 4. 檔案結構

```
index.html     首頁（七區:Hero 報告拼貼→品牌bug memo→Debug 5步→服務→案例→合作方向→CTA）
about.html     團隊（故事、成員檔案卡、技能、經歷）
works.html     作品案例（4 案例卡 + 更多作品）
services.html  服務與方案（6 服務 + 5步流程 + 3 合作方向）
contact.html   聯絡（品牌諮詢表單，7 欄位）
member.html    單一成員頁（?id=01~07，內容由 members.js 帶入）
404.html       找不到頁面（5 秒自動回首頁）
styles.css     ⭐ 全站樣式（改配色/間距來這，最上面 :root）
script.js      互動（GSAP 捲動動畫、Lenis 平滑捲動、成員卡/表單/錨點捲動）
members.js     ⭐ 七位成員的姓名/角色/介紹(bio)/專長(focus)（改成員文字來這）
site.webmanifest / assets/（favicon、icon、og.png 分享圖、og.svg 原稿、team/01~07.jpg）
README.md      快速入門　HANDOFF.md（這份）完整說明
```

## 5. 設計系統（Brand Debug Lab · v5 現行）

**配色（已改成 PDF 封面的紅黃藍，都在 `styles.css` `:root`）:**
```
--cream:#f7f1e6  奶油底   --paper:#fffdf7 紙白卡   --ink:#1e1e1e 墨黑
--red:#e04410    橘紅（圈選/標籤/按鈕/重點）
--yellow:#f1c300 金黃（便利貼）
--blue:#cfd9e6（Megan 指定色號）
--green:#6c8b45  綠（呼應 ladybug/成長）  --gray:#e8e1d7
```
紅黃藍是**主色不是點綴（2026-07 Megan 指定色號：紅 #E04410／黃 #F1C300／藍 #CFD9E6，黃藍要有面積：bugs 區藍色帶、cases 區黃色帶、feature 方案藍底）**:memo 卡膠帶/上緣、服務卡編號 tab、案例檔案 tab、方案名牌、流程數字都**輪替紅黃藍**;方案「最受歡迎」卡是**藍底**。

**字體:** 標題/內文 Noto Sans TC；手寫僅剩 Hero 報告的簽名/便利貼/印章（純裝飾）。⚠️ 2026-07 Megan 要求**字體一致**：所有含中文元素一律 Noto Sans TC（成員頁職稱改黃底黑體、Space Mono 只准用在純英文編號如 CASE_01/FILE_01/NO.0741），檔案 tab 已改英文（MEDIA/NEWS/SOCIAL）；報告標籤 Space Mono。
**⚠️ 標題已放鬆過**:`h1~h4` line-height **1.32**、letter-spacing **.01em**（**不要再加負字距**，中文會擠成一團——Megan 嫌過「字太擠」）。

**手作元素:** 紙張卡片（粗黑框＋位移陰影）、紅筆手繪圈選 `.circle`（data-URI SVG）、便利貼膠帶、資料夾標籤、FIXABLE 印章、Brand Bug Report 報告紙。
**特效:** GSAP+ScrollTrigger（捲動浮現）、Lenis（平滑捲動，**只在電腦**）。

## 6. 怎麼改常見內容

- **成員介紹/專長** → `members.js`（`bio`、`focus`）。
- **換成員照片** → 蓋掉 `assets/team/0X.jpg`（4:5 直式）。
- **頁面文字** → 對應 `.html`。　**配色/間距** → `styles.css` `:root` 與標題規則。
- **方案/服務** → `services.html`（首頁也有一份）。**價格刻意不公開**（寫「洽談後客製」）。

## 7. 怎麼上線更新（⚠️ 兩個 remote 都要 push）

```bash
cd ~/Desktop/7adybug-site
git add -A && git commit -m "更新內容"
git push origin main      # 備援
git push usersite main    # 正式網址（少推這個 = 線上不會更新！）
```
等 1~3 分鐘 GitHub Pages 自動重佈。本機預覽:`python3 -m http.server 8000` → `localhost:8000`。
> 快取兇:改完看不到就手機完全關分頁重開，或網址加 `?v=數字`。

## 8. ⭐ 下一步改進 roadmap（2026-07 稽核結論，按影響力排序）

已對照專業 agency 案例頁標準稽核過，現況「概念/結構」夠好，**卡在「證據」與「節奏」**。要再上一階做這些:

1. ~~案例加圖~~ ✅ 已完成（12 張圖＋燈箱）。剩：16.3K 帳號截圖、影片 YouTube 連結（可升級成點開播放）。
2. **打破單調**——目前每塊都是「奶油底＋白框方塊」，很膩。要:換區塊底色（放一段深色/色塊區製造節奏）、卡片做出變化（資料夾/便利貼/夾照片不只白方塊）。（我可做，不需素材）
3. **戰績前置**——把 16.3K 等數字做成首屏附近的**數字帶**（16.3K 觸及／2 全國競賽／大學盃佳作／7 人）＋**合作/參與品牌 logo 牆**（泰山、阿瘦、淡江三大媒體、競賽主辦）。（我可做）
4. **修 redundancy**——首頁服務/案例/方案跟分頁重複；首頁改精選 teaser＋「看全部」，完整留分頁。
5. 小瑕疵:首頁主標「動。」、案例「懂。」孤字斷行;手機報告卡 FIXABLE 印章壓到字;`//` 灰色小標對比偏低。
6. 招牌互動（加分）:紅筆圈選捲到才「自己畫出來」、報告清單 ✕「逐項打上去」像正在診斷。
7. **成果寫太虛**:「累積…經驗」→ 能量化就量化，否則寫清楚交付物。
8. 專業基建:**自訂網域**（`7adybug.com` 約 NT$300–500/年，最快變專業，可綁現站不用搬）、**Google Analytics**（免費）、SEO Organization schema、團體照當分享圖。

## 9. 待辦 / 卡住的東西

- [x] **團體照已加**（`assets/team/group.jpg`，首頁＋團隊頁，可點放大）。
- [x] 案例圖已加：assets/works/ 12 張（泰山 banner/貼文/Reel、InnoConnect、TKTV×3、AI 影片、海報×4），全部可點開燈箱放大（[data-zoom]，lightbox 在 script.js）。⚠️ 影片目前是縮圖，提供 YouTube 連結可升級成點開播放。
- [ ] 16.3K 帳號截圖（tnlee）未取得——PDF 裡那頁抽出的截圖是別組的（HERstory），不能用；CASE_03 目前註明「截圖可於洽談提供」。
- [ ] 聯絡表單走 **formsubmit.co**→`77ady.bug@gmail.com`;**第一次有人送出時 Gmail 會收到啟用信，點一下之後才會正常收件。**

## 10. 重要決定（別踩雷）

- **方案不放別組案例**:履歷 PDF「預算方案」是別組（怪本室/七曜/HERstory…）的案子示意，**沒放進網站**（冒用會傷信任）。只放 7aDy.bug 自己做過的（泰山、阿瘦、社群 16.3K、實習媒體）。
- **價格不公開**（洽談客製）。
- **主軸「抓 bug」**貫穿全站。

## 11. 設計演進史（給接手者/AI——別走回頭路）

- v1 neubrutalism撞色 → 太像別組、太亂 ❌
- v2 極簡編輯襯線 → 太素「不好看」❌
- v3 卡通圓角瓢蟲 → 沒質感、不喜歡卡通 ❌
- v4 白底極簡專業 → 字太大、顏色不好看 ❌
- **v5（現行）Brand Debug Lab** → 手作檔案室＋紅黃藍活潑 ✅（照 Megan 完整 brief 做，後續又調封面配色、淡藍、鬆字距）

**Megan 要的＝手作痕跡但專業、紅黃藍活潑、每一區讓企業看得懂能解決什麼問題。不要卡通、不要科技藍紫漸層、不要滿版粉紅、不要跟 STONE9 撞、標題不要負字距。**

## 12. 媒體連結對照表（2026-07 從履歷 PDF 抽出，燈箱直接播/開）

- TKTV 活字版的傳統與新生 → youtu.be/R5KHNpTqicQ（縮圖 tktv-3.jpg）
- TKTV 平溪守護失智長者 → youtu.be/gKB6xSr5BzU（縮圖 tktv-pingxi.jpg）
- TKTV 廚餘變資源 → youtu.be/x88guULz0rU（縮圖 tktv-2.jpg）
- 青春有影 AI 影片 → Drive 1J5LIRsT_SxQiBiJsE5U153S6h-tKYsZ5（/preview 內嵌播放）
- 泰山大吸館 完整簡報 PDF → Drive 1qn2ziUfKFuRfR0jVvUCdc_Cjkjya9xkB（/preview 內嵌）
- InnoConnect 簡報 PDF → Drive 1alHFpmrN52Zk0fnxdrgARiNT4a-7yB11（/preview 內嵌）
- 泰山 IG 貼文全集資料夾 → Drive folders/1ip2PDX6YZwXurl80kHSiwV0mxtBZYXZP（外連）
- 用法：圖或文字加 `data-video="<yt-id>"` 或 `data-embed="<drive preview url>"`，燈箱自動處理。
- 技能已照 PDF 修正：Ps/Ai/Id/Lr/Pr/Au/Dw/**An(Animate，非 After Effects)**/Procreate/Instant Data Scraper/Corpro/winMedia。
- 報告紙便利貼/簽名字體已統一 Noto Sans TC；色號 #E04410/#F1C300/#CFD9E6 已驗證。
- ⚠️ repo 有 **.nojekyll**（別刪：沒有它 GitHub Pages 會跑 Jekyll，某次 build 直接掛掉）。
- ⏳ 個人履歷 Canva 連結 Megan 給的是 /edit（403 打不開），要請她給「分享→任何人可檢視」連結或匯出 PDF。

## 13. 成員個人頁（2026-07 依畢製個人履歷改版）

- `members.js` 每人新增 `hi[]`（經歷亮點）與 `works[]`（作品連結：video/embed/zoom/href 四型，燈箱直接播/開）。
- 個人履歷 PDF 備份在 Megan 的下載資料夾 `畢製個人履歷_備份.pdf`（Canva 匯出連結會過期，別依賴）。
- 已對應：曉恩 Notion 作品集（notion.site 公開連結）、采頤 金帶獎音檔+廣播劇+PopUp Asia 報告（Drive mp3/pdf）、欣妤 攝影作品集 Drive 資料夾、佩芹 鉤針網站 peichinn.github.io、宜臻 金韶獎海報+青春有影。
- ⏳ **待 Megan 指認（不確定歸屬，未上站）**：notion.so/361caa4a…、notion.so/_-361844…（宜臻 vs 佩芹的作品集連結）、Drive 資料夾「履歷學經歷」1H82Yvsmc…（誰的？）。
- 曉恩亮點數據：IG 單篇流量最高 135K／分享 2,530（已寫進她的個人頁）。

## 13. 成員個人頁＋連結歸屬（2026-07 定案，用 pdftohtml 逐頁對過，別再掛錯）

- 李汭琳：泰山簡報／Inno 簡報／PopUpAsia 報告（皆 Drive embed）
- 陳曉恩：作品集 notion.so/361caa4a…（⚠️ 不是 notion.site 那條）；亮點：IG 單篇流量最高 135K・分享 2,530
- 吳苡榛：平溪影片（YouTube）＋泰山簡報＋Inno
- 林采頤：金帶獎最佳節目第二名 mp3＋廣播劇《穿越吧性別小偵探》mp3＋PopUpAsia＋VOTK 海報＋**作品集資料夾 1BX1MiXft**
- 賴欣妤：**攝影作品集資料夾 1H82Yvsmc**（「履歷學經歷」）
- 李佩芹：**作品集 notion.site/e5e49e88…**＋鉤針網站 peichinn.github.io＋弦思/夜箏海報
- 李宜臻：金韶獎海報＋青春有影 AI 影片＋**作品集 notion.so/_-361844…**
- 個人履歷 PDF 備份：Megan 下載資料夾《畢製個人履歷_備份.pdf》（Canva 匯出連結會過期）

## 14. 2026-07 第二輪修改（現行狀態）

- 網站名稱（title/og:title）＝「7aDy.bug 整合行銷團隊」
- **首頁第一屏＝封面**（像玖桃）：`assets/logo.jpg`（紅黃藍抽象 logo，`mix-blend-mode:multiply` 去白底）＋7aDy.bug＋三個標籤＋往下看。首頁已瘦身：封面→Hero報告→團體照→品牌bug→精選案例×2（泰山簡報/TKTV影片）→三顆導流按鈕→CTA；服務格/方案/流程移去 services.html
- services.html 新增：**時間規劃**（8月簡報→9月市調→10-1月提案+活動①→2-5月活動②+黑天鵝展+松菸華山）＋**預算方案含價格**（校園體驗 9–12 萬／社群擴散 13–16 萬／整合展演 17–20 萬，註明可客製）——Megan 拍板要公開價格
- works.html Archive 新增 **RADIO 卡**（采頤金帶獎+廣播劇，點了燈箱播）
- 服務卡編號 tab 全紅黃藍輪替（無黑）：1紅2藍3黃4藍5紅6黃
- 燈箱支援：data-zoom 圖／data-video YouTube／data-embed Drive（簡報·mp3·mp4 都可內嵌播）

## 15. 入口封面頁（2026-07）

- **index.html＝獨立入口封面**（檔案夾卡片：CASE FILE 標籤+膠帶+LET'S DEBUG 印章+便利貼+logo+進入網站鈕），點卡片任一處→ **home.html（真正首頁）**。
- 全站品牌 logo 連結指向 home.html；404 回首頁也是 home.html。
- 要改封面樣式：styles.css 搜「入口封面頁」區塊。

## 16. 2026-07 完美收尾輪（現行定稿）

- **logo 已真去背**：`assets/logo.png`（PIL 白轉透明），封面/分享圖共用；logo.jpg 僅備份。
- **職稱定稿**：李汭琳＝專案經理（組長，團隊頁置頂置中大卡）、林采頤＝品牌策略、吳苡榛/陳曉恩＝創意企劃；宜臻/欣妤/佩芹不變。團隊頁排列＝汭琳置頂置中＋其餘 2×3。
- **文案定稿**：about h1「找出品牌卡點，變成活動亮點」；名稱說明用 Megan 原句（發音 ladybug／Dy.bug=Debug 延伸／象徵創意與執行之間…）；「團隊分工與職位」標題；成員 bio 全面改平實（禁誇大詞：S級/棟樑/翻譯蒟蒻/極強…）；欣妤刪「帶隊辦展」；汭琳刪西文檢定。
- **首頁結構（定稿）**：hero 報告 → 品牌 bug → 精選案例×2 → About us（團體照移此，縮小置中）→ CTA（含導流按鈕）。無服務格/方案/流程（在 services）。
- **services**：預算方案已整段移除（Megan 決定先不放價格）；保留服務 6 卡＋Debug 5 步＋時間規劃。
- **燈箱**：新增 ✕ 關閉鈕＋開啟時鎖背景捲動（修「點作品當掉＝關不掉」）。
- **分享圖 og.png 重設計**：紙卡＋去背 logo＋「找出品牌卡點，變成活動亮點」＋無 /ladybug 舊網址；og.svg 內嵌 base64 logo。
- **footer**：頁面/聯絡中文標題、聯絡項加「Email｜/Instagram｜/電話｜」前綴、版權置中單行「© 2026 7aDy.bug 整合行銷團隊」。
- 封面簡化：tab=CASE FILE｜7aDy.bug、單膠帶＋印章（便利貼/第二膠帶已移除）；.splash overflow:hidden 防手機溢出。

## §17 2026-07-05 第三輪修正(已上線)
1. **汭琳卡片同尺寸**:`.person.lead-card{grid-column:1/-1;justify-self:center;width:calc(50% - 11px)}`——仍獨佔第一排置中,但寬度=其他卡。
2. **手機 Brand Bug Report 不再壓字**:`@media(max-width:640px)` 把 FIXABLE 印章移到卡片上緣 `top:-15px`、便利貼縮小;≤560px 已驗證。
3. **封面拼貼風**:色塊碎片錨定 logo——`.logo-wrap`(inline-block 包住 logo)內放 s1 黃方塊(左上)、s2 藍圓(右下),z-index 墊底保證任何螢幕都與 logo 交疊;卡片角落 s4 墨點紋、s5 黃三角;紅橫條 s3 廢棄(跟 logo 紅弧打架)。手機 s4 隱藏、s5 縮小(壓到標語)。
4. **「點檔案夾任一處」提示已刪**(整卡仍可點進 home)。
5. **首頁「看合作方式」→「看服務與方案」**連 services.html(她問要不要連聯絡、說不是也沒關係→選 services 但改字避免預期落差)。
6. **首頁去重**:她說「第二三張照片內容重複」=hero 報告卡 vs 品牌常見 bug 區(TA 不清楚≈年輕族群不知道你…)。5 張 memo 卡整段砍掉,換成藍帶陳述(標題+一句修法+連 services 的「看我們的 Debug 五步驟」)。首頁現= hero→藍帶→黃帶精選3件→CTA。
7. **works 去重**:Archive NEWS 卡刪除(CASE_04 已含三支新聞影片)、VIDEO&AI 清單刪重複的青春有影行(主圖保留)。
8. **汭琳 bio**:「樂觀、靈活、講重點。」→「樂觀、靈活變通。」
⚠️ 踩坑:①python replace 錨字串不存在→靜默無效,**每次 replace 後必 grep/assert**(這輪 report stamp media query 就中招)。②preview 桌面截圖在捲動位置會拍到空白(Lenis+截圖管線),解法=隱藏上方區塊把目標推到首屏拍,或直接量 getBoundingClientRect。
9. **2026-07-05 加碼**:聯絡頁 IG 顯示拿掉 @(=帳號名 7ady.bug_);首頁精選第三格 金韶主視覺 → 阿瘦皮鞋 InnoConnect 簡報(data-embed,object-fit:contain 防裁字)。
10. **2026-07-05 加碼2**:首頁 hero 兩顆按鈕(看服務與方案/看作品案例)整組移除;FIXABLE 印章全尺寸改卡片上緣 top:-16px(桌面 896-1024 寬也會壓字,乾脆統一)。
11. **2026-07-05 部署方式大改**:legacy Pages build 佇列會**假報 building 實則 fail**(17 秒 fail、API 卻永遠 building),強制重排/空 commit 都救不了 → 兩個 repo 都改成 **GitHub Actions 部署**(.github/workflows/pages.yml + build_type=workflow)。以後看部署狀態用 `gh run list -R Meganlin0000/meganlin0000.github.io`,舊的 pages/builds 強制重排 SOP 作廢。按鈕已立體化(4px 墨黑硬影+hover 浮起+active 壓平)。
12. **殭屍部署 SOP 更新(2026-07-06)**:Actions deploy 報「in progress deployment, please cancel <舊SHA>」時——deployments API 的 statuses 可能全是 success/failure(沒有真的 in_progress),別被騙;**正解=取消「新 build version 的 SHA」**:`gh api -X POST repos/<repo>/pages/deployments/<新SHA>/cancel`,再 `gh workflow run`。取消舊 SHA 會回「already finished」沒用。若 run 卡 in_progress,deploy-pages 有 10 分鐘超時,掛看門狗自動重試即可。
13. **部署現況定案(2026-07-06)**:主站 `meganlin0000.github.io` = **legacy build**(Actions 管道對此 repo 壞掉:部署建立後 10 分鐘超時,重試 10+ 次全滅;legacy 反而復活,30 秒即上)。其 Deploy Pages workflow 已 `gh workflow disable`(防每次 push 失敗寄信),要換回先 `gh workflow enable` + PUT build_type=workflow。備援 `ladybug` = workflow 模式,運作正常。**兩管道會輪流壞,哪條活走哪條**;卡 building 用 `gh api -X POST .../pages/builds` 強制重排(legacy 限定)。
