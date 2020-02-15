const _delay = 5000;
window.onload = function () {

    try {

        const Http = new XMLHttpRequest();
        const url = 'https://sia.unram.ac.id/___zaf/scholar-grab/store.php';

        Http.open('POST', url);

        const _users = document.getElementsByClassName('gsc_1usr');
        for (let i = 0; i < _users.length; i++) {
            let _user = _users[i];
            let _url = 'https://scholar.google.com' +
                _user.querySelector('.gs_ai_pho').getAttribute('href');
            let _name = _user.querySelector('.gs_ai_name').innerText;
            let _affiliation = _user.querySelector('.gs_ai_aff').innerText;
            let _cited = _user.querySelector('.gs_ai_cby').innerText.replace(/[^0-9]/g, '');
            let _label = '', _labels = _user.querySelectorAll('.gs_ai_one_int');
            for (let j = 0; j < _labels.length; j++)
                _label += (j > 0 ? ', ' : '') + _labels[j].innerText;

            // console.log(_url, _name, _cited, _affiliation, _label);
            Http.send(JSON.stringify([_url, _name, _affiliation, _cited, _label]));
        }

        setInterval(function () {
            document.querySelector('button[aria-label="Next"]').click();
        }, _delay);

    } catch (err) {
        console.log(err);
    }

}