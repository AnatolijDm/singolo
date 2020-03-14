let slider = 'current';
let VerticalIphone = 'on';
let horizontalIphone = 'on';

document.querySelector('#home').addEventListener('click', () => {
    document.querySelector('#home').style.color = '#f06c64';
    document.querySelector('#servicesId').style.color = 'white';
    document.querySelector('#portfolioId').style.color = 'white';
    document.querySelector('#aboutId').style.color = 'white';
    document.querySelector('#contactId').style.color = 'white';
})

document.querySelector('#servicesId').addEventListener('click', () => {
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#servicesId').style.color = '#f06c64';
    document.querySelector('#portfolioId').style.color = 'white';
    document.querySelector('#aboutId').style.color = 'white';
    document.querySelector('#contactId').style.color = 'white';
})

document.querySelector('#portfolioId').addEventListener('click', () => {
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#servicesId').style.color = 'white';
    document.querySelector('#portfolioId').style.color = '#f06c64';
    document.querySelector('#aboutId').style.color = 'white';
    document.querySelector('#contactId').style.color = 'white';
})

document.querySelector('#aboutId').addEventListener('click', () => {
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#servicesId').style.color = 'white';
    document.querySelector('#portfolioId').style.color = 'white';
    document.querySelector('#aboutId').style.color = '#f06c64';
    document.querySelector('#contactId').style.color = 'white';
})

document.querySelector('#contactId').addEventListener('click', () => {
    document.querySelector('#home').style.color = 'white';
    document.querySelector('#servicesId').style.color = 'white';
    document.querySelector('#portfolioId').style.color = 'white';
    document.querySelector('#aboutId').style.color = 'white';
    document.querySelector('#contactId').style.color = '#f06c64';
})

document.querySelector('#sliderLeft').addEventListener('click', () => {
    if (slider === 'current') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen2').style.display = 'block';
        }
        document.querySelector('#verticalScreen').style.display = 'none';
        document.querySelector('#vertical').style.left = '370px';
        document.querySelector('#horizontalScreen').style.display = 'none';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen2').style.display = 'block';
        }
        document.querySelector('#horizontal').style.left = '250px';
        document.querySelector('#horizontal').style.zIndex = '1';
        document.querySelector('#vertical').style.zIndex = '3';
        document.querySelector('#slider').style.backgroundColor = '#648BF0';
        slider = 'next';
    } else if (slider === 'next') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen').style.display = 'block';
        }
        document.querySelector('#verticalScreen2').style.display = 'none';
        document.querySelector('#vertical').style.left = '110px';
        document.querySelector('#vertical').style.zIndex = '1';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen').style.display = 'block';
        }
        document.querySelector('#horizontalScreen2').style.display = 'none';
        document.querySelector('#horizontal').style.left = '424px';
        document.querySelector('#slider').style.backgroundColor = '#f06c64';
        slider = 'current';
    }
})

document.querySelector('#sliderRight').addEventListener('click', () => {
    if (slider === 'current') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen2').style.display = 'block';
        }
        document.querySelector('#verticalScreen').style.display = 'none';
        document.querySelector('#vertical').style.left = '370px';
        document.querySelector('#horizontalScreen').style.display = 'none';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen2').style.display = 'block';
        }
        document.querySelector('#horizontal').style.left = '250px';
        document.querySelector('#horizontal').style.zIndex = '1';
        document.querySelector('#vertical').style.zIndex = '3';
        document.querySelector('#slider').style.backgroundColor = '#648BF0';
        slider = 'next';
    } else if (slider === 'next') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen').style.display = 'block';
        }
        document.querySelector('#verticalScreen2').style.display = 'none';
        document.querySelector('#vertical').style.left = '110px';
        document.querySelector('#vertical').style.zIndex = '1';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen').style.display = 'block';
        }
        document.querySelector('#horizontalScreen2').style.display = 'none';
        document.querySelector('#horizontal').style.left = '424px';
        document.querySelector('#slider').style.backgroundColor = '#f06c64';
        slider = 'current';
    }
})

document.querySelector('#vertical').addEventListener('click', () => {
    if (VerticalIphone === 'on' && slider === 'current') {
        document.querySelector('#verticalScreen').style.display = 'none';
        document.querySelector('#verticalScreen2').style.display = 'none';
        VerticalIphone = 'off';
    } else if (VerticalIphone === 'off' && slider === 'current') {
        document.querySelector('#verticalScreen').style.display = 'block';
        document.querySelector('#verticalScreen2').style.display = 'none';
        VerticalIphone = 'on';
    }
    if (VerticalIphone === 'on' && slider === 'next') {
        document.querySelector('#verticalScreen').style.display = 'none';
        document.querySelector('#verticalScreen2').style.display = 'none';
        VerticalIphone = 'off';
    } else if (VerticalIphone === 'off' && slider === 'next') {
        document.querySelector('#verticalScreen2').style.display = 'block';
        document.querySelector('#verticalScreen').style.display = 'none';
        VerticalIphone = 'on';
    }
})

document.querySelector('#horizontal').addEventListener('click', () => {
    if (horizontalIphone === 'on' && slider === 'current') {
        document.querySelector('#horizontalScreen').style.display = 'none';
        document.querySelector('#horizontalScreen2').style.display = 'none';
        horizontalIphone = 'off';
    } else if (horizontalIphone === 'off' && slider === 'current') {
        document.querySelector('#horizontalScreen').style.display = 'block';
        document.querySelector('#horizontalScreen2').style.display = 'none';
        horizontalIphone = 'on';
    }
    if (horizontalIphone === 'on' && slider === 'next') {
        document.querySelector('#horizontalScreen').style.display = 'none';
        document.querySelector('#horizontalScreen2').style.display = 'none';
        horizontalIphone = 'off';
    } else if (horizontalIphone === 'off' && slider === 'next') {
        document.querySelector('#horizontalScreen2').style.display = 'block';
        document.querySelector('#horizontalScreen').style.display = 'none';
        horizontalIphone = 'on';
    }
})