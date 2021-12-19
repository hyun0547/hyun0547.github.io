//custom
const tagMenu = document.querySelector(".tag-menu"),
tags = tagMenu.childNodes,
test = document.querySelector(".test");


const intro = 
["<span>개발 공부를 하기 이전에 저는 빵을 만드는 사람이었습니다. <br> 10년동안 한가지 일에만 전념하여 26살에 과장으로 근무하였고 이러한 경험으로 책임감, 끈기, 높은 메타인지의 장점을 가지고 있습니다.</span>",
"<span>고등학교를 졸업하기 전부터 사회에 뛰어들어 많은 사회 경험으로 동료들과의 소통에 능숙합니다. <br> 학원교육을 이수한 후 스터디 그룹을 진행하고 토이프로젝트를 만들면서 협업에서 소통의 중요성을 실감했습니다.</span>",
"<span>저의 MBTI는 ENTJ입니다. <br> ENTJ의 성격에 대한 자료정리에서 깊이 공감한 키워드는 '지적욕구가 강하다.' 였습니다. <br> 개발 공부를 시작한 계기도 공부와 많은 생각이 필요한 직업으로 전직하기 위해 선택한 직업이었습니다. <br> 저의 목표는 목표를 만드는 것 입니다. <br> 매번 새로운 목표를 만들고 성취하고 배움을 이뤄나가는 것이 1순위의 가치관 입니다.</span>",
"<span>저는 방송통신대학교를 재학중 입니다. <br> 사실 개발공부를 시작하며 '고졸, 비전공자는 땔감이다.' 와 같은 이야기들을 접하기도 합니다. <br> 좌절할 때도 있지만 다른사람 보다 뛰어나지 못하다는 이유가 무엇인가를 포기해야 할 이유는 아니라고 생각했습니다. <br> 묵묵히 나 자신의 길을 가기위해 선택한 또 하나의 도전으로 방송대학교의 컴퓨터과학과에 지원하여 재학중 입니다. </span>"
];

$(tagMenu.children).on("click", function(){

	if($(this.childNodes).hasClass('primary')){
		$('.tag-menu a').removeClass('primary');
		test.innerHTML = ""
	}else{
		$('.tag-menu a').removeClass('primary');
		$(this.childNodes).toggleClass("primary");
		const index = $(this).index();
		test.innerHTML = intro[index];
	}
})