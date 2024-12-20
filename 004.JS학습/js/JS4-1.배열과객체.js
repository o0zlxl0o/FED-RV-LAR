// JS4-1.배열과객체 JS

/**********************************************
     [ 배열(Array) 변수란? ]

    - 여러개의 데이터를 묶음으로 변수하나에 저장함
    - 장점: 데이터를 취급하고 다루는데 편의성 제공
    - 각 데이터를 하나의 이름으로 구분하여 호출할
      수 있는 메모리공간이다!
      (예: 계란한판, 아파트 등)

    [ 배열의 선언의 2가지 방식 ]

    1. new 키워드 선언방식
    - new Array()
      객체를 실제로 메모리안에 생성하는 방법을 제공
      이를 인스턴스(instance)라고 함!

    2. 리터럴 선언방식 (배열리터럴)
    - 변수 = []


    - 객체란 속성과 메서드를 가지고 있는 프로그램 단위체
    - 객체는 독립된 특성을 가지고 있어야함!

    예컨데 자동차, 볼펜, 물통, 가방 등
    독립된 별도의 기능이 있어야하고 명사적특징과
    동사적 특징이 모두 있어야 객체다!

**********************************************/

// 1. 배열 셋팅하고 출력하기 //////////////////
// 1-1. new 키워드로 배열선언 및 할당하기
// 그런데 배열은 굳이 new키워드로 선언할 필요는 없다!
// 배열 리터럴로 생성할 수 있다!
const arr1 = new Array(
  "1990년 4월 24일",
  "166cm",
  "46kg",
  [2014, "더바디샵"],
  ["미스터션사인", "리틀 포레스트", "정년이"],
  "김태리",
  function () {
    // this는 누구? 호출한 요소자신!!
    // alert("김태리 예뻐!!!");

    // 1. 호출한 요소 박스에 김태리 사진 이미지를 넣고
    // (+=)대입연산자로 기존 데이터 살림!
    this.innerHTML += `
    <img src= "https://www.nbnnews.co.kr/news/photo/202102/471496_514593_158.jpg" alt="김태리 이미지"
    style = "
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 350px;
    border-radius:20px;
    border: 10px double lightgray;
    display: none;
    transition: .5s ease-out;
    translate: -50% -50%;
    pointer-events: none; 
    z-index: 100;
    "
    id = "kim"
    >
    `;

    // [위의 css 코드 체크!!!]
    // pointer-events: none; -> 실제 이벤트는 부모박스인데
    // 자식요소인 이미지가 매번 가림으로 인해 이벤트가
    // 순간 없어졌다가 다시 결렸다가 함으로 떨림증상발생
    // 이 설정으로 본 이미지는 이벤트를 없애고 아래쪽 요소가
    // 그대로 이벤트를 발생하게됨!
    // 따라다니는 기능에서 매우 중요한 설정임!!!!!

    // 앱솔루트의 부모자격을 this에게 준다!
    this.style.position = "relative";

    // 위에서 생성된 id="kim" 요소를 변수에 할당함!
    const kim = document.querySelector("#kim");

    // 2.마우스 오버시 나타나고
    this.onmouseenter = () => {
      kim.style.display = "block";
    };
    // 3.마우스 아웃시 사라지고
    this.onmouseleave = () => {
      kim.style.display = "none";
    };

    // 4. 마우스 움직이면 따라다니게
    // mousemove 이벤트 :
    // 마우스 포인터가 대상요소 위에서 움직일때 계속발생
    this.onmousemove = (헐) => {
      // 헐e 변수는 이벤트 전달변수
      // 어떤 함수도 전달값이 없는데 변수 하나를 쓰면
      // 곧 그것이 이벤트 전달변수가 됨
      // 그 요소에서 발생하는 이벤트를 객체로 가지고 있음
      // 대체해서 event라고 직접 전체 이벤트 객체를 쓸 수 있음!

      // 이벤트 객체하위 pageX, pageY는 최상단, 최왼쪽으로부터
      // 마우스 커서의 위치를 x,y축으로 단위없는 px값을 리턴한다!
      // 이 값은 사이트 전체를 이동하는 어떤 요소를 구현할때
      // 많이 사용함!
      // console.log("pageX:",헐e.pageX);
      // console.log("pageY:",헐e.pageY);

      // 여기서는 본 박스 안에서만 그 위치를 알면 되므로
      // -> offsetX, offsetY -> 해당부모요소 박스로 부터
      // 위치를 리턴함!
      // console.log("offsetX:", 헐.offsetX);
      // console.log("offsetY:", 헐.offsetY);

      // 위치값 반영대상 : 김태리 이미지 -> #kim
      kim.style.left = `${헐.offsetX}px`;
      kim.style.top = `${헐.offsetY}px`;
    };
  }
);

