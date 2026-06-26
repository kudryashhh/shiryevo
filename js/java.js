document.addEventListener("DOMContentLoaded", function() {
    // === ГРУППА 1: Основные кнопки (mesto, chelovek, sujet) ===
    const mainPairs = [
        { trigger: document.querySelector(".mesto"), panel: document.querySelector(".pod_mesto") },
        { trigger: document.querySelector(".chelovek"), panel: document.querySelector(".pod_chelovek") },
        { trigger: document.querySelector(".sujet"), panel: document.querySelector(".pod_sujet") }
    ];
    
    // === ГРУППА 2: Статьи (archive, shiryaevo, volga, nelya, roman, nemetz, nomad, shtutt, how_works) ===
    const articlePairs = [
        { trigger: document.querySelector(".archive"), panel: document.querySelector(".info") },
        { trigger: document.querySelector(".shiryaevo"), panel: document.querySelector(".shiryaevo_info") },
        { trigger: document.querySelector(".volga"), panel: document.querySelector(".volga_info") },
        { trigger: document.querySelector(".nelya"), panel: document.querySelector(".nelya_info") },
        { trigger: document.querySelector(".roman"), panel: document.querySelector(".roman_info") },
        { trigger: document.querySelector(".nemetz"), panel: document.querySelector(".nemetz_info") },
        { trigger: document.querySelector(".nomad"), panel: document.querySelector(".nomad_info") },
        { trigger: document.querySelector(".shtutt"), panel: document.querySelector(".shtutt_info") },
        { trigger: document.querySelector(".how_works"), panel: document.querySelector(".how_info") }
    ];
    
    // === ГРУППА 3: Дивы-кнопки (night, colta, strange, cave, rock, life, gosh, aroundart, tropa, dom) ===
    const divPairs = [
        { trigger: document.querySelector(".night"), panel: document.querySelector(".night_info") },
        { trigger: document.querySelector(".colta"), panel: document.querySelector(".colta_info") },
        { trigger: document.querySelector(".strange"), panel: document.querySelector(".strange_info") },
        { trigger: document.querySelector(".cave"), panel: document.querySelector(".cave_info") },
        { trigger: document.querySelector(".rock"), panel: document.querySelector(".rock_info") },
        { trigger: document.querySelector(".life"), panel: document.querySelector(".life_info") },
        { trigger: document.querySelector(".gosh"), panel: document.querySelector(".gosh_info") },
        { trigger: document.querySelector(".aroundart"), panel: document.querySelector(".aroundart_info") },
        { trigger: document.querySelector(".tropa"), panel: document.querySelector(".tropa_info") },
        { trigger: document.querySelector(".dom"), panel: document.querySelector(".dom_info") }
    ];
    
    // === ФУНКЦИИ ===
    function closeMainPanels() {
        mainPairs.forEach(pair => {
            if (pair.panel) pair.panel.classList.remove("active");
            if (pair.trigger) pair.trigger.classList.remove("active");
        });
    }
    
    function closeArticlePanels() {
        articlePairs.forEach(pair => {
            if (pair.panel) pair.panel.classList.remove("active");
            if (pair.trigger) pair.trigger.classList.remove("active");
        });
    }
    
    function closeDivPanels() {
        divPairs.forEach(pair => {
            if (pair.panel) pair.panel.classList.remove("active");
            if (pair.trigger) pair.trigger.classList.remove("active");
        });
    }
    
    function closeAllSecondaryPanels() {
        closeArticlePanels();
        closeDivPanels();
    }
    
    // === ФУНКЦИЯ ДЛЯ СКРЫТИЯ ДИВОВ (при нажатии на volga) ===
    function hideDivsForVolga() {
        const divsToHide = [
            ".colta", ".strange", ".cave",
            ".rock", ".life", ".aroundart",
            ".tropa", ".dom"
        ];
        
        divsToHide.forEach(selector => {
            const div = document.querySelector(selector);
            if (div) {
                div.style.display = "none";
            }
        });
    }
    
    // === ФУНКЦИЯ ДЛЯ СКРЫТИЯ ДИВОВ (при нажатии на nelya и roman) ===
    function hideDivsForNelyaRoman() {
        const divsToHide = [
            ".night", ".strange", ".cave",
            ".rock", ".gosh", ".tropa", ".dom"
        ];
        
        divsToHide.forEach(selector => {
            const div = document.querySelector(selector);
            if (div) {
                div.style.display = "none";
            }
        });
    }
    
    // === ФУНКЦИЯ ДЛЯ СКРЫТИЯ ДИВОВ (при нажатии на nemetz и shtutt) ===
    function hideDivsForNemetzShtutt() {
        const divsToHide = [
            ".night", ".colta", ".cave",
            ".rock", ".life", ".gosh", 
            ".aroundart", ".tropa", ".dom"
        ];
        
        divsToHide.forEach(selector => {
            const div = document.querySelector(selector);
            if (div) {
                div.style.display = "none";
            }
        });
    }
    
    // === ФУНКЦИЯ ДЛЯ СКРЫТИЯ ДИВОВ (при нажатии на nomad) ===
    function hideDivsForNomad() {
        const divsToHide = [
            ".life", ".cave"
        ];
        
        divsToHide.forEach(selector => {
            const div = document.querySelector(selector);
            if (div) {
                div.style.display = "none";
            }
        });
    }
    
    // === ФУНКЦИЯ ДЛЯ ПОКАЗА ВСЕХ ДИВОВ ===
    function showAllDivs() {
        const allDivs = [
            ".night", ".colta", ".strange", ".cave",
            ".rock", ".life", ".gosh", ".aroundart",
            ".tropa", ".dom"
        ];
        
        allDivs.forEach(selector => {
            const div = document.querySelector(selector);
            if (div) {
                div.style.display = "";
            }
        });
    }
    
    // === ОБРАБОТЧИКИ ДЛЯ ОСНОВНЫХ (НЕ возвращают дивы) ===
    mainPairs.forEach(pair => {
        if (pair.trigger && pair.panel) {
            pair.trigger.addEventListener("click", function(event) {
                event.stopPropagation();
                
                const isOpen = pair.panel.classList.contains("active");
                
                // НЕ вызываем showAllDivs() - дивы остаются в текущем состоянии
                closeMainPanels();
                
                if (!isOpen) {
                    pair.panel.classList.add("active");
                    pair.trigger.classList.add("active");
                }
            });
        }
    });
    
    // === ОБРАБОТЧИКИ ДЛЯ СТАТЕЙ ===
    articlePairs.forEach(pair => {
        if (pair.trigger && pair.panel) {
            pair.trigger.addEventListener("click", function(event) {
                event.stopPropagation();
                
                const isOpen = pair.panel.classList.contains("active");
                const isVolga = pair.trigger.classList.contains("volga");
                const isNelya = pair.trigger.classList.contains("nelya");
                const isRoman = pair.trigger.classList.contains("roman");
                const isNemetz = pair.trigger.classList.contains("nemetz");
                const isNomad = pair.trigger.classList.contains("nomad");
                const isShtutt = pair.trigger.classList.contains("shtutt");
                
                // Сначала показываем все дивы
                showAllDivs();
                
                if (isVolga) {
                    // Для volga: скрываем определённые дивы + закрываем статьи и панели дивов
                    closeArticlePanels();
                    closeDivPanels();
                    hideDivsForVolga();
                    
                    if (!isOpen) {
                        pair.panel.classList.add("active");
                        pair.trigger.classList.add("active");
                    }
                } else if (isNelya || isRoman) {
                    // Для nelya и roman: скрываем определённые дивы + закрываем статьи и панели дивов
                    closeArticlePanels();
                    closeDivPanels();
                    hideDivsForNelyaRoman();
                    
                    if (!isOpen) {
                        pair.panel.classList.add("active");
                        pair.trigger.classList.add("active");
                    }
                } else if (isNemetz || isShtutt) {
                    // Для nemetz и shtutt: скрываем определённые дивы + закрываем статьи и панели дивов
                    closeArticlePanels();
                    closeDivPanels();
                    hideDivsForNemetzShtutt();
                    
                    if (!isOpen) {
                        pair.panel.classList.add("active");
                        pair.trigger.classList.add("active");
                    }
                } else if (isNomad) {
                    // Для nomad: скрываем определённые дивы + закрываем статьи и панели дивов
                    closeArticlePanels();
                    closeDivPanels();
                    hideDivsForNomad();
                    
                    if (!isOpen) {
                        pair.panel.classList.add("active");
                        pair.trigger.classList.add("active");
                    }
                } else {
                    // Для остальных статей (archive, shiryaevo, how_works): закрываем статьи и дивы
                    closeAllSecondaryPanels();
                    
                    if (!isOpen) {
                        pair.panel.classList.add("active");
                        pair.trigger.classList.add("active");
                    }
                }
            });
        }
    });
    
    // === ОБРАБОТЧИКИ ДЛЯ ДИВОВ ===
    divPairs.forEach(pair => {
        if (pair.trigger && pair.panel) {
            pair.trigger.addEventListener("click", function(event) {
                event.stopPropagation();
                
                const isOpen = pair.panel.classList.contains("active");
                
                // Показываем все дивы перед закрытием
                showAllDivs();
                closeAllSecondaryPanels();
                
                if (!isOpen) {
                    pair.panel.classList.add("active");
                    pair.trigger.classList.add("active");
                }
            });
        }
    });
});