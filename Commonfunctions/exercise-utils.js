"use strict";
import { treeData } from "../depth-first-traversal/simulation/js/data.js";
import {
  tree_traversal,
  svg,
  root,
  i,
  changeSvg,
  changeRoot,
  changei,
} from "../depth-first-traversal/simulation/js/globalvariables.js";

// Initialize clicked_node_ids if it doesn't exist
if (!tree_traversal.clicked_node_ids) {
  tree_traversal.clicked_node_ids = [];
}
// Hide traversal buttons not in use
if (document.getElementById("inorder")) {
  document.getElementById("inorder").style.visibility = "hidden";
}
if (document.getElementById("postorder")) {
  document.getElementById("postorder").style.visibility = "hidden";
}

// Use an array to track user clicks in order
let node_click_order = [];
export let prev_selected_node = null;

export function resetTraversal() {
  tree_traversal.error = 0;
  document.getElementById("commentbox").style.display = "none";
  document.getElementById("generate").disabled = false;

  if (document.contains(document.getElementById("inorder"))) {
    document.getElementById("inorder").style.backgroundColor = "#3297CF";
    document.getElementById("preorder").style.backgroundColor = "#3297CF";
    document.getElementById("postorder").style.backgroundColor = "#3297CF";
  } else if (document.contains(document.getElementById("bft"))) {
    document.getElementById("bft").style.backgroundColor = "#3297CF";
  }

  if (tree_traversal.disabled_ids.length > 0) {
    for (changei(0); i < tree_traversal.disabled_ids.length; changei(i + 1)) {
      document.getElementById(
        tree_traversal.disabled_ids[i]
      ).style.pointerEvents = "auto";
    }
    tree_traversal.disabled_ids = [];
  }

  tree_traversal.traversal_selected = false;
  prev_selected_node = null;
  node_click_order = [];
  tree_traversal.clicked_node_ids = [];

  document.getElementById("traversal").innerHTML = "";
  document.getElementById("comments").innerHTML = "";
  d3.selectAll(".node")
    .transition()
    .duration(tree_traversal.animDuration)
    .style("fill", "#fff")
    .style("stroke", "steelblue");

  if (document.getElementById("inorder")) {
    document.getElementById("inorder").disabled = false;
    document.getElementById("postorder").disabled = false;
    document.getElementById("preorder").disabled = false;
    document.getElementById("inorder").style.borderColor = "#3297CF";
    document.getElementById("preorder").style.borderColor = "#3297CF";
    document.getElementById("postorder").style.borderColor = "#3297CF";
    document.getElementById("inorder").style.color = "#FFFFFF";
    document.getElementById("postorder").style.color = "#FFFFFF";
    document.getElementById("preorder").style.color = "#FFFFFF";
  } else if (document.getElementById("bft")) {
    document.getElementById("bft").style.color = "#FFFFFF";
    document.getElementById("bft").style.borderColor = "#3297CF";
  }
}
window.resetTraversal = resetTraversal;

export function generateGraph() {
  let textTraversal = document.getElementById("tree");
  d3.select("svg").remove();
  // Reset clicked nodes for new graph
  tree_traversal.clicked_node_ids = [];

  changeSvg(
    d3
      .select("#tree")
      .append("svg")
      .attr("id", "grap")
      .attr(
        "width",
        tree_traversal.width +
          tree_traversal.margin.right +
          tree_traversal.margin.left
      )
      .attr(
        "height",
        tree_traversal.height +
          tree_traversal.margin.top +
          tree_traversal.margin.bottom
      )
      .attr("viewBox", "-70 -15 700 530")
      .append("g")
      .attr(
        "transform",
        "translate(" +
          tree_traversal.margin.left +
          "," +
          tree_traversal.margin.top +
          ")"
      )
  );
  var random = Math.floor(Math.random() * 100);
  random = random % treeData.length;
  changeRoot(treeData[random]);
  update(treeData[random]);
  if (document.getElementById("preorder")) {
    resetTraversal();
    tree_traversal.sequence_list = [];
    xorder(root);
  }
  if (document.getElementById("bft")) bft();
}

export function submit() {
  // Log both sequences for debugging
  console.log("User sequence:", node_click_order);
  console.log("Correct sequence (X-order):", tree_traversal.sequence_list);

  if (node_click_order.length !== tree_traversal.sequence_list.length) {
    tree_traversal.error = 1;
  } else {
    for (let i = 0; i < node_click_order.length; i++) {
      if (node_click_order[i] != tree_traversal.sequence_list[i]) {
        tree_traversal.error = 1;
        break;
      }
    }
  }
  if (tree_traversal.error === 1) {
    document.getElementById("commentbox").style.display = "block";
    document.getElementById("comments").innerHTML =
      "Traversal Complete.Your Traversal is incorrect.Try again! \n Re-attempt practice section.";
    document.getElementById("traversal").innerHTML =
      node_click_order.join(", ");
    console.log("Validation: FAIL");
  } else {
    document.getElementById("commentbox").style.display = "block";
    document.getElementById("comments").innerHTML =
      "Traversal Complete.Your Traversal is correct!";
    document.getElementById("traversal").innerHTML =
      node_click_order.join(", ");
    console.log("Validation: SUCCESS");
  }
}
window.submit = submit;

// Function that checks what the user clicks on a node and pushes it into a list
export function checkClick(d) {
  // Track clicked node IDs to handle duplicate values
  if (!tree_traversal.clicked_node_ids) {
    tree_traversal.clicked_node_ids = [];
  }

  if (!tree_traversal.clicked_node_ids.includes(d.id)) {
    tree_traversal.clicked_node_ids.push(d.id);
    node_click_order.push(d.name);
    prev_selected_node = d;
    visitElement(d, 0);
  }
}

