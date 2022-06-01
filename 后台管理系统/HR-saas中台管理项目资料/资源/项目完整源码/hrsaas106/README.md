先登錄，拿到token先存到本地持久化并和vuex聯係起來有兩個地方要用token：一個是路由首位判斷如何跳轉以及實現免登錄，獲取用戶信息，一個是請求攔截要用來判斷添加請求頭和添加登錄超時
token超時： 開始：登錄的那一刻獲取到token，結束：// 拿到token后  请求拦截器

組織架構
角色管理



導入excel
npm i xlsx

導出excel
npm i xlsx file-saver
npm i script-loader -S -D