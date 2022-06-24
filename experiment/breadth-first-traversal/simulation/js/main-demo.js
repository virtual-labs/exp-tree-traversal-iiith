import { treeData } from "./data.js";
import { tree_traversal,svg,root,i,changesvg,changeroot,changei} from "./globalvariables.js";
import { togglecolors,preorder,postorder,inorder} from "./traversals-demo.js";

function change(){
    document.getElementById("startNext").innerHTML="Next";
    resetTraversal(); 
    if(document.getElementById("trav")){
     
    if(document.getElementById("trav").value=="inorder")inorder();
    if(document.getElementById("trav").value=="preorder")preorder();
    if(document.getElementById("trav").value=="postorder")postorder();            
}
}


var paused=0;
var dem;
var flag_started=0;
changesvg(d3.select("#tree").append("svg")
  .attr("id","grap")
  .attr("width", tree_traversal.width + tree_traversal.margin.right + tree_traversal.margin.left)
  .attr("height", tree_traversal.height + tree_traversal.margin.top + tree_traversal.margin.bottom)
  .attr('viewBox','-70 -15 700 500')
  .append("g")
  .attr("transform", "translate(" + tree_traversal.margin.left + "," + tree_traversal.margin.top + ")"));
changeroot(treeData[0]);
update(treeData[0]);

document.getElementById("startNext").innerHTML="Start";
function startNext(){
    document.getElementById("startNext").innerHTML="Next";
    if(flag_started==0){
        if(document.getElementById("trav")){
  
        if(document.getElementById("trav").value=="inorder")inorder();
        if(document.getElementById("trav").value=="preorder")preorder();
        if(document.getElementById("trav").value=="postorder")postorder();            
        document.getElementById("startNext").innerHTML="Next";
    }
        else{bft();}
            flag_started=1;
    }
    else{console.log("next");
        if(i==ans.length)return;
        visitElement(ans[i],animX1);
        d3.select("#traversal").append("text").text(ans[i].name + " ");
        i++;
        if(i==ans.length)clearInterval(dem);}
}
window.startNext=startNext;
export   function resetTraversal() {
    changei(0);
    paused=0;
    document.getElementById("pause").innerHTML="pause";
    ans=[];
    flag_started=0; 
    if(dem){clearInterval(dem);}
    let textTraversal = document.getElementById('traversal');
    while (textTraversal.firstChild) {
        textTraversal.removeChild(textTraversal.firstChild);
    }
    d3.selectAll(".node")
        .transition().duration(tree_traversal.animDuration)
        .style("fill", "#fff")
        .style("stroke", "steelblue");
    
    if (document.getElementById("inorder")) {
        document.getElementById("inorder").disabled = false;
        document.getElementById("postorder").disabled = false;
        document.getElementById("preorder").disabled = false;
        document.getElementById("inorder").style.borderColor = "#3297CF";
        document.getElementById("preorder").style.borderColor = "#3297CF";
        document.getElementById("postorder").style.borderColor = "#3297CF";
        document.getElementById("inorder").style.color = '#FFFFFF';
        document.getElementById("postorder").style.color = '#FFFFFF';
        document.getElementById("preorder").style.color = '#FFFFFF';
        document.getElementById("inorder").style.backgroundColor = "#3297CF";
        document.getElementById("preorder").style.backgroundColor = "#3297CF";
        document.getElementById("postorder").style.backgroundColor = "#3297CF";
    } 
    else if (document.getElementById("bft")) 
    {
        document.getElementById("bft").disabled = false;
        document.getElementById("bft").style.color = '#FFFFFF';
        document.getElementById("bft").style.borderColor = "#3297CF";
        document.getElementById("bft").style.backgroundColor = "#3297CF";
    }
}

