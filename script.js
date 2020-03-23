let slider = 'current';
let VerticalIphone = 'on';
let horizontalIphone = 'on';

document.addEventListener('scroll', onScroll);
function onScroll() {
    const links = document.querySelectorAll('.menu > a');
    document.querySelectorAll('#page > div').forEach((e) => {
        if (e.offsetTop <= window.scrollY && (e.offsetTop + e.offsetHeight) > window.scrollY) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (e.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    }) 
}

document.querySelector('#sliderLeft').addEventListener('click', () => {
    if (slider === 'current') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen2').style.display = 'block';
        }
        document.querySelector('#verticalScreen2').style.animationName = 'verticalScreenOn';
        document.querySelector('#verticalScreen2').style.animationDuration = '1s';
        document.querySelector('#verticalScreen').style.display = 'none';
        document.querySelector('#vertical').style.animationName = 'verticalPhOn';
        document.querySelector('#vertical').style.animationDuration = '1s';
        document.querySelector('#vertical').style.right = '0px';
        document.querySelector('#vertical').style.left = '10px';
        document.querySelector('#horizontalScreen').style.display = 'none';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen2').style.display = 'block';
        }
        document.querySelector('#horizontalScreen2').style.animationName = 'horizontalScreenOn';
        document.querySelector('#horizontalScreen2').style.animationDuration = '1s';
        document.querySelector('#horizontal').style.animationName = 'horizontalPhOn';
        document.querySelector('#horizontal').style.animationDuration = '1s';
        document.querySelector('#horizontal').style.left = '0px';
        document.querySelector('#horizontal').style.zIndex = '1';
        document.querySelector('#vertical').style.zIndex = '3';
        document.querySelector('#slider').style.animationName = 'sliderOn';
        document.querySelector('#slider').style.animationDuration = '1s';
        document.querySelector('#slider').style.backgroundColor = '#648BF0';
        document.querySelector('#slider').style.borderBottom = '5px solid rgb(136, 164, 233)';
        slider = 'next';
    } else if (slider === 'next') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen').style.display = 'block';
        }
        document.querySelector('#verticalScreen').style.animationName = 'verticalScreenBack';
        document.querySelector('#verticalScreen').style.animationDuration = '1s';
        document.querySelector('#verticalScreen2').style.display = 'none';
        document.querySelector('#vertical').style.animationName = 'verticalPhBack';
        document.querySelector('#vertical').style.animationDuration = '1s';
        document.querySelector('#vertical').style.left = '0';
        document.querySelector('#vertical').style.right = '559px';
        document.querySelector('#vertical').style.zIndex = '1';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen').style.display = 'block';
        }
        document.querySelector('#horizontalScreen').style.animationName = 'horizontalScreenBack';
        document.querySelector('#horizontalScreen').style.animationDuration = '1s';
        document.querySelector('#horizontalScreen2').style.display = 'none';
        document.querySelector('#horizontal').style.animationName = 'horizontalPhBack';
        document.querySelector('#horizontal').style.animationDuration = '1s';
        document.querySelector('#horizontal').style.left = '314px';
        document.querySelector('#slider').style.animationName = 'sliderBack';
        document.querySelector('#slider').style.animationDuration = '1s';
        document.querySelector('#slider').style.backgroundColor = '#f06c64';
        document.querySelector('#slider').style.borderBottom = '5px solid #ea676b';
        slider = 'current';
    }
})

