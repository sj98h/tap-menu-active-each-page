const windowHref = location.href;
const windowHrefSplit = windowHref.split("/");
const pageName = windowHrefSplit[windowHrefSplit.length - 1];

// 탭 메뉴 li
var tabLi = document.getElementsByClassName("tab-li");

for (var i = 0; i < tabLi.length; i++) {
  // 메뉴 li 개수 만큼 반복
  var aHref = tabLi[i].querySelector("a").getAttribute("href");
  // 각 li의 자식요소 a 태그의 href 속성 저장
  if (pageName == aHref) {
    // 페이지명과 a 태그 href 속성이 같을 때
    tabLi[i].classList.add("active");
    // 해당 메뉴 li에 active 클래스 추가
    break;
  }
}
