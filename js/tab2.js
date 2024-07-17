"use strict"; /* 厳格にエラーをチェック */

{
  const tabMenus = document.querySelectorAll(".tab__menu-item");

  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", (e) => {
      const tabTargetData = e.currentTarget.dataset.tab;
      console.log(tabTargetData);
      const tabList = e.currentTarget.closest(".tab__menu");
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
// 箱の中身の要素
// ①tabMenus=tab__menu-item
// ②tabTargetData=クリックイベントで発生したdata-tabの属性を取得
// ③tabList=tab__menu にふくまれるdata-tab 01〜03まで
// ④tabItems=③のtab__menuとその兄弟tab__panelたちtab__menu-item
// ⑤tabPanelItems=③tab__menuとその兄弟tab__panelたちとtab__panel-box
