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
    }
    picture_design(src, height, width)
    {
        this.element.style.height=height;
        this.element.style.width=width;
        this.element.style.margin=("0 auto");
        this.element.style.borderRadius="50px";
        this.element.src=src;
    }
};

var header=new createElem("div", document.body);
header.render();
header.design("50px", "1000px");

var main=new createElem("div", document.body);
main.render();
main.design("500px", "1000px");



var main_pic=new createElem("img",main.element);
main_pic.render();
main_pic.design("300px", "300px");
main_pic.picture_design("0_nIqyCjF2MbjUi-Jf.jpg", "100px", "100px");










