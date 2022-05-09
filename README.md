## 정규표현식 (RegExp)

정규식, Regular Expression

## 정규식 생성

```js

//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제문자

```js
const str = `
    010-123-4567
    sss@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=batman
    The quick brown the fox jumps over the lazy dog.
    sunsun
`

```

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자데이터)` | 정규식과 일치여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대치

## 플래스(옵션)-> 아래 외에도 많음. 찾아보자.

플래그 | 설명  
--|--
g | 모든 문자 일치(global) 데이터 전체를 보는 플래그  
i | 영어 대소문자를 구분 않고 일치(ignore case)  
m | 여러 줄 일치 (multi line) : 각각의 줄을 시작과 끝이라고 보는 플래그  


## 패턴
패턴 | 설명  
--|--  
^ab | 줄(line) 시작에 있는 내용을 일치시키는 패턴  
ab$ | 줄(line) 끝에 있는 내용을 일치시키는 패턴  

. | 임의의 한 문자와 일치   
a &verbar; b | a 또는 b와 일치  
ab? | b가 없거나 b와 일치  

{3} | 3개 연속 일치  
{3,} | 3개 이상 연속 일치  
{3,5} | 3개 이상 5개 이하(3~5개) 연속 일치  

[abc] | a또는 b또는 c를 찾는다.  
[a-z] | a부터 z 문자구간  
[A-Z] | A부터 Z 문자구간  
[0-9] | 0부터 9까지  
[가-힣] | 가부터 힣까지  

\w | 63개 문자(Word, 대소영문 52개 + 숫자 10개 + _)에 일치  
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary), 특수기호같은것  
\d | 숫자(digit)에 일치  
\s | 공백(space, tab 등)에 일치  

(?=) | 앞쪽일치(Lookahead)  
(?<=) | 뒤쪽일치(Lookbehind)  
