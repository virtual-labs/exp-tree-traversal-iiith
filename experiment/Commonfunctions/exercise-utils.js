"use strict";
import { treeData } from "../depth-first-traversal/simulation/js/data.js";

import {tree_traversal,svg,root,i,changeSvg,changeRoot,changei} from "../depth-first-traversal/simulation/js/globalvariables.js";

import {preorder} from "../depth-first-traversal/simulation/js/traversals.js"; 

if(document.getElementById('inorder')){
    document.getElementById('inorder').style.visibility = 'hidden';}
if(document.getElementById('postorder')){
    document.getElementById('postorder').style.visibility = 'hidden';}



export let prev_selected_node = null;
export var node_map = new Map();

export function resetTraversal() {
    tree_traversal.error = 0;
    document.getElementById("commentbox").style.display = "none";
    document.getElementById("generate").disabled=false;
    if (document.contains(document.getElementById("inorder"))) {
        document.getElementById("inorder").style.backgroundColor = '#3297CF';
        document.getElementById("preorder").style.backgroundColor = '#3297CF';
        document.getElementById("postorder").style.backgroundColor = '#3297CF';
    } else if (document.contains(document.getElementById("bft"))) {
        document.getElementById("bft").style.backgroundColor = '#3297CF';
    }

    if (tree_traversal.disabled_ids.length > 0) {
        for (changei(0); i < tree_traversal.disabled_ids.length; changei(i+1)) {
            document.getElementById(tree_traversal.disabled_ids[i]).style.pointerEvents = 'auto';
        }
        tree_traversal.disabled_ids = []
    }
    tree_traversal.traversal_selected = false;
    prev_selected_node = null;
    node_map.clear();

    document.getElementById("traversal").innerHTML = "";
    document.getElementById("comments").innerHTML = "";
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
    } else if (document.getElementById("bft")) {
        document.getElementById("bft").style.color = '#FFFFFF';
        document.getElementById("bft").style.borderColor = "#3297CF";
    }
}
window.resetTraversal=resetTraversal;


export function generateGraph(){
    
    let textTraversal=document.getElementById('tree');
    d3.select("svg").remove();
    changeSvg(d3.select("#tree").append("svg")
    .attr("id","grap") 
    .attr("width", tree_traversal.width + tree_traversal.margin.right + tree_traversal.margin.left)
    .attr("height", tree_traversal.height + tree_traversal.margin.top + tree_traversal.margin.bottom)
    .attr('viewBox','-70 -15 700 530')
    .append("g")
    .attr("transform", "translate(" + tree_traversal.margin.left + "," + tree_traversal.margin.top + ")"));
    var random=Math.floor(Math.random() * 100);  
    random=(random%treeData.length);
    changeRoot(treeData[random]);
    update(treeData[random]);
    if(document.getElementById("preorder")){
  
        resetTraversal();
        tree_traversal.sequence_list = [];
        preorder();
    }
    if(document.getElementById("bft"))bft();
}

export function submit(){
    let clicked_Nodes = Array.from(node_map.values());
    // Comparing and checking the equality of the two lists 
    if(clicked_Nodes.length!==tree_traversal.sequence_list.length){


       tree_traversal.error=1;
  
       
   }else{

   for(let i=0; i<clicked_Nodes.length; i++){
       
       if(clicked_Nodes[i]!=tree_traversal.sequence_list[i]){
           tree_traversal.error=1;
           break;
       }
   }
   }    
   if(tree_traversal.error===1){
       document.getElementById("commentbox").style.display = "block";
       document.getElementById("comments").innerHTML = 'Traversal Complete.Your Traversal is incorrect.Try again! \n Re-attempt practice section.'
       document.getElementById("traversal").innerHTML = clicked_Nodes.toString();
   }
   else{
       document.getElementById("commentbox").style.display = "block";
       document.getElementById("comments").innerHTML = 'Traversal Complete.Your Traversal is correct!'
       document.getElementById("traversal").innerHTML = clicked_Nodes.toString();
   } 
  
 
}
window.submit=submit;

// Function that checks what the user clicks on a node  and pushes it  into a list
export function checkClick(d){
   node_map.set(d,d.name);
   console.log(node_map);
   prev_selected_node = d;
   visitElement(d, 0);
}

//The undo function that undoes the button the user just clicked 
export function undo(){
    if( Array.from(node_map.values()).length>0){
        let len =  Array.from(node_map.keys()).length;
        let lastkey = Array.from(node_map.keys())[len-1];
        node_map.delete(lastkey);
        clearElement(lastkey,0);
        document.getElementById("undo").disabled = false;
        
    }
}
window.undo = undo;

