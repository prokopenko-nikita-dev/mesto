
//  ============== Открытие Попап-модального окна ===================

export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
}

//  ============== Закрытие Попап-модального окна ===================

export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);
}

//  ============== закрытие и открытие попап по кнопке Esc ===================

export function closeByEscape(e) {
    if (e.key === "Escape") {
        const popupOpened = document.querySelector(".popup_opened");
        closePopup(popupOpened);
    }
}
