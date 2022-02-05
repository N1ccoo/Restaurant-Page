import stickyNavbar from "./navStick";
import create from "./dom";
// let item = create({type:'div', css:['link-container','header'], attr:{href: '#'}, text:'This is my creation.'})
// type, css[], attr{}, text

const initialLoad = () => {
   createNavBar();
   createHero();
   createContent();
   createContent();
   createFooter();
}

function createNavBar() {
    let header = create({type:'header', attr:{id:'nav-container'}});
    let nav = create({type:'nav', attr:{id:'nav-menu'}});
    let ul = create({type:'ul', css:['nav-links']});
    
    let logo = create({type:'p',css:['logo'], text:"Nicco's Restaurant" });
    let li1 = create({type:'li'});
    let li2 = create({type:'li'});
    let homeLink = create({type:'a', attr:{href:'#'}, text:'Home'});
    let menuLink = create({type:'a', attr:{href:'#'}, text:'Menu'});
    let contactButton = create({type:'button',  text:'Contact'});
    let contactLink = create({type:'a', css:['contact'], attr:{href:'#'}});

    document.body.append(header);
        header.append(logo);
        header.append(nav);
            nav.append(ul);
                ul.append(li1,li2);
                    li1.append(homeLink);
                    li2.append(menuLink);
    
        header.append(contactLink);
            contactLink.append(contactButton);    

    stickyNavbar()        
};

function createHero() {
    let heroContainer = create({type:'div',css:['hero-container']});
    let heroText = create({type:'div',css:['hero-text']});
    let heroImage = create({type:'div',css:['hero-image']});
        let h1 = create({type:'h1',text:'To Burger, or not to Burger?'})
        let p1 = create({type:'p',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et hendrerit magna. Donec faucibus, nulla in facilisis laoreet, arcu sapien aliquam risus, ac pretium dui lacus ac leo. Sed tincidunt, quam sed facilisis congue.'});
        
    document.body.append(heroContainer);
       
        heroContainer.append(heroImage);
            heroImage.append(heroText)
            heroText.append(h1,p1);
            
        
}

function createContent() {
    let contentContainer = create({type:'div',css:['content-container']});

    let h1 = create({type:'h1',css:['content-header'], text:'Header Text'});
    let text = create({type:'p',css:['content-text'], text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia, nunc at finibus fermentum, lorem magna tristique neque, at accumsan libero nisi non neque. Ut a dolor nibh. Mauris mi eros, aliquam et convallis eu, porttitor id quam. Fusce felis justo, volutpat sed massa et, interdum convallis felis. Aliquam vel nunc consequat, scelerisque nisi sit amet, elementum risus. Donec imperdiet posuere risus quis porta. Nulla at congue ante, ac egestas velit. Praesent scelerisque tellus quis elit congue, quis pulvinar dui vestibulum. '})

    document.body.append(contentContainer);
        contentContainer.append(h1, text);
}

function createFooter() {
    let footer = create({type:'footer',attr:{id:'footer'}});
    let p = create({type:'p',css:['blue-text'],text:'Copyright © 2021 N1ccoo'});
    let link = create({type:'a', attr:{href:'https://github.com/N1ccoo'}});
    let button = create({type:'button',css:['blue-text'],text:'GITHUB'});
    


    document.body.append(footer);
        footer.append(p,link);
          link.append(button);
}



export default initialLoad