// new 키워드로 선언과 할당을 동시에 할 수 있다!
// 소괄호 안에 ,(콤마)로 값을 구분하여 사용한다!

// 배열 변수에 할당한 데이터 불러오기
// 호출방법 : 배열변수명[순번] -> 순번은 0부터!
console.log(
  "arr1:",
  arr1,
  typeof arr1,
  "배열이니?",
  Array.isArray(arr1)
    ? "응, 배열맞아!"
    : "아니, 배열아냐!"
  // 비?집:놀이동산 -> 삼항연산자(조건연산자)
);
// typeof(변수) / typeof 변수 -> 데이터형 출력!
// 배열의 데이터형을 찍으면 oveject라고 나옴
// 이것은 배열도 객체이기 때문!
// 배열인지 검사하는 방법은 Array.isArray(변수)
// -> 배열 여부를 알아내는 메서드는 중요함!

// 출력 대상 : .cont (여러개임!)
const target = document.querySelectorAll(".cont");

console.log("출력대상:", target);

// 여기서 출력대상은 .cont중 첫번째것!
target[0].innerHTML = `
    이름: ${arr1[5]}/
    키: ${arr1[1]}/
    몸무게: ${arr1[2]}/
    대표작: ${arr1[4]}/
    데뷔년도: ${arr1[3][0]}/
    `;
// 배열안에 배열이 또 있으면 대괄호를 추가하여
// 해당 순번을 써준다! 변수[순번][순번]

// 김태리 기능추가!
// 배열마지막 번호 == 배열개수 - 1
target[0].onclick = arr1[arr1.length - 1];
// 함수호출은 소괄호 필수!!!

// click 이벤트 강제 실행!
// click() 메서드 호출!
target[0].click();

// 1-2. 배열 리터럴 방식의 선언과 할당
// 배열변수명 : [값1, 값2,...]
// new 키워드 없이 바로 쓸 수 있는 객체이다!
// 이런 배열과 같은 객체를 정적객체(static object)라고 한다!

const arr2 = [
  "삼일절",
  "태극기",
  1919,
  function () {
    alert("대한독립만세~!");
    // return function () {alert('넌 누구냐')}
    // this는 누구인가? 호출한 요소자신!
    console.log("this:", this);
    // 배경넣기
    this.style.background = `url(https://blog.kakaocdn.net/dn/H4k8p/btqUUqx7TLT/VAMfjsV79wqyKIfOGXn5P0/img.jpg) repeat-x 0/auto 100%`;
    // 트랜스폼 변경 : 스케일 1.5, 회전 720도
    this.style.scale = "1.5";
    this.style.rotate = "720deg";
    // 트랜지션 : 2초, ease-in-out
    this.style.transition = "2s ease-in-out";

    // 4초후에 다시 원래크기로 돌아가기
    // setTimeout(함수,시간)
    setTimeout(() => {
      this.style.scale = "1";
    }, 4000);
    // 변수는 함수와 데이터의 저장소
  },
];

// 배열끝에 콤마는 원래는 쓰면 에러나지만,
// 최신 브라우저에서 에러안나게 처리됨!
// 요즘은 추가 배열 데이터를 위해 마지막 콤마를
// 쓰는 것이 일반적임!(프리티어도 마지막콤마 넣어줌)

