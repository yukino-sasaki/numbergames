const text = document.getElementById('text')
const button = document.getElementById('number')
const message = document.querySelector('.message')
const times = document.querySelector('.times')
const reset = document.getElementById('reset')

/* テキストボックス内の文字を取得
裏では数の上限付き乱数を生成
テキストボックス内の数と乱数を比較し
絶対値の大きさによってヒントを出す
if文で分岐
8回くらい挑戦してダメだったらゲームオーバー
 */

var a;



function rannum() {
    a = Math.floor(Math.random() * 51)
}

rannum();
var i = 5;

function finitenum() {

    var b = text.value;
    var textnum = isFinite(b)
    console.log(b)
    if (textnum == false || b == "") {
        alert("数字を入れてよ")
    }
    else if (b > 50 || b < 0) {
        alert("0~50までの数字を入れて下さい")
    }
    else if (a == b) {
        i--
        message.textContent = "Congratulations!"
    } else if (a - b > 0 && a - b <= 10) {
        i--
        message.textContent = "あと少しだけ大きいです"
    } else if (a - b > 10 && a - b <= 50) {
        i--
        message.textContent = "もっと大きいです！"
    } else if (a - b < 0 && a - b >= -10) {
        i--
        message.textContent = "あと少しだけ小さいです！"
    } else if (a - b < -10 && a - b >= -50) {
        i--
        message.textContent = "もっと小さいです！"
    }
    times.textContent = "残り" + i + "回";
    if (i < 0) {
        times.textContent = "GameOver"
        button.disabled = true;
        message.textContent = "正解は" + a + "でした！"
    }
}

button.addEventListener('click', finitenum)

reset.addEventListener('click', () => {
    times.textContent = "残り5回"
    text.value = ""
    button.disabled = false;
    message.textContent = ""
    i = 5
    rannum()
})