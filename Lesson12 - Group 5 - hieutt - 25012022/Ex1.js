function init() {
    const nope = document.getElementById('nope');
    const button = document.getElementById('change-my-life');
    const paragraph = document.getElementById('status');
    const content = document.querySelector('.content');
    const string1 = 'Tôi NGhèo';
    const string2 = 'Tôi Giàu sau khi học lập trình tại mindX';
    let check = 1;

    // sau khi nhấp chuột vào change-my-life nội dụng tối nghèo sẽ chuyển thành tôi giàu và ngược lại
    button.onclick = () => {
        content.innerHTML = check == 1 ? string1 : string2;
        check = !check;
    };

    // sau khi di chuột vào button nope
    nope.onmouseover = () => {
        nope.style.background = '#ff0000';
        nope.style.color = '#fff';
    };

    // sau khi đi chuột ra khỏi button
    nope.onmouseleave = () => {
        nope.style.background = '';
        nope.style.color = '#333';
    };

    nope.onclick = () => {
        const cof = confirm(
            'Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?'
        );
        if (cof) nope.innerHTML = 'tôi rất tiếc';
    };
}

window.addEventListener('load', init);
