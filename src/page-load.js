import create from "./dom";
// let item = create({type:'div', css:['link-container','header'], attr:{href: '#'}, text:'This is my creation.'})
// type, css[], attr{}, text

const initialLoad = () => {
   createNavBar();
}

function createNavBar() {
    let header = create({type:'header'});
    let nav = create({type:'nav'});
    let ul = create({type:'ul', css:['nav-links']});
    let li1 = create({type:'li'});
    let li2 = create({type:'li'});
    let li3 = create({type:'li'});
    let link1 = create({type:'a', attr:{href:'#'}, text:'Home'});
    let link2 = create({type:'a', attr:{href:'#'}, text:'Menu'});
    let link3 = create({type:'a', attr:{href:'#'}, text:'Contact'});

    document.body.append(header);
    header.append(nav);
    nav.append(ul);
    ul.append(li1,li2,li3);

    li1.append(link1);
    li2.append(link2);
    li3.append(link3);
}



export default initialLoad