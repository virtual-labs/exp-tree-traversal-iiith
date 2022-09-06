import { resetTraversal,recursiveInorder,recursivePostorder,recursivePreorder } from "../../../Commonfunctions/commonfunctions-demo.js";
import { tree_traversal,root } from "./globalvariables.js";



export function postorder() {
    let  animX1=0;
    resetTraversal();
    tree_traversal.traversal_selected = true;
   togglecolors("postorder","preorder","inorder");
    recursivePostorder(root);
    document.getElementById("reset").disabled=false;
  }



export function preorder() {
  let animX1=0;
  resetTraversal();
  tree_traversal.traversal_selected = true;
  togglecolors("preorder","postorder","inorder");
  recursivePreorder(root);
  document.getElementById("reset").disabled=false;
}



 export function inorder() {
    let animX1=0;
    resetTraversal();
    tree_traversal.traversal_selected = true;
    togglecolors("inorder","preorder","postorder");
    recursiveInorder(root);
    document.getElementById("reset").disabled=false;
  }




export function togglecolors(traversal1,traversal2,traversal3)
{
    if(document.getElementById("generate")){
      document.getElementById("generate").disabled=true;
    }
    document.getElementById(traversal1).disabled = true; 
    document.getElementById(traversal1).style.backgroundColor = '#97CB3B';
    document.getElementById(traversal1).style.borderColor = "#97CB3B";
    document.getElementById("reset").disabled=true;
    document.getElementById(traversal1).style.color = '#000000';
    document.getElementById(traversal2).style.backgroundColor = '#808080';
    document.getElementById(traversal3).style.backgroundColor = '#808080';
    document.getElementById(traversal2).disabled = true; 
    document.getElementById(traversal3).disabled = true; 
    document.getElementById(traversal2).style.color = '#ffffff';
    document.getElementById(traversal3).style.color = '#ffffff';
    document.getElementById(traversal2).style.borderColor = "#808080";
    document.getElementById(traversal3).style.borderColor = "#808080";
}
