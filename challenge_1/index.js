const icon = document.getElementById('icon')

icon.addEventListener('click', transformIcon)
const lines = document.querySelectorAll('.line')

function transformIcon() {
    if (lines[0].classList.contains('transformed')) {
        lines.forEach((line)=> {
            line.classList.remove('transformed')
            line.classList.add('untransformed')
        })
    } else {
        lines.forEach((line) => {
          line.classList.remove("untransformed");
          line.classList.add("transformed");
        });
    }
}