"use strict"; /* 厳格にエラーをチェック */

{
  const tabMenus = document.querySelectorAll(".tab__menu-item");

  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", (e) => {
      const tabTargetData = e.currentTarget.dataset.tab;
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
