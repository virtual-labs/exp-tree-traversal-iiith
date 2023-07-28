import { resetTraversal } from "../../../Commonfunctions/exercise-utils.js";
import { tree_traversal,root, } from "./globalvariables.js";

//Inorder traversal  
export function recursiveInorder(root) {
  if (root !== undefined) {
      if (root.children !== undefined)
          recursiveInorder(root.children[0])
          tree_traversal.sequence_list.push(root.name);
      if (root.children !== undefined)
          recursiveInorder(root.children[1])
  }
}

//Preorder traversal 
export function recursivePreorder(root) {
  if (root !== undefined) {
  tree_traversal.sequence_list.push(root.name);
      if (root.children !== undefined)
          recursivePreorder(root.children[1])
      if (root.children !== undefined)
          recursivePreorder(root.children[0])
  }
}
//PostOrder traversal 
export function recursivePostorder(root) {
  if (root !== undefined) {
      if (root.children !== undefined)
          recursivePostorder(root.children[0])
      if (root.children !== undefined)
          recursivePostorder(root.children[1])
          tree_traversal.sequence_list.push(root.name)
  }
}
export function postorder() {
    let  animX1=0;

    tree_traversal.traversal_selected = true;
   togglecolors("postorder","preorder","inorder");
    recursivePostorder(root);
    document.getElementById("reset").disabled=false;
  }



export function preorder() {
  let animX1=0;
  tree_traversal.sequence_list=[];
  tree_traversal.traversal_selected = true;
  togglecolors("preorder","postorder","inorder");
  recursivePreorder(root);
  document.getElementById("reset").disabled=false;
}



 export function inorder() {
    let animX1=0;
  
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
