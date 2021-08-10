// animteScrollTo = function (_selector, _duration, _adjust) {
//     const targetEle = document.querySelector(_selector);
//     if (!targetEle) return;
//
//     // - Get current &amp; target positions
//     const scrollEle = document.documentElement || window.scrollingElement,
//         currentY = scrollEle.scrollTop,
//         targetY = targetEle.offsetTop - (_adjust || 0);
//     animateScrollTo(currentY, targetY, _duration);
//
//     // - Animate and scroll to target position
//     function animateScrollTo(_startY, _endY, _duration) {
//         _duration = _duration ? _duration : 600;
//         const unitY = (targetY - currentY) / _duration;
//         const startTime = new Date().getTime();
//         const endTime = new Date().getTime() + _duration;
//
//         const scrollTo = function () {
//             let now = new Date().getTime();
//             let passed = now - startTime;
//             if (now <= endTime) {
//                 scrollEle.scrollTop = currentY + (unitY * passed);
//                 requestAnimationFrame(scrollTo);
//             } else {
//                 console.log('End off.')
//             }
//         };
//         requestAnimationFrame(scrollTo);
//     }
// };

// animteScrollTo("#test2")

const oneBtn = document.querySelector(".one");
console.log(oneBtn)
oneBtn.addEventListener("click", () => {
    console.log(1111111)
})
const firstBtn = document.querySelector(".next_btn");
document.querySelector(".next_btn").onclick = () => {
    alert('hello!');
};
console.log(firstBtn)
function init() {
    firstBtn.addEventListener('click', (e) => {
        console.log(e, 123123)
    });
}
init()

// firstBtn.addEventListener('click', () => {
//     console.log(123123)
    // animteScrollTo('#test2')
// });