function visitElement(element, animX) {
   
    tree_traversal.animDuration=0;
        d3.select("#node-" + element.id)
        .transition().duration(tree_traversal.animDuration).delay(tree_traversal.animDuration * animX)
        .style("fill", "rgb(158, 208, 62)").style("stroke", "rgb(158, 208, 62)");
    
    
}
function update(root) {
    resetTraversal();
    var nodes = tree_traversal.tree.nodes(root).reverse(),
        links = tree_traversal.tree.links(nodes);
    nodes.forEach(function(d) {
        d.y = d.depth * 150;
    });
    var nodes1 = svg.append("g").attr("id", "nodes").selectAll("g.node")
        .data(nodes, function(d) {
            return d.id || (d.id = changei(i+1));
        });
    var elemEnter = nodes1.enter()
        .append("g")
    elemEnter.append("circle")
        .attr("class", "node")
        .attr("id", function(d) {
            return "node-" + d.id;
        })
        .attr("cx", function(d) {
            return d.x;
        })
        .attr("cy", function(d) {
            return d.y;
        })
        .attr("r", 29)
        .style("stroke", "rgb(158, 208, 62)")
        .html(i)
    elemEnter.append("svg:a")
        .html(function(d) {
            return d.name
        })
        .attr("xlink:href", function(d) {
            return d.id;
        })
        .attr("x", function(d) {
            return d.x - 6
        })
        .attr("y", function(d) {
            return d.y + 6
        })
    elemEnter.append("text")
        .text(function(d) {
            return d.name
        })
        .attr("x", function(d) {
            return d.x - 6
        })
        .attr("y", function(d) {
            return d.y + 6
        })
        .style("font-size","29px")
    var linkWrapper = svg.append("g").attr("id", "links").selectAll("path.link")
        .data(links, function(d) {
            return d.target.id;
        })
        .enter()
        .append("line", "g")
        .attr("stroke-width", 8)
        .attr("class", "link")
        .attr("id", function(d) {
            return d.source.id + "->" + d.target.id;
        })
        .attr('x1', function(d) {
            return d.source.x;
        })
        .attr('x2', function(d) {
            return d.target.x;
        })
        .attr('y1', function(d) {
            return d.source.y;
        })
        .attr('y2', function(d) {
            return d.target.y;
        });

    d3.select("#nodes").moveToFront();

}

function bft() {

    resetTraversal();
    document.getElementById("bft").style.backgroundColor = '#97CB3B';
    document.getElementById("bft").style.color = '#000000';
    document.getElementById("bft").style.borderColor = "#97CB3B";
    document.getElementById("bft").disabled=true;
    document.getElementById("reset").disabled=true;
    var queue = [];
    var animX = 0;
    queue.push(root);
    while (queue.length !== 0) {
       
        var element = queue.shift();
        ans.push(element);
        if (element.children !== undefined) {
            for (var i = 0; i < element.children.length; i++) {
                queue.push(element.children[i]);
            }
        }
    }

    document.getElementById("reset").disabled=false;
    console.log(ans);
    dem=setInterval(demo,2000);
}

function dft() {
    resetTraversal();
    var stack = [];
    var animX = 0;
    stack.push(root);
    while (stack.length !== 0) {
        var element = stack.pop();
        visitElement(element, animX);
        animX = animX + 1;
        if (element.children !== undefined) {
            for (var i = 0; i < element.children.length; i++) {
                stack.push(element.children[element.children.length - i - 1]);
            }
        }
    }
}
var animX1 = 0;
function pause(){
    
    if(paused==0){
        paused=1;
        document.getElementById("pause").innerHTML="play";
    }
    else{
        paused=0;
        document.getElementById("pause").innerHTML="pause";
    }
    console.log(paused+"=");
}
window.pause=pause;
var ans=[];

function demo(){
if(paused==1)return;
console.log(i);
visitElement(ans[i],animX1);
d3.select("#traversal").append("text").text(ans[i].name + " ");
changei(i+1);
if(i==ans.length)clearInterval(dem);
if(i!=ans.length){
clearInterval(dem);
dem=setInterval(demo,4000-document.getElementById("speed").value)
}
}
function innorder(root){
    if (root !== undefined) {
        if (root.children !== undefined)
            innorder(root.children[0])
//        visitElement(root, animX1);
       ans.push(root);
        animX1 = animX1 ;
        if (root.children !== undefined)
            innorder(root.children[1])
    }
}
export function recursiveInorder(root) {
    ans=[];
    innorder(root);
    console.log(ans);
    dem=setInterval(demo,2000);
}
function preeorder(root){
    if (root !== undefined) {
    ans.push(root);
        //    visitElement(root, animX1);
        if (root.children !== undefined)
            preeorder(root.children[0])

        if (root.children !== undefined)
            preeorder(root.children[1])
    }
}
export function recursivePreorder(root) {
    ans=[];
    preeorder(root);
    console.log(ans);
    dem=setInterval(demo,2000);
}

function posttorder(root){

    if (root !== undefined) {

        if (root.children !== undefined)
            posttorder(root.children[0])

        if (root.children !== undefined)
        posttorder(root.children[1])
//        visitElement(root, animX1);
        ans.push(root);
}


}

export function recursivePostorder(root) {
    ans=[];
    posttorder(root);
    console.log(ans);
    dem=setInterval(demo,2000);
}

function reset(){
   document.getElementById("startNext").innerHTML="Start";
   resetTraversal();
}
window.reset=reset;
