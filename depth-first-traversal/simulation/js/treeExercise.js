if(document.getElementById('inorder')){
document.getElementById('inorder').style.visibility = 'hidden';}
if(document.getElementById('postorder')){
document.getElementById('postorder').style.visibility = 'hidden';}


  function generateGraph(){
    textTraversal=document.getElementById('tree');
    d3.select("svg").remove();
    svg = d3.select("#tree").append("svg")
    .attr("id","grap") 
    .attr("width", tree_traversal.width + tree_traversal.margin.right + tree_traversal.margin.left)
    .attr("height", tree_traversal.height + tree_traversal.margin.top + tree_traversal.margin.bottom)
    .attr('viewBox','-70 -15 700 530')
    .append("g")
    .attr("transform", "translate(" + tree_traversal.margin.left + "," + tree_traversal.margin.top + ")");
    var random=Math.floor(Math.random() * 100);  
    random=(random%treeData.length);
    console.log(random);
    root= treeData[random];
    update(treeData[random]);
    if(document.getElementById("preorder"))preorder();
    if(document.getElementById("bft"))bft();
}

  


function resetTraversal() {
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
        for (i = 0; i < tree_traversal.disabled_ids.length; i++) {
            document.getElementById(tree_traversal.disabled_ids[i]).style.pointerEvents = 'auto';
        }
        tree_traversal.disabled_ids = []
    }
    tree_traversal.traversal_selected = false;
    tree_traversal.sequence_list = []
    index = -1;
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


  function submit(){
        if(index==(tree_traversal.sequence_list.length-1)){
        if(tree_traversal.error==0){
        document.getElementById("commentbox").style.display = "block";
        document.getElementById("comments").innerHTML = 'Traversal Complete.Your Traversal is correct!'
        }
        else{
        document.getElementById("commentbox").style.display = "block";
        document.getElementById("comments").innerHTML = 'Traversal Complete.Your Traversal is incorrect.Try again! \n Re-attempt practice section.'
        }
        }
        else{
        document.getElementById("commentbox").style.display = "block";
        document.getElementById("comments").innerHTML = 'Traversal Incomplete.Your Traversal is incorrect.Try again! \n Re-attempt practice section.'
        }
        }

function check(d){
if(tree_traversal.traversal_selected==false){
      alert("Select a traversal first.");
      return;
    }
    index+=1; 
    if(index==(tree_traversal.sequence_list.length-1)){
    visitElement(d,0)
    }
    else if( d.name!=tree_traversal.sequence_list[index] )
    {  
        tree_traversal.error=1;
    visitElement(d,0);   
    }
    else{
    visitElement(d,0);
    }
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
            return d.id || (d.id = ++i);
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
                check(d);
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
            check(d);
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




function visitElement(element, animX) {
    if(!tree_traversal.sequence_list[index])
        return;
    

    d3.select("#node-" + element.id)
        .transition().duration(tree_traversal.animDuration).delay(tree_traversal.animDuration * animX)
        .style("fill", "rgb(158, 208, 62)").style("stroke", "rgb(158, 208, 62)");
    setTimeout(function() {
        d3.select("#traversal").append("text").text(element.name + " ");
    }, 1.2 * tree_traversal.animDuration * animX);
    document.getElementById("node-text" + element.id).style.pointerEvents = 'none';
    tree_traversal.disabled_ids.push("node-text" + element.id);
}


function bft() {
    resetTraversal();
    document.getElementById("bft").style.backgroundColor = '#97CB3B';
    document.getElementById("bft").style.color = '#000000';
    document.getElementById("bft").style.borderColor = "#97CB3B";
    document.getElementById("generate").disabled=true;
    tree_traversal.traversal_selected = true;
    var queue = [];
    var animX = 0;
    queue.push(root);
    while (queue.length !== 0) {
        console.log(queue);
        var element = queue.shift();
        tree_traversal.sequence_list.push(element.name);
        console.log(tree_traversal.sequence_list)
        if (element.children !== undefined) {
            for (var i = element.children.length-1; i > -1; i--) {
                queue.push(element.children[i]);
            }
        }
    }
}
var animX1=0;



  function recursiveInorder(root) {
     if (root !== undefined) {
         if (root.children !== undefined)
             recursiveInorder(root.children[0])
             tree_traversal.sequence_list.push(root.name);
         console.log("called", tree_traversal.sequence_list);
         if (root.children !== undefined)
             recursiveInorder(root.children[1])
     }
 }
 function recursivePreorder(root) {
     console.log("called", root)
     if (root !== undefined) {
        tree_traversal.sequence_list.push(root.name);
         if (root.children !== undefined)
             recursivePreorder(root.children[1])
         if (root.children !== undefined)
             recursivePreorder(root.children[0])
     }
 }
 function recursivePostorder(root) {
     console.log("called", root)
     if (root !== undefined) {
         if (root.children !== undefined)
             recursivePostorder(root.children[0])
         if (root.children !== undefined)
             recursivePostorder(root.children[1])
             tree_traversal.sequence_list.push(root.name)
     }
 }





function generateG(){
    resetTraversal();
    generateGraph();
    if(document.getElementById("preorder"))preorder();
    if(document.getElementById("bft"))bft();
}
function reset(){
    resetTraversal();
    if(document.getElementById("preorder"))preorder();
    if(document.getElementById("bft"))bft();
}

generateGraph()

generateGraph()