// function() {} 익명함수 - 이름없고 코드만 저장
// -> 배열값으로 문자, 숫자, 배열, 객체, 함수 등 사용가능!

console.log(
  "arr2는 배열인가?",
  Array.isArray(arr2) ? "응" : "아니"
);

// 출력대상 : target[2]
target[1].innerHTML = `
${arr2[0]}은 ${arr2[2]}년에 일제에 항거하여
${arr2[1]}를 들고 일어난 민중봉기를 기념하는 날이다!
`;

// 두번째 출력박스를 클릭하면 배열 값에 있는 함수 호출하기
// 끝에 ()소괄호를 넣으면 바로 실행함
target[1].onclick = arr2[3];

// 두번째 박스에 타이틀 출력
target[1].title = "클릭하시면 만세를 합니다!";
// 두번째 박스에 손가락 표시
target[1].style.cursor = "pointer";

// console.log("배열안의 함수:", arr2[3]);

// 1-3. 배열을 미리 생성하여 각각 할당하기 /////////
// 배열변수명 = [] -> 배열리터럴
// 배열변수명.length = 숫자 -> 숫자만큼 배열이 생성됨
// 배열변수명.length는 배열개수를 읽기/ 쓰기 모두 가능함!

const arr3 = [];
//const 상수로 리터럴선언, 할당 후
// 배열값 변경은 자유롭다!
// 그러나 배열형을 변경할 수 없다! 즉, 재할당 불가!
// 그래서 상수임!(코드 보안상, 안전상 이유로 많이 씀)

console.log("arr3배열:", arr3);

// 배열개수 미리 셋팅하기
arr3.length = 8;
// 배열의 개수를 미리 셋팅해도 배열을 더 추가할 수 있음!
// 의미는? 미리 배열개수를 정하고, 이것을 지키려는 의도임!

console.log("arr3배열:", arr3);

// 각 배열주소에 값을 할당하기
arr3[0] = "산";
arr3[1] = "할아버지";
arr3[2] = "구름모자";
arr3[3] = "썼네~!";
arr3[4] = "나비같이";
arr3[5] = "훨훨";
arr3[6] = "훠얼훠월";
arr3[7] = "날아서~";

// 배열전체값 출력하기 : valueOf()
console.log("arr3배열전체값:", arr3.toString());
console.log(
  "arr3배열전체값:",
  arr3.valueOf().toString()
);
// 현재 브라우저는 valueOf()안해도 배열값을 보여준다!
// toString() 출력은 배열값을 콤마로 연결한 문자열로 변환한다!

// 변수값 사이에 구분자 넣고 문자형으로 배열값 변경하기!
// join(구분자) -> 구분자 넣고 문자값 생성
console.log("arr3배열 join():", arr3.join("♥"));

// 배열값 맨 뒤에 값 추가하기 메서드 : push()
arr3.push("김창환작사");

// 배열값을 세번째 target 박스에 출력하기
// join()으로 사이에 별표 넣고 문자열 변환출력
target[2].innerHTML = arr3.join("★");

// -> 배열 메서드는 중요하므로 별도로 훈련함!!!

