const addaDiv = document.getElementById("addDiv")
const clicky = document.getElementById("clickme")
//- Using a function pointer:

function doFunction() {
        let d = document.createElement("div");
        let h = document.createElement("H3");
        let b = document.createTextNode("title");
        let x = document.createElement("P");
        let t = document.createTextNode("This is a paragraph.");
        d.appendChild(h);
        h.appendChild(b);
        document.body.appendChild(d);
        h.appendChild(x);
        x.appendChild(t);
        document.body.appendChild(d);
        document.getElementById("content").appendChild(d);
      }
    // const addaDiv = document.getElementById("addDiv")
    // addaDiv.innerHTML = `<div> <h3>NEW DIV</h3> <pre>words in english</pre> </div>`;
    // innerHTML = ' ';
    // .innerHTML =
    // addDiv.innerHTML += `<div> words in english </div>`
    // document.getElementById("addDiv").addEventListener('click', doFunction);
    // clicky.addEventListener("click", doFunction);
    // document.getElementById("clickMe").addEventListener('click', doFunction);
    // }

document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('#content h3');
    if (headings && headings.length) {

        let tableOfContentInner = '';
        headings.forEach((heading, i) => {
            // generate an 'li' element that includes a link to the appropriate section
            tableOfContentInner += `<li><a href="#section_${i}">${heading.textContent}</a></li>`
            const originalHeadingContent = heading.innerHTML;
            const anchor = `<a class="offset-anchor" id="section_${i}"></a>`
                // add the anchor to the <h3> tag
            heading.innerHTML = anchor + originalHeadingContent
        })

        const tableOfContent = `<ol>${tableOfContentInner}</ol>`
            // add the generated table of content to the dive
        document.querySelector('#table-of-content').innerHTML += tableOfContent


        // automatically go to the correct section on load
        if (location.hash) {
            const target = location.hash;
            const offsetY = document.querySelector(target).offsetTop;
            window.scrollTo(10, offsetY);
        }

    }
}) 