// The function that stores if two objects have the same data or not 
export const haveSameData = function(obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if(obj1Length === obj2Length) {
        return Object.keys(obj1).every(
            key => obj2.hasOwnProperty(key)
               && obj2[key] === obj1[key]);
    }
    return false;
}


//function that checks if the list of selected nodes contains a particular node

export const sameElement = function(element){
    let keys = node_map.keys()
    let count = 0;
    for(let i = 0;i<keys.length;i++){
        if(haveSameData(keys[i],element)===true){
            count++;
        }
        if(count > 1){
            return true;
        }
    }
   
    return false;
}


// A function that adds the colour to the node when clicked   
export function visitElement(element, animX) {
    //document.getElementById("undo").disabled = false;
    document.getElementById("undo").style.color = '#FFFFFF';
    let len = node_map.size;
    if(len!=1&&(sameElement(element))){
        node_map.delete(element);
    }else{
    d3.select("#node-" + element.id)
        .transition().duration(tree_traversal.animDuration).delay(tree_traversal.animDuration * animX)
        .style("fill", "rgb(158, 208, 62)").style("stroke", "rgb(158, 208, 62)");
    document.getElementById("node-text" + element.id).style.pointerEvents = 'none';
    tree_traversal.disabled_ids.push("node-text" + element.id);
    }
    document.getElementById("traversal").innerHTML = Array.from(node_map.values()).toString();

}



//The function that performs the removal of colour from a node for the undo function 
export function clearElement(element, animX) {
    d3.select("#node-" + element.id)
        .transition().duration(tree_traversal.animDuration).delay(tree_traversal.animDuration * animX)
        .style("fill", "rgb(255, 255, 255)").style("stroke", "rgb(70, 130, 180)");
    document.getElementById("node-text" + element.id).style.pointerEvents = 'none';
    tree_traversal.disabled_ids.push("node-text" + element.id);
    document.getElementById("traversal").innerHTML = Array.from(node_map.values()).toString();
    
}

export function update(root) {
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
        .attr("r", 25)
        .style("stroke", "rgb(158, 208, 62)")
        .style("cursor","pointer")
        .on("click", function(d) {
                checkClick(d);
        }   )
        .html(i)
    elemEnter.append("text")
        .text(function(d) {
            return d.name
        })
        .attr("id", function(d) {
            return "node-text" + d.id;
        })
        .attr("x", function(d) {
            return d.x - 6
        })
        .attr("y", function(d) {
            return d.y + 6
        })
        .style("font-size", "22px")
        .style("cursor","pointer")
        .on("click", function(d) {
            checkClick(d);
    }   ); 
    var linkWrapper = svg.append("g").attr("id","links").selectAll("path.link")
    .data(links, function(d) { return d.target.id; })
    .enter()
    .append("line", "g")
    .attr("stroke-width", 8)
    .attr("class", "link")
    .attr("id",function(d){
    return d.source.id +"->"+ d.target.id;
    })
    .attr('x1', function(d){return d.source.x;})
    .attr('x2',function(d){return d.target.x;})
    .attr('y1',function(d){return d.source.y;})
    .attr('y2',function(d){return d.target.y;});
    d3.select("#nodes").moveToFront();
}

function bft() {
    resetTraversal();
    tree_traversal.sequence_list=[];
    document.getElementById("bft").style.backgroundColor = '#97CB3B';
    document.getElementById("bft").style.color = '#000000';
    document.getElementById("bft").style.borderColor = "#97CB3B";
    document.getElementById("generate").disabled=true;
    tree_traversal.traversal_selected = true;
    var queue = [];
    var animX = 0;
    queue.push(root);
    while (queue.length !== 0) {
        var element = queue.shift();
        tree_traversal.sequence_list.push(element.name);
        if (element.children !== undefined) {
            for (var i = element.children.length-1; i > -1; i--) {
                queue.push(element.children[i]);
            }
        }
    }
}
var animX1=0;

function generateG(){
    resetTraversal();
    generateGraph();
    if(document.getElementById("preorder"))preorder();
    if(document.getElementById("bft"))bft();
}
window.generateG=generateG;
function reset(){
    resetTraversal();
    if(document.getElementById("preorder"))preorder();
    if(document.getElementById("bft"))bft();
}
window.reset=reset;
    
generateGraph()
    
