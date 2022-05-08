function changeVisibility(cond, cond2, element, element2) {


    if (cond || cond2) {

        element.dataset.state = 'visible';
        element2.dataset.state = 'visible';
        document.body.style.setProperty('overflow', 'hidden');
        document.body.style.setProperty('padding-right', '15px');

    } else {

        element.dataset.state = 'hidden';
        element2.dataset.state = 'hidden';
        document.body.style.removeProperty('overflow');
        document.body.style.removeProperty('padding-right');
        
    }

}

function updateLists(currentIndex, allLists, beacon, beacons) {

    allLists.forEach((list) => {

        if (list.dataset.listItem == currentIndex)
            list.style.display = 'block';
        else
            list.style.display = 'none';

    });

    beacons.forEach((current) => {

        if (current.dataset.list == beacon.dataset.list) {
            if (!current.classList.contains('active'))
                current.classList.add('active');
        } else {
            if (current.classList.contains('active'))
                current.classList.remove('active');
        } 

    });

}


function resizeWidthOnly(a,b) {  

    let c = [window.innerWidth];
    return onresize = function() {

        let d = window.innerWidth, 
            e = c.length;
        c.push(d);
        
        if (c[e] !== c[e-1]) {

            clearTimeout(b);
            b = setTimeout(a, 50);

        }

    }, a;

}

window.addEventListener('load', () => {

    const menu = document.getElementById('globalNav');
    const beacons = document.querySelectorAll('#globalNav [data-nav=link]');
    const subBeacons = document.querySelectorAll('#globalNav #curtainMain [data-sub-item]');

    const curtainMain = document.querySelector('#globalNav #curtainMain');
    const curtainSub = document.querySelector('#globalNav #curtainSub');

    const listsMain = document.querySelectorAll('#globalNav #curtainMain [data-list-item]');
    const listsSub = document.querySelectorAll('#globalNav #curtainSub [data-sub-main]');

    let listIndex;
    let subListIndex;


    let leftPos = curtainMain.offsetWidth;

    menu.style.setProperty('--visible-position-sub', `${leftPos - 30}px`);

    resizeWidthOnly(function() {
    
        leftPos = curtainMain.offsetWidth;
        menu.style.setProperty('--visible-position-sub', `${leftPos - 30}px`);
    
    });


    let isVisible = false;
    let isSub = false;

    beacons.forEach((item) => {
        // Show main curtain
        item.addEventListener('mouseenter', () => {
            
            isVisible = true;
            changeVisibility(isVisible, isSub, menu, curtainSub);

        });

        // change active list in main curtain
        item.addEventListener('mousemove', () => {
            
            item.classList.add('active');
            listIndex = item.dataset.list;

            updateLists(listIndex, listsMain, item, beacons);
            
            subBeacons.forEach((current) => {

                if (current.classList.contains('active')) {

                    current.classList.remove('active');

                }

            });

            // mobile
            curtainMain.dataset.mobileState = 'visible'

        });

    });

    // show main curtain
    curtainMain.addEventListener('mouseenter', () => {

        isVisible = true;
        changeVisibility(isVisible, isSub, menu, curtainSub);

    });

    // hide main curtain
    curtainMain.addEventListener('mouseleave', () => {

        isVisible = false;
        changeVisibility(isVisible, isSub, menu, curtainSub);

    });

    curtainSub.addEventListener('mouseleave', () => {

        isSub = false;
        changeVisibility(isVisible, isSub, menu, curtainSub);

    })

    // show sub curtain
    subBeacons.forEach((sub) => {

        sub.addEventListener('mouseenter', ()=> {
            isSub = true;
        });

        sub.addEventListener('mousemove', () => {

            sub.classList.add('active');
            curtainSub.dataset.stateSub = 'visible';
            subListIndex = sub.dataset.subItem;

            subBeacons.forEach((current) => {

                if (current.dataset.subItem == subListIndex) {

                    current.classList.add('active');

                } else {

                    current.classList.remove('active');

                }

            });

            listsSub.forEach((list) => {

                if (list.dataset.subMain == listIndex) {

                    list.style.display = 'block';

                    let children = Array.from(list.children);
                    children.forEach((child) => {

                        if (child.dataset.sub == subListIndex) {

                            child.style.display = 'block';

                        } else {

                            child.style.display = 'none';

                        }

                    });

                } else {

                    list.style.display = 'none';

                }

            });

            // mobile
            curtainSub.dataset.mobileSubState = 'visible'
    
        });

    });


    // Mobile
    const btnOpen = document.getElementById('sidebar-mobile-open');
    const overlay = document.getElementById('sidebar-overlay');
    const btnClose = document.getElementById('sidebar-mobile-close');
    const btnBack = document.querySelectorAll('[data-control="back"]');

    btnOpen.addEventListener('touchstart', () => {

        setTimeout(() => {

            isVisible = true;
            changeVisibility(isVisible, isSub, menu, curtainSub);
            let initialList = document.querySelector('#globalNav [data-list="1"]');

            initialList.classList.add('active');
            listIndex = initialList.dataset.list;

            updateLists(listIndex, listsMain, initialList, beacons);

            // mobile only
            menu.classList.toggle('mobile-active');

        }, 300);
        
    });

    btnClose.addEventListener('touchstart', () => {

        setTimeout(() => {

            isVisible = false;
            isSub = false;
            changeVisibility(isVisible, isSub, menu, curtainSub);

            // mobile only
            menu.classList.toggle('mobile-active');

        }, 300);
        
    })

    btnBack.forEach((btn) => {

        btn.addEventListener('touchstart', () => {

            curtainMain.dataset.mobileState = 'hidden';
            curtainSub.dataset.mobileSubState = 'hidden';
            if (language.classList.contains('active')) {
                language.classList.remove('active');
            }
            if (search.classList.contains('active')) {
                search.classList.remove('active');
            }
    
        });

    });

    overlay.addEventListener('touchstart', () => {

        isVisible = false;
        isSub = false;
        changeVisibility(isVisible, isSub, menu, curtainSub);

    });

    // Language menu
    const languageBeacons = document.querySelectorAll('[data-modal="language"]');
    const language = document.getElementById('sidebar-language');
    const closeLanguageButton = document.getElementById('language-close');


    languageBeacons.forEach((item) => {
        
        item.addEventListener('click', () => {

            if (!language.classList.contains('active')) {

                language.classList.add('active');
    
            }
            
        });

    });

    closeLanguageButton.addEventListener('click', () => {

        if (language.classList.contains('active')) {

            language.classList.remove('active');

        }
        
    });


    // Search menu
    const searchBeacons = document.querySelectorAll('[data-modal="search"]');
    const search = document.getElementById('sidebar-search');
    const closeSearchButton = document.getElementById('search-close');


    searchBeacons.forEach((item) => {
        
        item.addEventListener('click', () => {

            if (!search.classList.contains('active')) {

                search.classList.add('active');
                
            }
            
        });

    });

    closeSearchButton.addEventListener('click', () => {

        if (search.classList.contains('active')) {

            search.classList.remove('active');

        }
        
    });



    
});