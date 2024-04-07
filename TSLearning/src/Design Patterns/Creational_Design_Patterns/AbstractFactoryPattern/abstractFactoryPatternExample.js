var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.render = function () {
        console.log('rendering windows button');
    };
    WindowsButton.prototype.onClick = function (f) {
        console.log('onClick Windows Button');
        f();
    };
    return WindowsButton;
}());
var MacOsButton = /** @class */ (function () {
    function MacOsButton() {
    }
    MacOsButton.prototype.render = function () {
        console.log('rendering MacOs button');
    };
    MacOsButton.prototype.onClick = function (f) {
        console.log('onClick MacOs Button');
        f();
    };
    return MacOsButton;
}());
var WindowsCheckBox = /** @class */ (function () {
    function WindowsCheckBox(button) {
        this.button = button;
    }
    WindowsCheckBox.prototype.render = function () {
        console.log('rendering windows Checkbox');
    };
    WindowsCheckBox.prototype.toggle = function () {
        this.button.onClick(function () { console.log("Windows Checkbox Toggled"); });
    };
    return WindowsCheckBox;
}());
var MacOsCheckBox = /** @class */ (function () {
    function MacOsCheckBox(button) {
        this.button = button;
    }
    MacOsCheckBox.prototype.render = function () {
        console.log('rendering MacOs checkbox');
    };
    MacOsCheckBox.prototype.toggle = function () {
        this.button.onClick(function () { console.log("MacOs Checkbox Toggled"); });
    };
    return MacOsCheckBox;
}());
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createCheckBox = function (button) {
        return new WindowsCheckBox(button);
    };
    return WindowsFactory;
}());
var MacOsFactory = /** @class */ (function () {
    function MacOsFactory() {
    }
    MacOsFactory.prototype.createButton = function () {
        return new MacOsButton();
    };
    MacOsFactory.prototype.createCheckBox = function (button) {
        return new MacOsCheckBox(button);
    };
    return MacOsFactory;
}());
// client Code
function renderUI(factory) {
    var button = factory.createButton();
    var checkbox = factory.createCheckBox(button);
    button.render();
    checkbox.render();
    button.onClick(function () {
        console.log("Button Clicked");
    });
    checkbox.toggle();
}
renderUI(new WindowsFactory());
renderUI(new MacOsFactory());
