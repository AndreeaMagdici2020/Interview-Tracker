class createElem{
    constructor(type, parent)
    {
        this.type=type;
        this.parent=parent;
    }

    render()
    {
        this.element=document.createElement(this.type);
        this.parent.appendChild(this.element);
        
    }

    design(height,width)
    {
        this.element.style.height=height;
        this.element.style.width=width;
        this.element.style.border="solid";
        this.element.style.borderColor="black";
        this.element.style.margin=("0 auto");
        this.element.style.backgroundColor="#E9A60E";
        this.element.style.borderColor="white";
    }
    picture_design(src, height, width)
    {
        this.element.style.height=height;
        this.element.style.width=width;
        this.element.style.margin=("0 auto");
        this.element.style.borderRadius="150px";
        this.element.style.marginTop="130px";
        this.element.style.marginLeft="120px";
        this.element.src=src;
        this.element.style.borderColor="white";
        this.element.style.borderStyle="dotted solid";
    }
};

class createText{

    constructor(type,parent)
    {
        this.type=type;
        this.parent=parent;
    }

    renderText()
    {
        this.element=document.createElement("p");
        this.parent.appendChild(this.element);
    }

    styleText(text)
    {
        this.element.style.color="white";
        this.element.style.fontFamily="American Typewriter, serif";
        this.element.style.fontSize="30px";
        this.element.style.float="right";
        this.element.style.marginTop="130px";
        this.element.style.marginRight="53px";
        this.element.innerHTML=text;
    }
}

var header=new createElem("div", document.body);
header.render();
header.design("50px", "1000px");

var main=new createElem("div", document.body);
main.render();
main.design("500px", "1000px");




var main_pic=new createElem("img",main.element);
main_pic.render();
main_pic.design("300px", "300px");
main_pic.picture_design("mainpic.png", "230px", "300px");

var mainpageText=new createText("p",main.element);
mainpageText.renderText();
mainpageText.styleText("Welcom to our Interview Tracker");











