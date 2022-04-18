const keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard");
        this.elements.keysContainer.classList.add("keyboard_keys");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "backspace"
            "a", "s", "d", "f", "g", "h", "j", "k", "l", "capslock",
            "z", "x", "c", "v", "b", "n", "m", "-", "_", "shift",
            "space", "enter"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return <button class="keyword_keys">$(icon_name)</button>;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "backspace", "capslock", "shift"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("btn1");
        },
    },

    _triggerEvent(handlerName) {
        console.log("Event Triggered! Event Name: " + handlerName);
    },

    open(initialValue, oninput, onclose) {

    },

    close() {

    },
}