/********************************************
           [ 객체(Object) 란? ]

   - 일반적으로 JS에서 객체란 속성과 메서드를
   가지는 프로그램 단위체
   - 속성은 명사적 특징, 메서드는 동사적 특징
   객체예)
   https://www.w3schools.com/js/js_objects.asp
   - 자동차의 명사적특징: 핸들, 백미러, 트렁크, 바퀴 등
   - 자동차의 동사적특징: 운전하다, 멈추다, 주차하다 등

   (참고: 브라우저에 이미 만들어져 있는 객체들)
   -> 내장객체라고함!
   -> 브라우저 내장객체-> 봄(BOM:Browser Object Model)
   -> https://www.w3schools.com/js/js_window.asp

   window : 윈도우(브라우저화면) 표시 관련객체
   document : 문서구조에 관련된 객체
   Array : 배열객체
   Object : 객체를 만들기 위한 객체
   Date : 날짜객체
   Math : 수학객체
   ___________________________________

   ->>> 내장객체 중 객체를 만들기위한 객체인 Object를
   사용하여 객체를 만들어보자!

   [ 객체의 선언의 2가지 방식 ]
   1. new 키워드 선언방식
   - new Object()

   2. 리터럴 선언방식(객체리터럴)
   - 변수 = {}

   [ 객체의 할당 ]
   - 중괄호{}를 사용하여 할당코딩을 함
   - {속성명:값,속성명:값,...}
   - 여러값을 셋팅할때 콤마로 구분한다
   - 배열과 비교해서 이해하기 쉽고 호출하기 쉽다!
   - 객체 스타일로 데이터 구조를 만들고
   이런 파일로 DB와 데이터 통신을 한다!
   이 파일의 이름은? 제이슨(JSON:확장자.json)

   [ 객체의 호출 ]
   - 객체명[속성명]
   또는
   - 객체명.속성명

*******************************************/

// 2. 객체를 셋팅하고 출력하기 //////
// 2-1. new 키워드로 object객체 생성하여 셋팅하기
// -> 실제 코드에서는 객체 리터럴 방식을 쓴다
// 즉, 변수 = {}
// 여기서는 new키워드 생성 방식도 된다는 것을 체험함!
// 객체는 셋팅시 반드시 중괄호{}를 사용함!
// 중괄호 안에는 {속성명:값, 속성명:값,...}
const SSG = new Object({
  "너의 이름은?": "손석구",
  생일: "1983년 2월 7일",
  키: "178cm",
  몸무게: "80kg",
  혈액형: "C형",
  성별: "남성",
  대표작: "나의 해방일지,범죄도시2",
  소속사:"셋별당엔터",
  비밀번호: 7777,
  팬레터: function () {
    //this키워드 : 이벤트 호출요소 자신!
    alert("상남자 오빠! 지금뭐해?");
    console.log("this:",this);

    // 변경대상 : this.style
    let mycss = this.style;

    // 1. 배경변경
    mycss.background = "url(https://file.mk.co.kr/meet/neds/2022/05/image_readtop_2022_456627_16533579475052374.jpeg) repeat-x top/auto 100%";
    // 2. 글자색
    mycss.color = "#fff";
    // 3. 글자그림자
    mycss.textShadow = "0 0 5px #000";
    // 4. 줄간격 변경
    mycss.lineHeight = "84px";
    // 5. 박스 확대
    mycss.scale = "1.2";
    // 6. 트랜지션
    mycss.transition = "1s ease-out 1s";
    
    // 7. 글자 내용변경
    this.innerText =
    `손석구 최고 멋쨍이! 승승장구! 화이팅!!!`;
  },
});// SSG 객체 /////////////////////////////

console.log("석구객체:",SSG);

// 박스에 출력전 셋팅변경 ///
// 대상박스 : target[3] 네번째 박스

// 줄간격 2줄이니까 조정
target[3].style.lineHeight = "40px";

// 툴팁 넣기
// 객체 호출법 2가지 : 
// 1) 객체명.속성명
// 2) 객체명[문자형 속성명]
target[3].title = 
`여기를 클릭하여 ${SSG["너의 이름은?"]}팬레터를 확인하세요!`;

// 손가락모양 커서
target[3].style.cursor = "pointer";

// 출력하기
target[3].innerHTML = `
당신이 좋아하는 남자배우는?
${SSG["너의 이름은?"]}
/ 몸무게를 아세요? ${SSG.몸무게} <br>
생년월일은?${SSG["생일"]}
/ 대표작은? ${SSG.대표작}
`;

// 객체의 함수를 이벤트에 연결하기
// 특히 객체의 함수를 메서드라고 부른다!
target[3].addEventListener(`click`, SSG.팬레터);
console.log();

