const berkText = document.querySelector(".berk-text")
const europeText = document.querySelector(".europe-text")
const FEWDText = document.querySelector(".FEWD-text")
const MLText = document.querySelector(".ML-text")
const AIText = document.querySelector(".AI-text")
const brandLogo = document.querySelector(".navbar-brand")


const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: .1,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 3,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});



brandLogo.addEventListener('mouseenter', () => {
    if (cursor.visible) {
        cursor.hide();
        cursor.visible = false;
    } else {
        setTimeout(() => {
            cursor.show();
            cursor.visible = true;
        }); 
    }
});

berkText.addEventListener('mouseenter', () => {
    cursor.setText("Berk")
});

berkText.addEventListener('mouseleave', () => {
    cursor.removeText();
});