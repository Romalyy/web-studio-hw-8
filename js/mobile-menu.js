(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("menu-button--is-open");
        menuBtnRef.getAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("nav-container--is-open");
    });
})();