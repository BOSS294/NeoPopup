/* 
    Module Name: 3D Popup Module
    Module Version: 2.0.0
    Module Used For: Displaying a modern 3D popup in a customizable manner
    How to Use: Call developmentPopup.init() with options to show the popup
    Developed by: Mayank Chawdhari
    Developed On: 2024-11-26
*/

const developmentPopup = (() => {
    let popupTimeout = null; 

    const createPopup = (options) => {
        const { 
            title = "Under Development", 
            body = "🚧 <strong>Oops! You caught us mid-code!</strong> 🚀 <br><br> This page is currently under development.", 
            buttonText = "Check Latest Updates", 
            buttonCallback = null, 
            position = "bottom-right", 
            theme = "dark", 
            colors = {}, 
            size = {}, 
            animation = "slide", 
            autoClose = false, 
            closeDuration = 5000, 
            persistent = false 
        } = options;

        // Create wrapper
        const dpWrapper = document.createElement('div');
        dpWrapper.classList.add('DP-popup-wrapper', `DP-position-${position}`, `DP-theme-${theme}`);

        // Apply size options
        const dpContent = document.createElement('div');
        dpContent.classList.add('DP-popup-content');
        dpContent.style.width = size.width || "350px";
        dpContent.style.height = size.height || "auto";

        dpContent.innerHTML = `
            <div class="DP-popup-header">${title}</div>
            <div class="DP-popup-body">
                <p>${body}</p>
            </div>
            <div class="DP-popup-footer">
                <button class="DP-close-btn">${buttonText}</button>
                ${persistent ? '<button class="DP-dont-show">Don\'t show again</button>' : ''}
            </div>
        `;

        dpWrapper.appendChild(dpContent);
        document.body.appendChild(dpWrapper);

        if (colors.background) dpContent.style.background = colors.background;
        if (colors.text) dpContent.style.color = colors.text;
        if (colors.button) {
            const buttons = dpContent.querySelectorAll('button');
            buttons.forEach((btn) => btn.style.backgroundColor = colors.button);
        }

        const dpCloseButton = dpWrapper.querySelector('.DP-close-btn');
        dpCloseButton.addEventListener('click', () => {
            if (buttonCallback) buttonCallback();
            closePopup(dpWrapper);
        });

        if (persistent) {
            const dpDontShowButton = dpWrapper.querySelector('.DP-dont-show');
            dpDontShowButton.addEventListener('click', () => {
                localStorage.setItem('DP-dont-show', 'true');
                closePopup(dpWrapper);
            });
        }

        if (autoClose) {
            popupTimeout = setTimeout(() => closePopup(dpWrapper), closeDuration);
        }
    };

    const closePopup = (popup) => {
        popup.classList.add('DP-closing');
        setTimeout(() => popup.remove(), 300);
    };

    const init = (options = {}) => {
        if (localStorage.getItem('DP-dont-show') && options.persistent) return; 

        createPopup({
            ...options
        });
    };

    return {
        init,
    };
})();


const dpStyle = document.createElement('style');
dpStyle.innerHTML = `
    .DP-popup-wrapper {
        position: fixed;
        z-index: 9999;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        opacity: 0;
        animation: DP-popupSlideIn 0.5s ease-out forwards;
    }
    .DP-position-bottom-right { bottom: 20px; right: 20px; }
    .DP-position-top-right { top: 20px; right: 20px; }
    .DP-position-bottom-left { bottom: 20px; left: 20px; }
    .DP-position-top-left { top: 20px; left: 20px; }
    .DP-popup-content {
        background: linear-gradient(135deg, #2c2c2c, #1f1f1f);
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        padding: 20px;
        transform: rotateX(10deg) rotateY(10deg);
        animation: DP-popup3DIn 0.5s ease-out forwards;
    }
    .DP-theme-dark .DP-popup-content { background: linear-gradient(135deg, #2c2c2c, #1f1f1f); }
    .DP-theme-light .DP-popup-content { background: #ffffff; color: #333; }
    .DP-popup-header { font-size: 20px; font-weight: bold; margin-bottom: 12px; color: #fff; }
    .DP-popup-body p { font-size: 16px; color: #e0e0e0; }
    .DP-popup-footer { margin-top: 15px; text-align: center; }
    .DP-close-btn, .DP-dont-show {
        background-color: #ff4c4c;
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
        margin: 0 5px;
    }
    .DP-close-btn:hover, .DP-dont-show:hover { background-color: #e04444; }
    .DP-closing { opacity: 0; transform: translateY(100px); transition: opacity 0.3s ease, transform 0.3s ease; }
    @keyframes DP-popupSlideIn { to { opacity: 1; transform: translateY(0); } }
    @keyframes DP-popup3DIn { to { transform: rotateX(0deg) rotateY(0deg); } }
`;
document.head.appendChild(dpStyle);