// The undo function that undoes the button the user just clicked
export function undo() {
  if (node_click_order.length > 0) {
    let lastNodeName = node_click_order.pop();
    let lastNodeId = tree_traversal.clicked_node_ids.pop();
    // Find the node object by name (if needed for clearElement)
    // This assumes unique node names in the tree
    let allNodes = d3.selectAll(".node").data();
    let lastNodeObj = allNodes.find((n) => n.id == lastNodeId);
    if (lastNodeObj) {
      clearElement(lastNodeObj, 0);
    }
    document.getElementById("undo").disabled = false;
  }
}
window.undo = undo;

// A function that adds the colour to the node when clicked
export function visitElement(element, animX) {
  document.getElementById("undo").style.color = "#FFFFFF";
  d3.select("#node-" + element.id)
    .transition()
    .duration(tree_traversal.animDuration)
    .delay(tree_traversal.animDuration * animX)
    .style("fill", "rgb(158, 208, 62)")
    .style("stroke", "rgb(158, 208, 62)");
  document.getElementById("node-text" + element.id).style.pointerEvents =
    "none";
  tree_traversal.disabled_ids.push("node-text" + element.id);
  document.getElementById("traversal").innerHTML = node_click_order.join(", ");
}

//The function that performs the removal of colour from a node for the undo function
export function clearElement(element, animX) {
  d3.select("#node-" + element.id)
    .transition()
    .duration(tree_traversal.animDuration)
    .delay(tree_traversal.animDuration * animX)
    .style("fill", "rgb(255, 255, 255)")
    .style("stroke", "rgb(70, 130, 180)");
  document.getElementById("node-text" + element.id).style.pointerEvents =
    "auto";
  // Remove from disabled_ids if present
  tree_traversal.disabled_ids = tree_traversal.disabled_ids.filter(
    (id) => id !== "node-text" + element.id
  );
  document.getElementById("traversal").innerHTML = node_click_order.join(", ");
}

export function update(root) {
  resetTraversal();
  var nodes = tree_traversal.tree.nodes(root).reverse(),
    links = tree_traversal.tree.links(nodes);
  nodes.forEach(function (d) {
    d.y = d.depth * 150;
  });
  var nodes1 = svg
    .append("g")
    .attr("id", "nodes")
    .selectAll("g.node")
    .data(nodes, function (d) {
      return d.id || (d.id = changei(i + 1));
    });

  var elemEnter = nodes1.enter().append("g");
  elemEnter
    .append("circle")
    .attr("class", "node")
    .attr("id", function (d) {
      return "node-" + d.id;
    })
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    })
    .attr("r", 25)
    .style("stroke", "rgb(158, 208, 62)")
    .style("cursor", "pointer")
    .on("click", function (d) {
      checkClick(d);
    })
    .html(i);
  elemEnter
    .append("text")
    .text(function (d) {
      return d.name;
    })
    .attr("id", function (d) {
      return "node-text" + d.id;
    })
    .attr("x", function (d) {
      return d.x - 6;
    })
    .attr("y", function (d) {
      return d.y + 6;
    })
    .style("font-size", "22px")
    .style("cursor", "pointer")
    .on("click", function (d) {
      checkClick(d);
    });
  var linkWrapper = svg
    .append("g")
    .attr("id", "links")
    .selectAll("path.link")
    .data(links, function (d) {
      return d.target.id;
    })
    .enter()
    .append("line", "g")
    .attr("stroke-width", 8)
    .attr("class", "link")
    .attr("id", function (d) {
      return d.source.id + "->" + d.target.id;
    })
    .attr("x1", function (d) {
      return d.source.x;
    })
    .attr("x2", function (d) {
      return d.target.x;
    })
    .attr("y1", function (d) {
      return d.source.y;
    })
    .attr("y2", function (d) {
      return d.target.y;
    });
  d3.select("#nodes").moveToFront();
}

function bft() {
  resetTraversal();
  tree_traversal.sequence_list = [];
  document.getElementById("bft").style.backgroundColor = "#97CB3B";
  document.getElementById("bft").style.color = "#000000";
  document.getElementById("bft").style.borderColor = "#97CB3B";
  document.getElementById("generate").disabled = true;
  tree_traversal.traversal_selected = true;
  var queue = [];
  var animX = 0;
  queue.push(root);
  while (queue.length !== 0) {
    var element = queue.shift();
    tree_traversal.sequence_list.push(element.name);
    if (element.children !== undefined) {
      for (var i = element.children.length - 1; i > -1; i--) {
        queue.push(element.children[i]);
      }
    }
  }
}

function xorder(node, isRoot = true) {
  // Clear the sequence list only on the first call (root level)
  if (isRoot) {
    tree_traversal.sequence_list = [];
  }

  if (!node) return;

  // Root: Process current node
  tree_traversal.sequence_list.push(node.name);

  // Right: Process right subtree first
  if (node.children && node.children.length > 1) {
    xorder(node.children[1], false); // Right child (not root)
  }

  // Left: Process left subtree
  if (node.children && node.children.length > 0) {
    xorder(node.children[0], false); // Left child (not root)
  }
}

var animX1 = 0;

function generateG() {
  resetTraversal();
  generateGraph();
  if (document.getElementById("preorder")) {
    tree_traversal.sequence_list = [];
    xorder(root);
  }
  if (document.getElementById("bft")) bft();
}

window.generateG = generateG;
function reset() {
  resetTraversal();
  if (document.getElementById("preorder")) {
    tree_traversal.sequence_list = [];
    xorder(root);
  }
  if (document.getElementById("bft")) bft();
}
window.reset = reset;

generateGraph();
