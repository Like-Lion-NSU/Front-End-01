// HTML 요소를 선택한다.
const tabItems = document.querySelectorAll('.tab-item'); // .tab-item 클래스를 가진 모든 요소를 선택한다.
const tabContentItems = document.querySelectorAll('.tab-content-item'); // .tab-content-item 클래스를 가진 모든 요소를 선택한다.

// 탭 콘텐츠 아이템을 선택한다.
function selectItem(e) {
	// 모든 탭 아이템에서 show와 border 클래스를 제거한다.
	removeBorder();
	removeShow();

	// 현재 탭 아이템에 border 클래스를 추가한다.
	this.classList.add('tab-border');

	// DOM에서 해당하는 콘텐츠 아이템을 가져온다.
	const tabContentItem = document.querySelector(`#${this.id}-content`);

	// show 클래스를 추가한다.
	tabContentItem.classList.add('show');
}

// 모든 탭 아이템에서 하단 테두리(border)를 제거한다.
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// 모든 콘텐츠 아이템에서 show 클래스를 제거한다.
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// 탭 아이템 클릭 이벤트를 감지한다.
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});
