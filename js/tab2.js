"use strict"; /* 厳格にエラーをチェック */

{
  const tabMenus = document.querySelectorAll(".tab__menu-item");

  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", (e) => {
      const tabTargetData = e.currentTarget.dataset.tab;
      console.log(tabTargetData);
      const tabList = e.currentTarget.closest(".tab__menu");
      console.log(tabList);
      const tabItems = tabList.querySelectorAll(".tab__menu-item");
      const tabPanelItems =
        tabList.nextElementSibling.querySelectorAll(".tab__panel-box");

      // 全てのタブとパネルのクラスをリセット
      tabItems.forEach((tabItem) => tabItem.classList.remove("is-active"));
      tabPanelItems.forEach((tabPanelItem) =>
        tabPanelItem.classList.remove("is-show")
      );

      // クリックされたタブと対応するパネルにクラスを追加
      e.currentTarget.classList.add("is-active");
      tabPanelItems.forEach((tabPanelItem) => {
        if (tabPanelItem.dataset.panel === tabTargetData) {
          tabPanelItem.classList.add("is-show");
        }
      });
    });
  });
}
// 箱の中身、(HTML要素から作られたオブジェクト)
// ①tabMenus=tab__menu-item

// ②tabTargetData=クリックイベントで発生したdata-tabの属性の値を取得
// （currentTargetはイベントリスナーがアタッチされてる要素、eは引数でイベントの略）
// menu1をクリックしたときのe.currentTargetは
// <li class="tab__menu-item " data-tab="01">menu1</li>を示す

// ③tabList=tab__menu にふくまれるリストのdata-tab 01〜03に一番近い親要素とtab__menu
// e.currentTarget.closest
// closest　複数のタブメニューがサイト内にある時に、バグを起こさないよう、同じタブ内の近くの親要素と紐つける

// ④tabItems=③のtabListとすべてのtab__menu-item

// ⑤tabPanelItems=③のtabListとその兄弟tab__panelたちとtab__panel-box
// nextElementSibling兄弟要素
