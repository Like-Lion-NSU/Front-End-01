## HTML이란?
Hyper Text Markup Language   
(=태그를 통해 텍스트에 생명을 불어넣는 것)

## HTML 요소
<여는태그>내용</닫는태그>

## HTML 속성
<속성이름="속성값">

## HTML 주석
작성은 되어있는 코드를 브라우저에 뜨지 않도록 무시   
< !-- 내용 -->

## HTML 문서구조
< !DOCTYPE html> **➡️ html 문서**  
< html lang="en"> **➡️ 어떤 언어를 사용하여 작성되었는지**   
< head>   
    < meta charset="UTF-8"> **➡️ 인코딩 방식**   
    < meta http-equiv="X-UA-Compatible" content="IE=edge"> **➡️ 브라우저 호환 설정**     
    < meta name="viewport" content="width=device-width, initial-scale=1.0"> **➡️ 브라우저 범위 설정**     
    < title>Document< /title> **➡️ 웹브라우저 탭에 표시되는 텍스트 설정**   
< /head>   
**head 태그. 브라우저 화면에 나타나지 않음, HTML 문서에 대한 설정 정보**   
< body>
**body 태그. 실제 브라우저에 보여지는 내용**   
< /body>   
< /html>

## HTML Block Element
브라우저에서 하나의 면을 차지하는 요소   
example : < h1>, < h2>, < h3>, < p>, < ol>, < ul>, < li>, < div> 등..

< h1~6> heading 태그는 글씨를 키우려는 목적으로 사용하지 않음   
< p> 문단 나눠주는 태그   
< ol>, < ul>, < li> list 태그   
< div> 요소들을 묶어서 그룹화 하는 태그

## HTML Inline Element
특정 영역에만 영향을 미치는 요소   
example : < a>, < span> 등..

< a> 링크를 걸 수 있는 태그   
< span> 일부 영역 선택 태그

### 기타 태그
< br> 줄바꿈 태그

## HTML OG Tag
Open Graph Protocol   
공유한 링크로부터 웹 페이지의 정보를 미리 보여주기 위해 탄생   
< meta property="og:title" content="제목">   
< meta property="og:description" content="설명">   
< meta property="og:image" content="사진.jpg">   
등을 이용하여 정보가 보여지도록 한다.

## HTML Layout
웹 페이지에서 보이는 규칙적인 구조

< header>   
< nav>   
< section>   
< footer>

용도별 태그는 영역 분할 뿐만 아니라 기계의 웹 페이지 해석을 도움