document.querySelector('#sliderRight').addEventListener('click', () => {
    if (slider === 'current') {
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen2').style.display = 'block';
        }
        document.querySelector('#verticalScreen2').style.animationName = 'verticalScreenOn';
        document.querySelector('#verticalScreen2').style.animationDuration = '1s';
        document.querySelector('#verticalScreen').style.display = 'none';
        document.querySelector('#vertical').style.animationName = 'verticalPhOn';
        document.querySelector('#vertical').style.animationDuration = '1s';
        document.querySelector('#vertical').style.right = '0px';
        document.querySelector('#vertical').style.left = '10px';
        document.querySelector('#horizontalScreen').style.display = 'none';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen2').style.display = 'block';
        }
        document.querySelector('#horizontalScreen2').style.animationName = 'horizontalScreenOn';
        document.querySelector('#horizontalScreen2').style.animationDuration = '1s';
        document.querySelector('#horizontal').style.animationName = 'horizontalPhOn';
        document.querySelector('#horizontal').style.animationDuration = '1s';
        document.querySelector('#horizontal').style.left = '0px';
        document.querySelector('#horizontal').style.zIndex = '1';
        document.querySelector('#vertical').style.zIndex = '3';
        document.querySelector('#slider').style.animationName = 'sliderOn';
        document.querySelector('#slider').style.animationDuration = '1s';
        document.querySelector('#slider').style.backgroundColor = '#648BF0';
        document.querySelector('#slider').style.borderBottom = '5px solid rgb(136, 164, 233)';
        slider = 'next';
    } else if (slider === 'next') {
        document.querySelector('#verticalScreen').style.animationName = 'verticalScreenBack';
        document.querySelector('#verticalScreen').style.animationDuration = '1s';
        if (VerticalIphone === 'on') {
            document.querySelector('#verticalScreen').style.display = 'block';
        }
        document.querySelector('#verticalScreen2').style.display = 'none';
        document.querySelector('#vertical').style.animationName = 'verticalPhBack';
        document.querySelector('#vertical').style.animationDuration = '1s';
        document.querySelector('#vertical').style.left = '0';
        document.querySelector('#vertical').style.right = '559px';
        document.querySelector('#vertical').style.zIndex = '1';
        if (horizontalIphone === 'on') {
            document.querySelector('#horizontalScreen').style.display = 'block';
        }
        document.querySelector('#horizontalScreen').style.animationName = 'horizontalScreenBack';
        document.querySelector('#horizontalScreen').style.animationDuration = '1s';
        document.querySelector('#horizontalScreen2').style.display = 'none';
        document.querySelector('#horizontal').style.animationName = 'horizontalPhBack';
        document.querySelector('#horizontal').style.animationDuration = '1s';
        document.querySelector('#horizontal').style.left = '314px';
        document.querySelector('#slider').style.animationName = 'sliderBack';
        document.querySelector('#slider').style.animationDuration = '1s';
        document.querySelector('#slider').style.backgroundColor = '#f06c64';
        document.querySelector('#slider').style.borderBottom = '5px solid #ea676b';
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

document.querySelector('#all').addEventListener('click', () => {
    document.querySelector('#all').style.color = '#dedede';
    document.querySelector('#all').style.border = '1px solid #c5c5c5';
    document.querySelector('#artwork').style.color = '#767e9e';
    document.querySelector('#artwork').style.border = '1px solid #666d89';
    document.querySelector('#webDesign').style.color = '#767e9e';
    document.querySelector('#webDesign').style.border = '1px solid #666d89';
    document.querySelector('#graphic').style.color = '#767e9e';
    document.querySelector('#graphic').style.border = '1px solid #666d89';
    document.querySelector('#webGrap').style.display = 'none';
    document.querySelector('#artGrap').style.display = 'none';
    document.querySelector('#webAll').style.display = 'flex';
    document.querySelector('#artAll').style.display = 'flex';
    document.querySelector('#webGrapMid').style.display = 'none';
})

document.querySelector('#artwork').addEventListener('click', () => {
    document.querySelector('#all').style.color = '#767e9e';
    document.querySelector('#all').style.border = '1px solid #666d89';
    document.querySelector('#artwork').style.color = '#dedede';
    document.querySelector('#artwork').style.border = '1px solid #c5c5c5';
    document.querySelector('#webDesign').style.color = '#767e9e';
    document.querySelector('#webDesign').style.border = '1px solid #666d89';
    document.querySelector('#graphic').style.color = '#767e9e';
    document.querySelector('#graphic').style.border = '1px solid #666d89';
    document.querySelector('#webGrap').style.display = 'flex';
    document.querySelector('#artGrap').style.display = 'none';
    document.querySelector('#webAll').style.display = 'flex';
    document.querySelector('#artAll').style.display = 'none';
    document.querySelector('#webGrapMid').style.display = 'none';
})

document.querySelector('#webDesign').addEventListener('click', () => {
    document.querySelector('#all').style.color = '#767e9e';
    document.querySelector('#all').style.border = '1px solid #666d89';
    document.querySelector('#webDesign').style.color = '#dedede';
    document.querySelector('#webDesign').style.border = '1px solid #c5c5c5';
    document.querySelector('#artwork').style.color = '#767e9e';
    document.querySelector('#artwork').style.border = '1px solid #666d89';
    document.querySelector('#graphic').style.color = '#767e9e';
    document.querySelector('#graphic').style.border = '1px solid #666d89';
    document.querySelector('#webGrap').style.display = 'flex';
    document.querySelector('#artGrap').style.display = 'none';
    document.querySelector('#webAll').style.display = 'flex';
    document.querySelector('#artAll').style.display = 'none';
    document.querySelector('#webGrapMid').style.display = 'none';
})

document.querySelector('#graphic').addEventListener('click', () => {
    document.querySelector('#all').style.color = '#767e9e';
    document.querySelector('#all').style.border = '1px solid #666d89';
    document.querySelector('#artwork').style.color = '#767e9e';
    document.querySelector('#artwork').style.border = '1px solid #666d89';
    document.querySelector('#webDesign').style.color = '#767e9e';
    document.querySelector('#webDesign').style.border = '1px solid #666d89';
    document.querySelector('#graphic').style.color = '#dedede';
    document.querySelector('#graphic').style.border = '1px solid #c5c5c5';
    document.querySelector('#webGrapMid').style.display = 'flex';
    document.querySelector('#webGrap').style.display = 'none';
    document.querySelector('#artGrap').style.display = 'flex';
    document.querySelector('#webAll').style.display = 'none';
    document.querySelector('#artAll').style.display = 'none';
})

document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
document.querySelector( '#weight' ).style.border = '0px solid #F06C64';
document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
document.querySelector('#rabbits').style.border = '0px solid #F06C64';
document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
document.querySelector('#boat').style.border = '0px solid #F06C64';
document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
document.querySelector( '#city' ).style.border = '0px solid #F06C64';
document.querySelector( '#robot' ).style.border = '0px solid #F06C64';


document.getElementById('dragon').addEventListener('click', () => {
    document.querySelector('#dragon').style.border = '5px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weight' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('letters').addEventListener('click', () => {
    document.getElementById('letters').style.border = '5px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weight' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('monster').addEventListener('click', () => {
    document.getElementById('monster').style.border = '5px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weight' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('weight').addEventListener('click', () => {
    document.getElementById('weight').style.border = '5px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})

document.getElementById('dragonUp').addEventListener('click', () => {
    document.querySelector('#dragonUp').style.border = '5px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('lettersUp').addEventListener('click', () => {
    document.getElementById('lettersUp').style.border = '5px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('monsterUp').addEventListener('click', () => {
    document.getElementById('monsterUp').style.border = '5px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('weightUp').addEventListener('click', () => {
    document.getElementById('weightUp').style.border = '5px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})

document.getElementById('dragonM').addEventListener('click', () => {
    document.querySelector('#dragonM').style.border = '5px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('lettersM').addEventListener('click', () => {
    document.getElementById('lettersM').style.border = '5px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('monsterM').addEventListener('click', () => {
    document.getElementById('monsterM').style.border = '5px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('weightM').addEventListener('click', () => {
    document.getElementById('weightM').style.border = '5px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})

document.getElementById('rabbits').addEventListener('click', () => {
    document.querySelector('#rabbits').style.border = '5px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('iStruc').addEventListener('click', () => {
    document.getElementById('iStruc').style.border = '5px solid #F06C64';
    document.querySelector( '#rabbits' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('icons').addEventListener('click', () => {
    document.getElementById('icons').style.border = '5px solid #F06C64';
    document.querySelector( '#rabbits' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('birds').addEventListener('click', () => {
    document.getElementById('birds').style.border = '5px solid #F06C64';
    document.querySelector( '#rabbits' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})

document.getElementById('rabbitsUp').addEventListener('click', () => {
    document.querySelector('#rabbitsUp').style.border = '5px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('iStrucUp').addEventListener('click', () => {
    document.getElementById('iStrucUp').style.border = '5px solid #F06C64';
    document.querySelector( '#rabbitsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('iconsUp').addEventListener('click', () => {
    document.getElementById('iconsUp').style.border = '5px solid #F06C64';
    document.querySelector( '#rabbitsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})
document.getElementById('birdsUp').addEventListener('click', () => {
    document.getElementById('birdsUp').style.border = '5px solid #F06C64';
    document.querySelector( '#rabbitsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#boat').style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
})

document.getElementById('boat').addEventListener('click', () => {
    document.querySelector('#boat').style.border = '5px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
})
document.getElementById('lady').addEventListener('click', () => {
    document.getElementById('lady').style.border = '5px solid #F06C64';
    document.querySelector( '#boat' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
})
document.getElementById('city').addEventListener('click', () => {
    document.getElementById('city').style.border = '5px solid #F06C64';
    document.querySelector( '#boat' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#robot' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
})
document.getElementById('robot').addEventListener('click', () => {
    document.getElementById('robot').style.border = '5px solid #F06C64';
    document.querySelector( '#boat' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lady' ).style.border = '0px solid #F06C64';
    document.querySelector( '#city' ).style.border = '0px solid #F06C64';
    document.getElementById('weight').style.border = '0px solid #F06C64';
    document.querySelector( '#dragon' ).style.border = '0px solid #F06C64';
    document.querySelector( '#letters' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monster' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#dragonM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#lettersM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#monsterM' ).style.border = '0px solid #F06C64';
    document.querySelector( '#weightM' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbits').style.border = '0px solid #F06C64';
    document.querySelector( '#iStruc' ).style.border = '0px solid #F06C64';
    document.querySelector( '#icons' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birds' ).style.border = '0px solid #F06C64';
    document.querySelector('#rabbitsUp').style.border = '0px solid #F06C64';
    document.querySelector( '#iStrucUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#iconsUp' ).style.border = '0px solid #F06C64';
    document.querySelector( '#birdsUp' ).style.border = '0px solid #F06C64';
})

document.querySelector( '#send' ).addEventListener('click', () => {
    let subjectValue;
    let describtionValue;

    if (document.querySelector( '#subject' ).value === '') {
        subjectValue = 'Without subject';
    } else {
        subjectValue = document.querySelector( '#subject' ).value;
    }
    if (document.querySelector( '#formComments' ).value === '') {
        describtionValue = 'Without description';
    } else {
        describtionValue = document.querySelector( '#formComments' ).value;
    }
    document.querySelector( '#subject' ).value
    let message = ('The letter was sent\n' + 'Subject: ' + `${subjectValue}` + '\n' + 'Description: ' + `${describtionValue}` + '\n');

    alert(message);
})