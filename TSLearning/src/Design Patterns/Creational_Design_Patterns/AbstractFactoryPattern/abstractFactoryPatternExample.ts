
interface IButton{
    render():void
    onClick(f:Function):void
}

interface ICheckBox{
    render():void
    toggle():void
}

interface GUIFactory{
    createButton():IButton
    createCheckBox(button:IButton):ICheckBox
}

class WindowsButton implements IButton{

    render(): void {
        console.log('rendering windows button')
    }

    onClick(f:Function): void {
        console.log('onClick Windows Button')
        f()
    }
}

class MacOsButton implements IButton{
    render(): void {
        console.log('rendering MacOs button')
    }

    onClick(f:Function): void {
        console.log('onClick MacOs Button')
        f()
    }
}



class WindowsCheckBox implements ICheckBox{

    constructor(private button:IButton){}

    render(): void {
        console.log('rendering windows Checkbox')
    }

    toggle(): void {
        this.button.onClick(()=>{console.log("Windows Checkbox Toggled")})
    }
}

class MacOsCheckBox implements ICheckBox{

    constructor(private button:IButton){}

    render(): void {
        console.log('rendering MacOs checkbox')
    }

    toggle(): void {
        this.button.onClick(()=>{console.log("MacOs Checkbox Toggled")})
    }
}


class WindowsFactory implements GUIFactory{
    createButton(): IButton {
        return new WindowsButton()
    }

    createCheckBox(button:IButton): ICheckBox {
        return new WindowsCheckBox(button)
    }
}

class MacOsFactory implements GUIFactory{
    
    createButton(): IButton {
        return new MacOsButton()
    }

    createCheckBox(button:IButton): ICheckBox {
        return new MacOsCheckBox(button)
    }
}


// client Code

function renderUI(factory:GUIFactory){
    
    const button = factory.createButton()

    const checkbox = factory.createCheckBox(button)

    button.render()
    checkbox.render()

    button.onClick(()=>{
        console.log("Button Clicked")
    })
    checkbox.toggle()
}


renderUI(new WindowsFactory())

renderUI(new MacOsFactory())