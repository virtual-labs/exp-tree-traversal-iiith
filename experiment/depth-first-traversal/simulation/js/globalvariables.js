export class tree_traversal1{
  constructor(){
      this.toogle=false;
      this.sequence_list=[];
      this.error=0;
      this.disabled_ids=[];
      this.traversal_selected = false;
      this.margin = {top: 20, right: 0, bottom: 20, left: 0};
      this.width = document.getElementById("tree").offsetWidth - this.margin.right - this.margin.left;
      this.height = document.getElementById("tree").offsetHeight - this.margin.top - this.margin.bottom;
      this.animDuration=800;
      this.tree = d3.layout.tree().size([this.height, this.width]);
      d3.selection.prototype.moveToFront = function() {  
        return this.each(function(){
        this.parentNode.appendChild(this);
        });
        };
      };
};
export let tree_traversal = new tree_traversal1();
 export  var root;
export   var i=0;
export  let svg;

export function changeSvg(newvalue){
  svg = newvalue;
}

export function changeRoot(newvalue){
  root = newvalue;
}

export function changei(newvalue){
  i = newvalue;
  return i;
}
