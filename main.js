let str = `
    010-123-4567.
    tsss@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=batman
    The quick brown the fox jumps over the lazy dogd
    ㅁㅁ뮤ㅠㅠㅊㅊㅊㅇㅇㅇ
    hadfadp
    http://www.fdafd
`
// const regExp = new RegExp('the','gi')
// const regExp = /the/gi
const regExp = /fox/gi

//정규식과 일치하는지 확인해서 배열로 반환하는 match()
console.log(str.match(regExp))

//정규식과 일치여부 반환하는 test()
console.log(regExp.test(str))

//원본데이터에 영향을 주지는 않는 대체하는 메소드
console.log(`메소드에 의해 변경된 내용 :  ${str.replace(regExp, 'AAA')}`)
console.log(`replace()에 의해 변경되지 않은 원본 데이터 : ${str}`)

str = str.replace(regExp,'BBB')
console.log(`대입연산자 =에 의해 변경된 데이터 : ${str}`)

//플래그
// console.log(str.match(/the/gi))
//일반적인 문자로 \ 작성
console.log(str.match(/\.$/gim))

//패턴
console.log(str.match(/d$/gm))
console.log(str.match(/^t/gim))
console.log(str.match(/./gim))
console.log(str.match(/h..p/gim))
console.log(str.match(/jumps|over/gim))
console.log(str.match(/https?/g))
console.log(str.match(/d{2,3}/g))

console.log(str.match(/\b\w{2,3}\b/g))
console.log(str.match(/[0-9]{1,}/gim))

console.log(str.match(/\w/gim))

//소문자 f로 시작하는 단어
console.log(str.match(/\bf\w{1,}\b/gim))
//숫자
console.log(str.match(/\d{1,}/gim))
//띄어쓰기
console.log(str.match(/\s/gim))

const h = ` the hello world    !

`
//빈공백이 빈문자열로 대치됨
console.log(h.replace(/\s/g, ''))

//앞쪽일치/뒤쪽일치
console.log(/(?=@).{1,}/g)
console.log(/(?<=@).{1,}/g)






